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
      className="mx-auto w-full max-w-7xl"
      style={{
        paddingLeft:   '4rem',
        paddingRight:  '4rem',
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
        <div
          style={{
            display:             'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap:                 '1.25rem',
          }}
          aria-label="Diary entries"
        >
          {entries.map((entry) => {
            const { slug, frontmatter: fm, content } = entry
            const preview = fm.locked
              ? '🔒 this entry is private.'
              : getPreview(content)

            return (
              <Link
                key={slug}
                href={`/diary/${slug}`}
                style={{ textDecoration: 'none', display: 'flex', height: '100%' }}
              >
                <article
                  className="widget"
                  style={{
                    borderLeft:    '3px solid var(--pink)',
                    borderRadius:  '8px',
                    paddingLeft:   '1.1rem',
                    display:       'flex',
                    flexDirection: 'column',
                    width:         '100%',
                  }}
                >
                  <div
                    style={{
                      display:        'flex',
                      alignItems:     'center',
                      justifyContent: 'space-between',
                      gap:            '0.5rem',
                      marginBottom:   '0.6rem',
                    }}
                  >
                    <span style={{ fontSize: '1.2rem' }} aria-hidden="true">{fm.mood}</span>
                    <time
                      dateTime={fm.date}
                      style={{
                        fontFamily:    'var(--font-terminal)',
                        fontSize:      '0.9rem',
                        color:         'var(--sky)',
                        opacity:       0.7,
                        flexShrink:    0,
                        letterSpacing: '0.04em',
                      }}
                    >
                      {formatShortDate(fm.date)}
                    </time>
                  </div>

                  {fm.moodLabel && !fm.locked && (
                    <p
                      style={{
                        fontFamily:    'var(--font-terminal)',
                        fontSize:      '0.85rem',
                        color:         'var(--pink)',
                        opacity:       0.6,
                        letterSpacing: '0.04em',
                        marginBottom:  '0.4rem',
                      }}
                    >
                      {fm.moodLabel}
                    </p>
                  )}

                  <p
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize:   '0.9rem',
                      color:      'var(--white)',
                      opacity:    0.75,
                      lineHeight: 1.6,
                      flexGrow:   1,
                    }}
                  >
                    {preview}
                  </p>

                  <p
                    style={{
                      fontFamily:    'var(--font-terminal)',
                      fontSize:      '1rem',
                      color:         'var(--pink)',
                      marginTop:     'auto',
                      paddingTop:    '0.75rem',
                      letterSpacing: '0.05em',
                      opacity:       0.8,
                    }}
                  >
                    → read entry
                  </p>
                </article>
              </Link>
            )
          })}
        </div>
      )}
    </main>
  )
}
