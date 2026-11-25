'use client'

import { useState } from 'react'
import { PROJECTS } from '@/lib/constants'
import { shade } from '@/lib/utils'
import { useLang } from '@/hooks/useLang'

function colTemplate(activeCol: number | null): string {
  if (activeCol === 0) return '5fr 1.5fr'
  if (activeCol === 1) return '1.5fr 5fr'
  return '3fr 2fr'
}

function ProjectCard({
  project,
  desc,
  type,
  active,
  onEnter,
  onLeave,
}: {
  project: (typeof PROJECTS)[number]
  desc:    string
  type:    string
  active:  boolean
  onEnter: () => void
  onLeave: () => void
}) {
  const hasImage = 'image' in project && !!project.image
  const hasUrl   = 'url'   in project && !!project.url
  const url      = hasUrl ? (project as { url: string }).url : undefined

  const className = `project-card${active ? ' is-active' : ''}`
  const sharedProps = {
    className,
    onMouseEnter: onEnter,
    onMouseLeave: onLeave,
    'data-hover': true as const,
  }

  const content = (
    <>
      {/* Background: screenshot or gradient */}
      <div
        className="media"
        style={
          hasImage
            ? {
                backgroundImage: `url(${(project as { image: string }).image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'left top',
              }
            : {
                background: `linear-gradient(160deg, ${project.color} 0%, ${shade(project.color, -40)} 100%)`,
              }
        }
      />

      {/* Dot pattern — skip for screenshot cards (competing textures) */}
      {!hasImage && (
        <svg
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.15 }}
          viewBox="0 0 400 400"
          preserveAspectRatio="xMidYMid slice"
          aria-hidden="true"
        >
          <defs>
            <pattern id={`pat-${project.id}`} width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="1" fill="#fff" />
            </pattern>
          </defs>
          <rect width="400" height="400" fill={`url(#pat-${project.id})`} />
          <circle cx="200" cy="200" r="120" fill="none" stroke="#fff" strokeOpacity="0.2" strokeDasharray="4 6" />
          <circle cx="200" cy="200" r="80" fill="none" stroke="#fff" strokeOpacity="0.25" />
        </svg>
      )}

      {/* Scrim: stronger top layer for image cards so badge is always readable */}
      <div
        className="scrim"
        style={
          hasImage
            ? { background: 'linear-gradient(180deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.10) 40%, rgba(0,0,0,0.90) 100%)' }
            : undefined
        }
      />

      <div className="meta-top">
        <span className="badge">{type}</span>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <span>{project.year}</span>
          {hasUrl && <span style={{ fontSize: 13, opacity: 0.7 }}>↗</span>}
        </div>
      </div>

      <div className="body">
        <h3 className="name">{project.name}</h3>
        <p className="desc">{desc}</p>
        <div className="tags">
          {project.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </div>
    </>
  )

  if (url) {
    return (
      <a href={url} target="_blank" rel="noreferrer" {...sharedProps}>
        {content}
      </a>
    )
  }
  return <div {...sharedProps}>{content}</div>
}

const THREE = PROJECTS.slice(0, 3)
const REST  = PROJECTS.slice(3)

function ProjectIndex() {
  const { t } = useLang()

  return (
    <div className="project-index reveal">
      <h3 className="project-index-title">{t.projects.more}</h3>
      <ul>
        {REST.map((p, k) => {
          const i      = k + 3
          const url    = 'url' in p ? p.url : undefined
          const isCode = !!url && url.includes('github.com')
          const row = (
            <>
              <span className="pi-year">{p.year}</span>
              <span className="pi-main">
                <span className="pi-name">{p.name}</span>
                <span className="pi-desc">{t.projects.descs[i]}</span>
              </span>
              <span className="pi-type">{t.projects.types[i]}</span>
              <span className="pi-tags">
                {p.tags.slice(0, 3).map((tag) => <span key={tag}>{tag}</span>)}
              </span>
              <span className="pi-link">
                {url ? `${isCode ? t.projects.code : t.projects.visit} ↗` : ''}
              </span>
            </>
          )
          return (
            <li key={p.id}>
              {url ? (
                <a className="pi-row" href={url} target="_blank" rel="noreferrer" data-hover>{row}</a>
              ) : (
                <div className="pi-row">{row}</div>
              )}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export function Projects() {
  const [activeCol, setActiveCol] = useState<number | null>(null)
  const [activeCard, setActiveCard] = useState<number | null>(null)
  const { t } = useLang()

  function enter(col: number, card: number) {
    setActiveCol(col)
    setActiveCard(card)
  }
  function leave() {
    setActiveCol(null)
    setActiveCard(null)
  }

  return (
    <section className="projects" id="projects">
      <div className="section-head">
        <span className="num">{t.projects.num}</span>
        <h2>{t.projects.h2}</h2>
      </div>
      <div
        className="projects-bento"
        style={{ gridTemplateColumns: colTemplate(activeCol) }}
      >
        <ProjectCard
          project={THREE[0]}
          desc={t.projects.descs[0]}
          type={t.projects.types[0]}
          active={activeCard === 0}
          onEnter={() => enter(0, 0)}
          onLeave={leave}
        />
        <ProjectCard
          project={THREE[1]}
          desc={t.projects.descs[1]}
          type={t.projects.types[1]}
          active={activeCard === 1}
          onEnter={() => enter(1, 1)}
          onLeave={leave}
        />
        <ProjectCard
          project={THREE[2]}
          desc={t.projects.descs[2]}
          type={t.projects.types[2]}
          active={activeCard === 2}
          onEnter={() => enter(1, 2)}
          onLeave={leave}
        />
      </div>
      <ProjectIndex />
    </section>
  )
}
