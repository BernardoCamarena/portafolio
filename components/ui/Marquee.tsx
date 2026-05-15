import { Fragment } from 'react'

interface MarqueeProps {
  items: readonly string[]
}

export function Marquee({ items }: MarqueeProps) {
  return (
    <div className="marquee">
      <div className="marquee-track">
        <span>
          {items.map((item, i) => (
            <Fragment key={`a-${i}`}>
              <span>{item}</span>
              <span className="star" aria-hidden="true" />
            </Fragment>
          ))}
        </span>
        <span aria-hidden="true">
          {items.map((item, i) => (
            <Fragment key={`b-${i}`}>
              <span>{item}</span>
              <span className="star" aria-hidden="true" />
            </Fragment>
          ))}
        </span>
      </div>
    </div>
  )
}
