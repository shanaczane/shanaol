import currently from '@/content/currently.json'

export const metadata = {
  title:       'currently',
  description: 'what shana is playing, watching, reading, and listening to right now.',
  openGraph: {
    title:       'currently — shanaol',
    description: 'what shana is playing, watching, reading, and listening to right now.',
    type:        'website',
  },
  twitter: {
    title:       'currently — shanaol',
    description: 'what shana is playing, watching, reading, and listening to right now.',
  },
}

const SECTION = 'mx-auto w-full max-w-7xl px-8'

function ProgressBar({ value, accent }: { value: number; accent: string }) {
  return (
    <div className="progress-track" style={{ marginTop: '0.5rem' }}>
      <div
        className="progress-fill"
        style={{ width: `${value}%`, background: `linear-gradient(90deg, var(--bright), ${accent})` }}
        role="progressbar"
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={`${value}% complete`}
      />
    </div>
  )
}

type StatusItemProps = {
  emoji:    string
  label:    string
  title:    string
  sub:      string
  progress: number
  accent:   string
}

function StatusItem({ emoji, label, title, sub, progress, accent }: StatusItemProps) {
  return (
    <div
      className="widget"
      style={{ borderLeft: `3px solid ${accent}`, paddingLeft: '1.1rem' }}
    >
      <p
        style={{
          fontFamily:    'var(--font-terminal)',
          fontSize:      '0.85rem',
          color:         accent,
          letterSpacing: '0.1em',
          opacity:       0.7,
          marginBottom:  '0.4rem',
          textTransform: 'uppercase',
        }}
      >
        <span aria-hidden="true" style={{ marginRight: '0.4rem' }}>{emoji}</span>
        {label}
      </p>

      <div
        style={{
          display:        'flex',
          justifyContent: 'space-between',
          alignItems:     'baseline',
          gap:            '0.5rem',
          marginBottom:   '0.2rem',
        }}
      >
        <p
          style={{
            fontFamily:  'var(--font-body)',
            fontSize:    '1.05rem',
            fontWeight:  700,
            color:       'var(--white)',
            lineHeight:  1.3,
          }}
        >
          {title}
        </p>
        <span
          style={{
            fontFamily:  'var(--font-terminal)',
            fontSize:    '1.1rem',
            color:       accent,
            flexShrink:  0,
            letterSpacing: '0.03em',
          }}
        >
          {progress}%
        </span>
      </div>

      <p
        style={{
          fontFamily:    'var(--font-terminal)',
          fontSize:      '1rem',
          color:         'var(--sky)',
          opacity:       0.65,
          letterSpacing: '0.03em',
          marginBottom:  '0.1rem',
        }}
      >
        {sub}
      </p>

      <ProgressBar value={progress} accent={accent} />
    </div>
  )
}

function MusicItem() {
  const { music } = currently
  return (
    <div
      className="widget"
      style={{ borderLeft: '3px solid var(--cyan)', paddingLeft: '1.1rem' }}
    >
      <p
        style={{
          fontFamily:    'var(--font-terminal)',
          fontSize:      '0.85rem',
          color:         'var(--cyan)',
          letterSpacing: '0.1em',
          opacity:       0.7,
          marginBottom:  '0.4rem',
          textTransform: 'uppercase',
        }}
      >
        <span aria-hidden="true" style={{ marginRight: '0.4rem' }}>🎵</span>
        listening
      </p>

      <p
        style={{
          fontFamily:   'var(--font-pixel)',
          fontSize:     '0.52rem',
          color:        'var(--cyan)',
          textShadow:   '0 0 6px var(--cyan)',
          lineHeight:   1.8,
          marginBottom: '0.2rem',
          overflow:     'hidden',
          textOverflow: 'ellipsis',
          whiteSpace:   'nowrap',
        }}
      >
        {music.title}
      </p>
      <p
        style={{
          fontFamily:    'var(--font-terminal)',
          fontSize:      '1.1rem',
          color:         'var(--pink)',
          letterSpacing: '0.04em',
          marginBottom:  '0.4rem',
        }}
      >
        {music.artist}
      </p>

      <span className="tag tag-music" style={{ fontSize: '0.85rem' }}>
        {music.genre}
      </span>
    </div>
  )
}

export default function CurrentlyPage() {
  const items: StatusItemProps[] = [
    {
      emoji:    '🎮',
      label:    'playing',
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
    {
      emoji:    '🎬',
      label:    'watching',
      title:    currently.movie.title,
      sub:      currently.movie.sub,
      progress: currently.movie.progress,
      accent:   'var(--yellow)',
    },
  ]

  return (
    <main className={`${SECTION} py-12`}>
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
          {'// status: online'}
        </p>
        <h1
          style={{
            fontFamily:   'var(--font-pixel)',
            fontSize:     'clamp(1.1rem, 3.5vw, 1.9rem)',
            color:        'var(--cyan)',
            textShadow:   '0 0 12px var(--cyan), 0 0 24px rgba(0,229,255,0.4)',
            lineHeight:   1.5,
            marginBottom: '0.75rem',
          }}
        >
          currently
        </h1>

        <div
          style={{
            display:    'inline-flex',
            alignItems: 'center',
            gap:        '0.5rem',
            padding:    '0.3rem 0.85rem',
            border:     '1px solid var(--blue)',
            borderRadius: '99px',
            marginBottom: '1rem',
          }}
        >
          <span style={{ color: 'var(--sky)', opacity: 0.5, fontFamily: 'var(--font-terminal)', fontSize: '0.9rem', letterSpacing: '0.04em' }}>
            mood //
          </span>
          <span style={{ fontFamily: 'var(--font-terminal)', fontSize: '1.05rem', color: 'var(--sky)', letterSpacing: '0.04em' }}>
            {currently.mood}
          </span>
        </div>

        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize:   '1rem',
            color:      'var(--white)',
            opacity:    0.65,
            lineHeight: 1.6,
          }}
        >
          live status board. updated manually whenever i remember.
          progress bars are approximate and should not be trusted.
        </p>

        <div
          aria-hidden="true"
          style={{
            height:     '1px',
            background: 'linear-gradient(90deg, var(--cyan), transparent)',
            marginTop:  '1.5rem',
          }}
        />
      </header>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {items.map((item) => (
          <StatusItem key={item.label + item.title} {...item} />
        ))}
        <MusicItem />
      </div>

      <p
        style={{
          fontFamily:    'var(--font-terminal)',
          fontSize:      '0.9rem',
          color:         'var(--sky)',
          opacity:       0.35,
          marginTop:     '2.5rem',
          letterSpacing: '0.04em',
          textAlign:     'center',
        }}
      >
        to update: edit /content/currently.json
      </p>
    </main>
  )
}
