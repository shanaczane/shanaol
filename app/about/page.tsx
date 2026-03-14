export const metadata = {
  title:       'about',
  description: 'gamer. weeb. certified chaotic. this is who i am.',
  openGraph: {
    title:       'about — shanaol',
    description: 'gamer. weeb. certified chaotic. this is who i am.',
    type:        'website',
  },
  twitter: {
    title:       'about — shanaol',
    description: 'gamer. weeb. certified chaotic. this is who i am.',
  },
}

const SECTION = 'w-full'

const INTERESTS = [
  { label: 'Gaming',    className: 'tag tag-gaming'  },
  { label: 'Anime',     className: 'tag tag-anime'   },
  { label: 'Manga',     className: 'tag tag-manga'   },
  { label: 'Movies',    className: 'tag tag-movies'  },
  { label: 'Music',     className: 'tag tag-music'   },
  { label: 'Lifestyle', className: 'tag tag-life'    },
]

const FUN_FACTS: { label: string; value: string; accent: string }[] = [
  { label: 'alias',             value: 'shana',                   accent: 'var(--cyan)'   },
  { label: 'handle',            value: '@shanaol',                accent: 'var(--sky)'    },
  { label: 'pronouns',         value: 'she / her',               accent: 'var(--pink)'   },
  { label: 'location',          value: 'somewhere cozy',          accent: 'var(--mint)'   },
  { label: 'timezone',          value: 'awake at 3am (always)',   accent: 'var(--sky)'    },
  { label: 'hrs gamed',         value: '1,337',                   accent: 'var(--mint)'   },
  { label: 'anime completed',   value: '214',                     accent: 'var(--pink)'   },
  { label: 'manga chapters',    value: '4,802',                   accent: 'var(--sky)'    },
  { label: 'coffees consumed',  value: '∞',                       accent: 'var(--yellow)' },
  { label: 'current obsession', value: 'Blue Protocol (send help)', accent: 'var(--glow)'  },
  { label: 'fav genre',         value: 'dark fantasy',            accent: 'var(--cyan)'   },
  { label: 'sleep schedule',    value: 'chaotic',                 accent: 'var(--pink)'   },
  { label: 'spirit animal',     value: 'guts (berserk)',          accent: 'var(--sky)'    },
  { label: 'life motto',        value: 'no regrets. maybe.',      accent: 'var(--glow)'   },
]

export default function AboutPage() {
  return (
    <main className={`${SECTION} py-12`} style={{ paddingLeft: '4rem', paddingRight: '4rem', paddingTop: '5rem', paddingBottom: '5rem' }}>

      <header style={{ marginBottom: '2.5rem' }}>
        <p
          style={{
            fontFamily:    'var(--font-terminal)',
            fontSize:      '1rem',
            color:         'var(--cyan)',
            letterSpacing: '0.12em',
            opacity:       0.7,
            marginBottom:  '0.5rem',
          }}
        >
          {'// who is this person'}
        </p>
        <h1
          style={{
            fontFamily:  'var(--font-pixel)',
            fontSize:    'clamp(1.1rem, 3.5vw, 1.9rem)',
            color:       'var(--cyan)',
            textShadow:  '0 0 12px var(--cyan), 0 0 24px rgba(0,229,255,0.4)',
            lineHeight:  1.5,
          }}
        >
          about me
        </h1>
      </header>

      <section
        className="widget"
        aria-label="Profile"
        style={{
          marginBottom: '1.5rem',
          borderColor:  'var(--bright)',
          boxShadow:    '0 0 24px rgba(30,94,255,0.10)',
        }}
      >
        <div
          style={{
            display:     'flex',
            gap:         '1.75rem',
            alignItems:  'flex-start',
            flexWrap:    'wrap',
            marginBottom: '1.75rem',
          }}
        >
          <div
            aria-hidden="true"
            style={{
              width:          '120px',
              height:         '120px',
              borderRadius:   '50%',
              flexShrink:     0,
              background:     'linear-gradient(135deg, var(--mid), var(--blue))',
              border:         '2px solid var(--bright)',
              boxShadow:      '0 0 24px rgba(30,94,255,0.5), 0 0 48px rgba(0,229,255,0.15)',
              display:        'flex',
              alignItems:     'center',
              justifyContent: 'center',
              fontSize:       '3.5rem',
            }}
          >
            🌙
          </div>

          <div style={{ flex: 1, minWidth: '180px', paddingTop: '0.25rem' }}>
            <p
              style={{
                fontFamily:    'var(--font-pixel)',
                fontSize:      'clamp(0.85rem, 2.8vw, 1.3rem)',
                color:         'var(--cyan)',
                textShadow:    '0 0 10px var(--cyan)',
                letterSpacing: '0.06em',
                marginBottom:  '0.25rem',
              }}
            >
              shana
            </p>

            <div
              style={{
                display:      'flex',
                alignItems:   'center',
                gap:          '0.75rem',
                flexWrap:     'wrap',
                marginBottom: '1rem',
              }}
            >
              <p
                style={{
                  fontFamily:    'var(--font-terminal)',
                  fontSize:      '1.2rem',
                  color:         'var(--sky)',
                  letterSpacing: '0.04em',
                }}
              >
                @shanaol
              </p>
              <span
                style={{
                  fontFamily:    'var(--font-terminal)',
                  fontSize:      '1rem',
                  color:         'var(--pink)',
                  border:        '1px solid var(--pink)',
                  borderRadius:  '99px',
                  padding:       '0.1rem 0.55rem',
                  opacity:       0.8,
                  letterSpacing: '0.04em',
                  background:    'rgba(255,110,180,0.07)',
                }}
              >
                she / her
              </span>
            </div>

            <p
              style={{
                fontFamily:    'var(--font-terminal)',
                fontSize:      '1.1rem',
                color:         'var(--glow)',
                letterSpacing: '0.05em',
                opacity:       0.8,
              }}
            >
              gamer. weeb. certified chaotic.
            </p>
          </div>
        </div>

        <div
          aria-hidden="true"
          style={{
            height:       '1px',
            background:   'linear-gradient(90deg, var(--bright), transparent)',
            marginBottom: '1.5rem',
          }}
        />

        <div style={{ marginBottom: '1.75rem' }}>
          <p
            style={{
              fontFamily:    'var(--font-terminal)',
              fontSize:      '0.85rem',
              color:         'var(--sky)',
              letterSpacing: '0.08em',
              opacity:       0.55,
              marginBottom:  '0.75rem',
              textTransform: 'uppercase',
            }}
          >
            bio
          </p>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize:   '1.05rem',
              color:      'var(--white)',
              opacity:    0.92,
              lineHeight: 1.8,
              marginBottom: '0.85rem',
            }}
          >
            hey — i&apos;m shana. this corner of the internet is where i talk about
            the things i love: games that consume entire weeks, anime that wreck me
            emotionally, manga i should have started years ago, and music i play on
            repeat until everyone around me hates it.
          </p>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize:   '1.05rem',
              color:      'var(--white)',
              opacity:    0.92,
              lineHeight: 1.8,
              marginBottom: '0.85rem',
            }}
          >
            i built this site because i wanted a space that felt like <em>me</em> —
            not an algorithm's idea of me. retro aesthetics, pixel fonts, starfield
            backgrounds. the kind of website that 2005-era shana would have been
            obsessed with, built with whatever the current tech stack happens to be.
          </p>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize:   '1.05rem',
              color:      'var(--white)',
              opacity:    0.92,
              lineHeight: 1.8,
            }}
          >
            i log everything i consume because i enjoy the data and because
            it&apos;s funny to see how many hours i have sunk into games that are
            &quot;just for fun.&quot; the diary is honest, the reviews are opinionated,
            and the sleep schedule is a disaster. welcome.
          </p>
        </div>

        <div>
          <p
            style={{
              fontFamily:    'var(--font-terminal)',
              fontSize:      '0.85rem',
              color:         'var(--sky)',
              letterSpacing: '0.08em',
              opacity:       0.55,
              marginBottom:  '0.75rem',
              textTransform: 'uppercase',
            }}
          >
            interests
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {INTERESTS.map((badge) => (
              <span
                key={badge.label}
                className={badge.className}
                style={{ fontSize: '1rem' }}
              >
                {badge.label}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section
        className="widget"
        aria-label="Fun facts"
        style={{ borderColor: 'var(--blue)' }}
      >
        <p
          style={{
            fontFamily:    'var(--font-terminal)',
            fontSize:      '0.85rem',
            color:         'var(--sky)',
            letterSpacing: '0.08em',
            opacity:       0.55,
            marginBottom:  '1.25rem',
            textTransform: 'uppercase',
          }}
        >
          fun facts &amp; data
        </p>

        <div style={{ overflowX: 'auto' }}>
        <table
          style={{
            width:          '100%',
            borderCollapse: 'collapse',
          }}
          aria-label="Personal stats and fun facts"
        >
          <tbody>
            {FUN_FACTS.map(({ label, value, accent }, i) => (
              <tr
                key={label}
                style={{
                  borderBottom: i < FUN_FACTS.length - 1
                    ? '1px solid var(--blue)'
                    : 'none',
                }}
              >
                <td
                  style={{
                    fontFamily:    'var(--font-terminal)',
                    fontSize:      '1rem',
                    color:         'var(--sky)',
                    opacity:       0.55,
                    letterSpacing: '0.05em',
                    padding:       '0.55rem 1.25rem 0.55rem 0',
                    whiteSpace:    'nowrap',
                    verticalAlign: 'middle',
                  }}
                >
                  {label}
                </td>

                <td
                  aria-hidden="true"
                  style={{
                    fontFamily:  'var(--font-terminal)',
                    fontSize:    '1rem',
                    color:       'var(--blue)',
                    padding:     '0.55rem 0.75rem 0.55rem 0',
                    whiteSpace:  'nowrap',
                    verticalAlign: 'middle',
                  }}
                >
                  //
                </td>

                <td
                  style={{
                    fontFamily:    'var(--font-terminal)',
                    fontSize:      '1.1rem',
                    color:         accent,
                    letterSpacing: '0.04em',
                    padding:       '0.55rem 0',
                    verticalAlign: 'middle',
                    width:         '100%',
                  }}
                >
                  {value}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      </section>

      <p
        style={{
          fontFamily:    'var(--font-terminal)',
          fontSize:      '1rem',
          color:         'var(--sky)',
          opacity:       0.35,
          textAlign:     'center',
          marginTop:     '2rem',
          letterSpacing: '0.05em',
        }}
      >
        {'— shana ✦ shanaol.com'}
      </p>

    </main>
  )
}
