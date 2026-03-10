import Widget from '@/components/Widget'

type UpdateEntry = {
  date:    string   // Display string, e.g. "Mar 10"
  label:   string   // Short action text
  detail?: string   // Optional subtitle
  accent:  string   // Dot color
}

// Update this array whenever you add content to the site
const UPDATES: UpdateEntry[] = [
  {
    date:   'Mar 10',
    label:  'site launched',
    detail: 'shanaol is live ✦',
    accent: 'var(--cyan)',
  },
  {
    date:   'Mar 10',
    label:  'homepage built',
    detail: 'hero, ticker, widgets',
    accent: 'var(--mint)',
  },
  {
    date:   'Mar 10',
    label:  'added currently tracker',
    detail: 'Blue Protocol · Dungeon Meshi · Berserk',
    accent: 'var(--sky)',
  },
  {
    date:   'Mar 10',
    label:  'design system done',
    detail: 'starfield, animations, all the vibes',
    accent: 'var(--pink)',
  },
]

export default function SiteUpdates() {
  return (
    <Widget title="site updates" accent="var(--sky)" as="section">
      <ol
        style={{
          listStyle: 'none',
          display:   'flex',
          flexDirection: 'column',
          gap: '0',
        }}
        aria-label="Recent site activity"
      >
        {UPDATES.map((entry, i) => (
          <li
            key={i}
            style={{
              display:  'flex',
              gap:      '0.75rem',
              position: 'relative',
              paddingBottom: i < UPDATES.length - 1 ? '1rem' : 0,
            }}
          >
            <div
              style={{
                display:        'flex',
                flexDirection:  'column',
                alignItems:     'center',
                flexShrink:     0,
                width:          '12px',
              }}
            >
              <div
                aria-hidden="true"
                style={{
                  width:        '8px',
                  height:       '8px',
                  borderRadius: '50%',
                  background:   entry.accent,
                  boxShadow:    `0 0 6px ${entry.accent}`,
                  marginTop:    '5px',
                  flexShrink:   0,
                }}
              />
              {i < UPDATES.length - 1 && (
                <div
                  aria-hidden="true"
                  style={{
                    flex:       1,
                    width:      '1px',
                    background: 'var(--blue)',
                    marginTop:  '4px',
                  }}
                />
              )}
            </div>

            <div style={{ paddingBottom: '0.1rem' }}>
              <p
                style={{
                  fontFamily:    'var(--font-terminal)',
                  fontSize:      '1rem',
                  color:         'var(--white)',
                  letterSpacing: '0.04em',
                  lineHeight:    1.3,
                }}
              >
                {entry.label}
              </p>
              {entry.detail && (
                <p
                  style={{
                    fontFamily:  'var(--font-terminal)',
                    fontSize:    '0.9rem',
                    color:       'var(--sky)',
                    opacity:     0.7,
                    marginTop:   '0.1rem',
                  }}
                >
                  {entry.detail}
                </p>
              )}
              <p
                style={{
                  fontFamily:  'var(--font-terminal)',
                  fontSize:    '0.8rem',
                  color:       entry.accent,
                  opacity:     0.8,
                  marginTop:   '0.15rem',
                  letterSpacing: '0.05em',
                }}
              >
                {entry.date}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </Widget>
  )
}
