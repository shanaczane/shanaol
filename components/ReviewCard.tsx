import type { Review } from '@/lib/reviews'

// ─── Style maps ──────────────────────────────────────────────

const TYPE_ACCENT: Record<string, string> = {
  game:  'var(--mint)',
  anime: 'var(--pink)',
  manga: 'var(--sky)',
  movie: 'var(--yellow)',
}

const TYPE_TAG: Record<string, string> = {
  game:  'tag-gaming',
  anime: 'tag-anime',
  manga: 'tag-manga',
  movie: 'tag-movies',
}

const STATUS_ACCENT: Record<string, string> = {
  'completed':   'var(--mint)',
  'in progress': 'var(--sky)',
  'dropped':     'var(--pink)',
  'on hold':     'var(--yellow)',
}

// ─── Score bar ───────────────────────────────────────────────

function ScoreBar({ score, accent }: { score: number; accent: string }) {
  const pct = (score / 10) * 100
  return (
    <div className="progress-track" style={{ marginTop: '0.35rem' }}>
      <div
        className="progress-fill"
        style={{ width: `${pct}%`, background: `linear-gradient(90deg, var(--bright), ${accent})` }}
        role="progressbar"
        aria-valuenow={score}
        aria-valuemin={0}
        aria-valuemax={10}
        aria-label={`Score: ${score} out of 10`}
      />
    </div>
  )
}

// ─── ReviewCard ──────────────────────────────────────────────

export default function ReviewCard({ review: r }: { review: Review }) {
  const accent       = TYPE_ACCENT[r.type]  ?? 'var(--sky)'
  const tagClass     = TYPE_TAG[r.type]     ?? 'tag-random'
  const statusAccent = STATUS_ACCENT[r.status] ?? 'var(--white)'

  return (
    <article
      className="widget"
      style={{
        borderTop:  `3px solid ${accent}`,
        display:    'flex',
        flexDirection: 'column',
        gap:        '0.6rem',
        height:     '100%',
      }}
    >
      {/* Cover emoji + type tag */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <span
          aria-hidden="true"
          style={{
            fontSize: '2rem',
            lineHeight: 1,
            filter: `drop-shadow(0 0 6px ${accent}60)`,
          }}
        >
          {r.cover}
        </span>
        <span className={`tag ${tagClass}`} style={{ fontSize: '0.8rem', flexShrink: 0 }}>
          {r.type}
        </span>
      </div>

      {/* Title */}
      <p
        style={{
          fontFamily:  'var(--font-body)',
          fontSize:    '0.95rem',
          fontWeight:  700,
          color:       'var(--white)',
          lineHeight:  1.35,
          overflow:    'hidden',
          display:     '-webkit-box',
          WebkitLineClamp: 2,
          WebkitBoxOrient: 'vertical',
        }}
      >
        {r.title}
      </p>

      {/* Score row */}
      <div>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.4rem' }}>
          <span
            style={{
              fontFamily:    'var(--font-terminal)',
              fontSize:      '1.3rem',
              color:         'var(--yellow)',
              letterSpacing: '0.02em',
            }}
          >
            ★
          </span>
          <span
            style={{
              fontFamily:    'var(--font-terminal)',
              fontSize:      '1.2rem',
              color:         accent,
              letterSpacing: '0.04em',
            }}
          >
            {r.score}
            <span style={{ color: 'var(--sky)', opacity: 0.5, fontSize: '1rem' }}>/10</span>
          </span>
          <span
            style={{
              fontFamily:    'var(--font-terminal)',
              fontSize:      '0.9rem',
              color:         statusAccent,
              marginLeft:    'auto',
              letterSpacing: '0.03em',
              opacity:       0.85,
              flexShrink:    0,
            }}
          >
            {r.status}
          </span>
        </div>
        <ScoreBar score={r.score} accent={accent} />
      </div>

      {/* Excerpt */}
      <p
        style={{
          fontFamily: 'var(--font-body)',
          fontSize:   '0.85rem',
          color:      'var(--white)',
          opacity:    0.65,
          lineHeight: 1.6,
          flexGrow:   1,
          overflow:   'hidden',
          display:    '-webkit-box',
          WebkitLineClamp: 3,
          WebkitBoxOrient: 'vertical',
        }}
      >
        {r.excerpt}
      </p>
    </article>
  )
}
