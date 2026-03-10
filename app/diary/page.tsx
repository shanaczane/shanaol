import Link                    from 'next/link'
import { getAllDiaryEntries }   from '@/lib/posts'

export const metadata = {
  title:       'diary',
  description: 'personal diary entries. lowercase. unfiltered.',
  openGraph: {
    title:       'diary — shanaol',
    description: 'personal diary entries. lowercase. unfiltered.',
    type:        'website',
  },
  twitter: {
    title:       'diary — shanaol',
    description: 'personal diary entries. lowercase. unfiltered.',
  },
}

// Format ISO date → "Mar 9, 2026"
function formatDate(iso: string) {
  return new Date(iso + 'T00:00:00').toLocaleDateString('en-US', {
    month: 'long',
    day:   'numeric',
    year:  'numeric',
  })
}

function formatShortDate(iso: string) {
  return new Date(iso + 'T00:00:00').toLocaleDateString('en-US', {
    month: 'short',
    day:   'numeric',
  })
}

function getPreview(content: string): string {
  const paragraphs = content
    .split(/\n\n+/)
    .map((p) =>
      p
        .trim()
        .replace(/[*_`#>]/g, '')
        .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
        .trim()
    )
    .filter(Boolean)

  return paragraphs.slice(0, 2).join('  ·  ')
}

export default function DiaryPage() {
  const entries = getAllDiaryEntries()

  return (
    <main
      className="mx-auto w-full max-w-7xl px-8"
      style={{
        paddingTop:    '3rem',
        paddingBottom: '5rem',
      }}
    >
      <header style={{ marginBottom: '3rem' }}>
        <p
          style={{
            fontFamily:    'var(--font-terminal)',
            fontSize:      '1rem',
            color:         'var(--pink)',
            letterSpacing: '0.12em',
            opacity:       0.7,
            marginBottom:  '0.5rem',
          }}
        >
          {'// private thoughts, public anyway'}
        </p>
        <h1
          style={{
            fontFamily:  'var(--font-pixel)',
            fontSize:    'clamp(1.1rem, 3.5vw, 1.9rem)',
            color:       'var(--pink)',
            textShadow:  '0 0 12px var(--pink), 0 0 24px rgba(255,110,180,0.3)',
            lineHeight:  1.5,
            marginBottom: '0.75rem',
          }}
        >
          diary
        </h1>
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize:   '1rem',
            color:      'var(--white)',
            opacity:    0.65,
            lineHeight: 1.6,
          }}
        >
          daily entries. moods, thoughts, things i watched at 2am.
          no editing, no agenda. just what's happening.
        </p>

        <div
          aria-hidden="true"
          style={{
            height:     '1px',
            background: 'linear-gradient(90deg, var(--pink), transparent)',
            marginTop:  '1.5rem',
          }}
        />
      </header>

      {entries.length === 0 ? (
        <p
          style={{
            fontFamily: 'var(--font-terminal)',
            fontSize:   '1.2rem',
            color:      'var(--pink)',
            opacity:    0.5,
            textAlign:  'center',
            paddingTop: '3rem',
          }}
        >
          nothing here yet...
        </p>
      ) : (
        <ol
          style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0' }}
          aria-label="Diary entries"
        >
          {entries.map((entry, i) => {
            const { slug, frontmatter: fm, content } = entry
            const preview = fm.locked
              ? '🔒 this entry is private.'
              : getPreview(content)
            const isLast  = i === entries.length - 1

            return (
              <li
                key={slug}
                style={{
                  display:       'flex',
                  gap:           '1rem',
                  position:      'relative',
                  paddingBottom: isLast ? 0 : '2rem',
                }}
              >
                <div
                  style={{
                    display:       'flex',
                    flexDirection: 'column',
                    alignItems:    'center',
                    flexShrink:    0,
                    width:         '20px',
                  }}
                >
                  <div
                    style={{
                      fontSize:   '1.25rem',
                      lineHeight: 1,
                      marginTop:  '0.15rem',
                      flexShrink: 0,
                      filter:     'drop-shadow(0 0 6px rgba(255,110,180,0.5))',
                    }}
                    aria-hidden="true"
                  >
                    {fm.mood}
                  </div>

                  {!isLast && (
                    <div
                      aria-hidden="true"
                      style={{
                        flex:       1,
                        width:      '1px',
                        background: 'linear-gradient(to bottom, var(--pink), transparent)',
                        opacity:    0.3,
                        marginTop:  '0.5rem',
                      }}
                    />
                  )}
                </div>

                <div
                  style={{
                    flex:        1,
                    minWidth:    0,
                    borderLeft:  '2px solid var(--pink)',
                    paddingLeft: '1rem',
                    paddingTop:  '0.1rem',
                  }}
                >
                  <div
                    style={{
                      display:      'flex',
                      alignItems:   'baseline',
                      gap:          '0.6rem',
                      marginBottom: '0.4rem',
                      flexWrap:     'wrap',
                    }}
                  >
                    <time
                      dateTime={fm.date}
                      style={{
                        fontFamily:    'var(--font-terminal)',
                        fontSize:      '1.15rem',
                        color:         'var(--pink)',
                        letterSpacing: '0.06em',
                      }}
                    >
                      {formatShortDate(fm.date)}
                    </time>

                    {fm.moodLabel && !fm.locked && (
                      <span
                        style={{
                          fontFamily:    'var(--font-terminal)',
                          fontSize:      '1rem',
                          color:         'var(--pink)',
                          opacity:       0.5,
                          letterSpacing: '0.04em',
                        }}
                      >
                        · {fm.moodLabel}
                      </span>
                    )}

                    <span
                      style={{
                        fontFamily:    'var(--font-terminal)',
                        fontSize:      '0.9rem',
                        color:         'var(--sky)',
                        opacity:       0.45,
                        letterSpacing: '0.03em',
                        marginLeft:    'auto',
                      }}
                    >
                      {formatDate(fm.date).split(',')[1]?.trim()}
                    </span>
                  </div>

                  <p
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize:   '0.95rem',
                      color:      'var(--white)',
                      opacity:    0.75,
                      lineHeight: 1.7,
                      marginBottom: '0.6rem',
                    }}
                  >
                    {preview}
                  </p>

                  <Link
                    href={`/diary/${slug}`}
                    style={{
                      fontFamily:    'var(--font-terminal)',
                      fontSize:      '1rem',
                      color:         'var(--pink)',
                      letterSpacing: '0.05em',
                      opacity:       0.7,
                    }}
                  >
                    → read entry
                  </Link>
                </div>
              </li>
            )
          })}
        </ol>
      )}
    </main>
  )
}
