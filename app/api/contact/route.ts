import { Resend } from 'resend'
import { z } from 'zod'

const contactSchema = z.object({
  name: z.string().min(2, 'Nombre muy corto'),
  email: z.string().email('Email inválido'),
  budget: z.enum(['<5k', '5-15k', '15-30k', '30k+', 'discuss']),
  message: z.string().min(10, 'Mensaje muy corto'),
})

export async function POST(request: Request) {
  const body = await request.json()

  const result = contactSchema.safeParse(body)
  if (!result.success) {
    return Response.json(
      { error: result.error.flatten().fieldErrors },
      { status: 400 }
    )
  }

  const { name, email, budget, message } = result.data

  const esc = (s: string) =>
    s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

  try {
    const resend = new Resend(process.env.RESEND_API_KEY)
    const { data, error } = await resend.emails.send({
      from: 'Portfolio <noreply@bernardocamarena.dev>',
      to: [process.env.CONTACT_EMAIL!],
      subject: `Nuevo mensaje de ${esc(name)} — Presupuesto: ${budget}`,
      html: `
        <p><strong>De:</strong> ${esc(name)} (${esc(email)})</p>
        <p><strong>Presupuesto:</strong> ${budget}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${esc(message).replace(/\n/g, '<br>')}</p>
      `,
    })

    if (error) {
      return Response.json({ error: 'Error al enviar el email' }, { status: 500 })
    }

    return Response.json({ success: true, id: data?.id })
  } catch {
    return Response.json({ error: 'Error interno del servidor' }, { status: 500 })
  }
}
