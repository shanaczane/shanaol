import music from '@/content/music.json'

export const metadata = {
  title:       'music',
  description: 'current obsessions, mood playlists, and artist writeups.',
  openGraph: {
    title:       'music — shanaol',
    description: 'current obsessions, mood playlists, and artist writeups.',
    type:        'website',
  },
  twitter: {
    title:       'music — shanaol',
    description: 'current obsessions, mood playlists, and artist writeups.',
  },
}

const SECTION = 'w-full'

type Playlist = {
  id:          string
  name:        string
  emoji:       string
  accent:      string
  description: string
  vibes:       string[]
  tracks:      string[]
}

type Writeup = {
  id:     string
  name:   string
  type:   'artist' | 'album'
  cover:  string
  accent: string
  genres: string[]
  blurb:  string
}

function BigVinyl() {
  const SIZE        = 180
  const LABEL_SIZE  = 60
  const HOLE_SIZE   = 10

  return (
    <div
      className="animate-vinyl-slow"
      aria-hidden="true"
      style={{
        width:        `${SIZE}px`,
        height:       `${SIZE}px`,
        borderRadius: '50%',
        flexShrink:   0,
        position:     'relative',
        background: `
          conic-gradient(
            from 0deg,
            #0a1628 0deg,   #0f1e3a 10deg,
            #0a1628 20deg,  #0f1e3a 30deg,
            #0a1628 40deg,  #0f1e3a 50deg,
            #0a1628 60deg,  #0f1e3a 70deg,
            #0a1628 80deg,  #0f1e3a 90deg,
            #0a1628 100deg, #0f1e3a 110deg,
            #0a1628 120deg, #0f1e3a 130deg,
            #0a1628 140deg, #0f1e3a 150deg,
            #0a1628 160deg, #0f1e3a 170deg,
            #0a1628 180deg, #0f1e3a 190deg,
            #0a1628 200deg, #0f1e3a 210deg,
            #0a1628 220deg, #0f1e3a 230deg,
            #0a1628 240deg, #0f1e3a 250deg,
            #0a1628 260deg, #0f1e3a 270deg,
            #0a1628 280deg, #0f1e3a 290deg,
            #0a1628 300deg, #0f1e3a 310deg,
            #0a1628 320deg, #0f1e3a 330deg,
            #0a1628 340deg, #0f1e3a 350deg,
            #0a1628 360deg
          )
        `,
        boxShadow: '0 0 32px rgba(0,229,255,0.25), 0 0 64px rgba(0,229,255,0.10), inset 0 0 12px rgba(0,0,0,0.7)',
      }}
    >
      <div
        style={{
          position:       'absolute',
          inset:          '50%',
          transform:      'translate(-50%, -50%)',
          width:          `${LABEL_SIZE}px`,
          height:         `${LABEL_SIZE}px`,
          borderRadius:   '50%',
          background:     'radial-gradient(circle, var(--bright) 0%, var(--mid) 60%, var(--deep) 100%)',
          border:         '1.5px solid var(--cyan)',
          boxShadow:      '0 0 12px var(--cyan), inset 0 0 6px rgba(0,0,0,0.5)',
          display:        'flex',
          alignItems:     'center',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            width:        `${HOLE_SIZE}px`,
            height:       `${HOLE_SIZE}px`,
            borderRadius: '50%',
            background:   'var(--navy)',
          }}
        />
      </div>
    </div>
  )
}

function Equalizer() {
  return (
    <div className="flex items-end gap-0.5" aria-hidden="true" style={{ height: '24px' }}>
      <span className="eq-bar" />
      <span className="eq-bar" />
      <span className="eq-bar" />
      <span className="eq-bar" />
      <span className="eq-bar" />
      <span className="eq-bar" />
    </div>
  )
}

function Divider({ accent = 'var(--cyan)' }: { accent?: string }) {
  return (
    <div
      aria-hidden="true"
      style={{
        height:       '1px',
        background:   `linear-gradient(90deg, ${accent}, transparent)`,
        margin:       '2.5rem 0',
      }}
    />
  )
}

function PlaylistCard({ p }: { p: Playlist }) {
  return (
    <div
      className="widget"
      style={{
        borderTop: `3px solid ${p.accent}`,
        display:   'flex',
        flexDirection: 'column',
        gap:       '0.75rem',
        height:    '100%',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <span
          aria-hidden="true"
          style={{
            fontSize: '1.4rem',
            filter:   `drop-shadow(0 0 6px ${p.accent}80)`,
          }}
        >
          {p.emoji}
        </span>
        <p
          style={{
            fontFamily:    'var(--font-terminal)',
            fontSize:      '1.2rem',
            color:         p.accent,
            letterSpacing: '0.05em',
            lineHeight:    1.2,
          }}
        >
          {p.name}
        </p>
      </div>

      <p
        style={{
          fontFamily: 'var(--font-body)',
          fontSize:   '0.875rem',
          color:      'var(--white)',
          opacity:    0.65,
          lineHeight: 1.6,
        }}
      >
        {p.description}
      </p>

      <ol
        style={{
          listStyle:   'none',
          display:     'flex',
          flexDirection: 'column',
          gap:         '0.3rem',
          flexGrow:    1,
        }}
      >
        {p.tracks.map((track, i) => (
          <li
            key={i}
            style={{
              display:    'flex',
              gap:        '0.5rem',
              alignItems: 'baseline',
            }}
          >
            <span
              style={{
                fontFamily:  'var(--font-terminal)',
                fontSize:    '0.9rem',
                color:       p.accent,
                opacity:     0.5,
                flexShrink:  0,
                width:       '1rem',
                textAlign:   'right',
              }}
            >
              {i + 1}
            </span>
            <span
              style={{
                fontFamily:    'var(--font-terminal)',
                fontSize:      '1rem',
                color:         'var(--white)',
                opacity:       0.75,
                letterSpacing: '0.02em',
                lineHeight:    1.4,
              }}
            >
              {track}
            </span>
          </li>
        ))}
      </ol>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginTop: 'auto' }}>
        {p.vibes.map((v) => (
          <span
            key={v}
            style={{
              fontFamily:    'var(--font-terminal)',
              fontSize:      '0.85rem',
              color:         p.accent,
              opacity:       0.6,
              letterSpacing: '0.03em',
            }}
          >
            #{v}
          </span>
        ))}
      </div>
    </div>
  )
}

function WriteupCard({ w }: { w: Writeup }) {
  return (
    <div
      className="widget"
      style={{
        borderLeft:  `3px solid ${w.accent}`,
        paddingLeft: '1.25rem',
        display:     'flex',
        gap:         '1.25rem',
        alignItems:  'flex-start',
      }}
    >
      <span
        aria-hidden="true"
        style={{
          fontSize:  '2.5rem',
          lineHeight: 1,
          flexShrink: 0,
          marginTop:  '0.1rem',
          filter:     `drop-shadow(0 0 8px ${w.accent}80)`,
        }}
      >
        {w.cover}
      </span>

      <div style={{ flex: 1, minWidth: 0 }}>
        <div
          style={{
            display:      'flex',
            alignItems:   'center',
            gap:          '0.6rem',
            marginBottom: '0.35rem',
            flexWrap:     'wrap',
          }}
        >
          <span
            className="tag"
            style={{
              fontSize:    '0.8rem',
              color:       w.accent,
              borderColor: w.accent,
              background:  `color-mix(in srgb, ${w.accent} 10%, transparent)`,
            }}
          >
            {w.type}
          </span>
          <p
            style={{
              fontFamily:    'var(--font-terminal)',
              fontSize:      '1.3rem',
              color:         'var(--white)',
              letterSpacing: '0.04em',
              lineHeight:    1.2,
            }}
          >
            {w.name}
          </p>
        </div>

        <div
          style={{
            display:      'flex',
            flexWrap:     'wrap',
            gap:          '0.3rem',
            marginBottom: '0.6rem',
          }}
        >
          {w.genres.map((g) => (
            <span
              key={g}
              style={{
                fontFamily:    'var(--font-terminal)',
                fontSize:      '0.9rem',
                color:         w.accent,
                opacity:       0.6,
                letterSpacing: '0.03em',
              }}
            >
              #{g.toLowerCase().replace(/\s/g, '-')}
            </span>
          ))}
        </div>

        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize:   '0.9rem',
            color:      'var(--white)',
            opacity:    0.72,
            lineHeight: 1.7,
          }}
        >
          {w.blurb}
        </p>
      </div>
    </div>
  )
}

export default function MusicPage() {
  const { current, playlists, writeups } = music as {
    current:   typeof music.current
    playlists: Playlist[]
    writeups:  Writeup[]
  }

  return (
    <main className={`${SECTION} py-12`} style={{ paddingLeft: '4rem', paddingRight: '4rem', paddingTop: '3rem', paddingBottom: '5rem' }}>

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
          {'// now playing · always playing'}
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
          music corner
        </h1>
      </header>

      <section
        className="widget"
        aria-label="Current music obsession"
        style={{
          borderColor: 'var(--cyan)',
          marginBottom: '0',
        }}
      >
        <div
          style={{
            display:        'flex',
            gap:            '2rem',
            alignItems:     'center',
            flexWrap:       'wrap',
          }}
        >
          <BigVinyl />

          <div style={{ flex: 1, minWidth: 0 }}>
            <p
              style={{
                fontFamily:    'var(--font-terminal)',
                fontSize:      '0.85rem',
                color:         'var(--sky)',
                letterSpacing: '0.1em',
                opacity:       0.7,
                marginBottom:  '0.5rem',
                textTransform: 'uppercase',
              }}
            >
              current obsession
            </p>

            <p
              style={{
                fontFamily:   'var(--font-pixel)',
                fontSize:     'clamp(0.65rem, 2vw, 1rem)',
                color:        'var(--cyan)',
                textShadow:   '0 0 8px var(--cyan)',
                lineHeight:   1.8,
                marginBottom: '0.35rem',
                overflow:     'hidden',
                textOverflow: 'ellipsis',
                whiteSpace:   'nowrap',
              }}
            >
              {current.title}
            </p>

            <p
              style={{
                fontFamily:    'var(--font-terminal)',
                fontSize:      '1.4rem',
                color:         'var(--pink)',
                letterSpacing: '0.04em',
                marginBottom:  '0.2rem',
              }}
            >
              {current.artist}
            </p>

            <p
              style={{
                fontFamily:    'var(--font-terminal)',
                fontSize:      '1rem',
                color:         'var(--sky)',
                opacity:       0.55,
                letterSpacing: '0.03em',
                marginBottom:  '0.75rem',
              }}
            >
              {current.album}
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <span className="tag tag-music" style={{ fontSize: '0.85rem' }}>
                {current.genre}
              </span>
              <Equalizer />
            </div>

            <p
              style={{
                fontFamily:  'var(--font-body)',
                fontSize:    '0.9rem',
                color:       'var(--white)',
                opacity:     0.65,
                lineHeight:  1.6,
                fontStyle:   'italic',
                borderLeft:  '2px solid var(--cyan)',
                paddingLeft: '0.75rem',
              }}
            >
              {current.note}
            </p>
          </div>
        </div>
      </section>

      <Divider accent="var(--cyan)" />

      <section aria-label="Mood playlists">
        <p
          style={{
            fontFamily:    'var(--font-terminal)',
            fontSize:      '1.2rem',
            color:         'var(--cyan)',
            letterSpacing: '0.1em',
            marginBottom:  '1rem',
            textTransform: 'uppercase',
            textShadow:    '0 0 8px rgba(0,229,255,0.35)',
          }}
        >
          mood playlists
        </p>

        <div
          style={{
            display: 'grid',
            gap:     '1rem',
          }}
          className="sm:grid-cols-2"
        >
          {(playlists as Playlist[]).map((p) => (
            <PlaylistCard key={p.id} p={p} />
          ))}
        </div>
      </section>

      <Divider accent="var(--pink)" />

      <section aria-label="Artist and album writeups">
        <p
          style={{
            fontFamily:    'var(--font-terminal)',
            fontSize:      '1.2rem',
            color:         'var(--pink)',
            letterSpacing: '0.1em',
            marginBottom:  '1rem',
            textTransform: 'uppercase',
            textShadow:    '0 0 8px rgba(255,110,180,0.35)',
          }}
        >
          artists & albums worth talking about
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {(writeups as Writeup[]).map((w) => (
            <WriteupCard key={w.id} w={w} />
          ))}
        </div>
      </section>

    </main>
  )
}
