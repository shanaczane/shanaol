import Widget from '@/components/Widget'
import currently from '@/content/currently.json'

type MediaItem = {
  emoji:    string
  label:    string
  title:    string
  sub:      string
  progress: number
  accent:   string
}

const ITEMS: MediaItem[] = [
  {
    emoji:    '🎮',
    label:    'gaming',
    title:    currently.game.title,
    sub:      currently.game.sub,
    progress: currently.game.progress,
    accent:   'var(--mint)',
  },
  {
    emoji:    '📺',
    label:    'watching',
    title:    currently.anime.title,
    sub:      currently.anime.sub,
    progress: currently.anime.progress,
    accent:   'var(--pink)',
  },
  {
    emoji:    '📖',
    label:    'reading',
    title:    currently.manga.title,
    sub:      currently.manga.sub,
    progress: currently.manga.progress,
    accent:   'var(--sky)',
  },
]

function ProgressBar({ value, accent }: { value: number; accent: string }) {
  return (
    <div className="progress-track" style={{ marginTop: '0.4rem' }}>
      <div
        className="progress-fill"
        style={{
          width:      `${value}%`,
          background: `linear-gradient(90deg, var(--bright), ${accent})`,
        }}
        role="progressbar"
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={`${value}% complete`}
      />
    </div>
  )
}

export default function CurrentlyWidget() {
  return (
    <Widget title="currently" accent="var(--cyan)" as="section">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {ITEMS.map((item) => (
          <div key={item.label}>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem' }}>
              <span aria-hidden="true" style={{ fontSize: '1rem', flexShrink: 0 }}>
                {item.emoji}
              </span>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div
                  style={{
                    display:        'flex',
                    justifyContent: 'space-between',
                    alignItems:     'baseline',
                    gap:            '0.5rem',
                  }}
                >
                  <p
                    style={{
                      fontFamily:   'var(--font-body)',
                      fontSize:     '0.875rem',
                      color:        'var(--white)',
                      fontWeight:   600,
                      whiteSpace:   'nowrap',
                      overflow:     'hidden',
                      textOverflow: 'ellipsis',
                    }}
                  >
                    {item.title}
                  </p>
                  <span
                    style={{
                      fontFamily:  'var(--font-terminal)',
                      fontSize:    '0.9rem',
                      color:       item.accent,
                      flexShrink:  0,
                    }}
                  >
                    {item.progress}%
                  </span>
                </div>
                <p
                  style={{
                    fontFamily:  'var(--font-terminal)',
                    fontSize:    '0.95rem',
                    color:       'var(--sky)',
                    letterSpacing: '0.03em',
                    opacity:     0.8,
                  }}
                >
                  {item.sub}
                </p>
                <ProgressBar value={item.progress} accent={item.accent} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </Widget>
  )
}
