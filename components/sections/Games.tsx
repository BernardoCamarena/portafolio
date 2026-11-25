'use client'

import { useState } from 'react'
import Image from 'next/image'
import { GAMES } from '@/lib/constants'
import { useLang } from '@/hooks/useLang'
import { Lightbox } from '@/components/ui/Lightbox'

type Game = (typeof GAMES)[number]

function GameShowcase({ game, index }: { game: Game; index: number }) {
  const { t } = useLang()
  const g = t.games
  const copy = g.items[index]
  const [active, setActive] = useState(0)
  const [open, setOpen] = useState(false)

  const shots = game.shots.map((s, i) => ({ src: s.src, alt: `${game.name} — ${copy.shots[i]}` }))

  return (
    <article className={`game reveal${index % 2 === 1 ? ' game-reverse' : ''}`} id={game.id}>
      <div className="game-media">
        <button
          type="button"
          className="game-stage"
          onClick={() => setOpen(true)}
          aria-label={`${g.zoom}: ${shots[active].alt}`}
          data-hover
        >
          <Image
            src={shots[active].src}
            alt={shots[active].alt}
            fill
            sizes="(max-width: 900px) 100vw, 60vw"
            priority={index === 0}
          />
          <span className="game-stage-caption">{copy.shots[active]}</span>
          <span className="game-zoom" aria-hidden="true">⤢ {g.zoom}</span>
        </button>

        <div className="game-thumbs">
          {shots.map((s, i) => (
            <button
              key={s.src}
              type="button"
              className={`game-thumb${i === active ? ' is-active' : ''}`}
              onClick={() => setActive(i)}
              aria-label={s.alt}
              aria-pressed={i === active}
              data-hover
            >
              <Image src={s.src} alt="" fill sizes="160px" />
            </button>
          ))}
        </div>
      </div>

      <div className="game-info">
        <div className="game-badges">
          <span className="game-badge">{g.badgeUni}</span>
          <span className="game-badge">{g.badgeProto}</span>
        </div>

        <h3 className="game-title">{game.name}</h3>
        <p className="game-genre">{copy.genre}</p>
        <p className="game-desc">{copy.desc}</p>

        <ul className="game-features">
          {copy.features.map((f) => (
            <li key={f}>{f}</li>
          ))}
        </ul>

        <dl className="game-specs">
          <div><dt>{g.specs.engine}</dt><dd>{game.engine}</dd></div>
          <div><dt>{g.specs.year}</dt><dd>{game.year}</dd></div>
          <div><dt>{g.specs.platforms}</dt><dd>{game.platforms}</dd></div>
          {game.team && (
            <div><dt>{g.specs.team}</dt><dd>{game.team} {g.specs.people}</dd></div>
          )}
        </dl>

        <div className="game-actions">
          <a className="game-btn game-btn-primary" href={game.download.url} data-hover>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M7 1v8m0 0L3.5 5.5M7 9l3.5-3.5M1.5 12.5h11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span>{g.download}</span>
            <span className="game-btn-meta">{game.download.version} · {game.download.size}</span>
          </a>
          {game.play && (
            <a className="game-btn" href={game.play} target="_blank" rel="noopener" data-hover>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                <path d="M2.5 1.5v9l8-4.5-8-4.5z" fill="currentColor" />
              </svg>
              <span>{g.play}</span>
            </a>
          )}
        </div>

        <div className="game-tags">
          {game.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </div>

      {open && (
        <Lightbox
          images={shots}
          captions={[...copy.shots]}
          start={active}
          labels={g.lightbox}
          onClose={(last) => {
            setActive(last)
            setOpen(false)
          }}
        />
      )}
    </article>
  )
}

export function Games() {
  const { t } = useLang()
  const g = t.games

  return (
    <section className="games" id="games">
      <div className="section-head">
        <span className="num">{g.num}</span>
        <h2>{g.h2}</h2>
      </div>

      <p className="games-intro reveal">{g.intro}</p>

      <div className="games-list">
        {GAMES.map((game, i) => (
          <GameShowcase key={game.id} game={game} index={i} />
        ))}
      </div>

      <p className="games-note reveal">{g.note}</p>
    </section>
  )
}
