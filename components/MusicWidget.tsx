import Widget from '@/components/Widget'
import currently from '@/content/currently.json'

function Vinyl() {
  return (
    <div
      className="animate-vinyl-slow"
      aria-hidden="true"
      style={{
        width:        '96px',
        height:       '96px',
        borderRadius: '50%',
        flexShrink:   0,
        position:     'relative',
        background: `
          conic-gradient(
            from 0deg,
            #0a1628 0deg,
            #0f1e3a 10deg,
            #0a1628 20deg,
            #0f1e3a 30deg,
            #0a1628 40deg,
            #0f1e3a 50deg,
            #0a1628 60deg,
            #0f1e3a 70deg,
            #0a1628 80deg,
            #0f1e3a 90deg,
            #0a1628 100deg,
            #0f1e3a 110deg,
            #0a1628 120deg,
            #0f1e3a 130deg,
            #0a1628 140deg,
            #0f1e3a 150deg,
            #0a1628 160deg,
            #0f1e3a 170deg,
            #0a1628 180deg,
            #0f1e3a 190deg,
            #0a1628 200deg,
            #0f1e3a 210deg,
            #0a1628 220deg,
            #0f1e3a 230deg,
            #0a1628 240deg,
            #0f1e3a 250deg,
            #0a1628 260deg,
            #0f1e3a 270deg,
            #0a1628 280deg,
            #0f1e3a 290deg,
            #0a1628 300deg,
            #0f1e3a 310deg,
            #0a1628 320deg,
            #0f1e3a 330deg,
            #0a1628 340deg,
            #0f1e3a 350deg,
            #0a1628 360deg
          )
        `,
        boxShadow: '0 0 16px rgba(0,229,255,0.20), inset 0 0 8px rgba(0,0,0,0.6)',
      }}
    >
      <div
        style={{
          position:        'absolute',
          inset:           '50%',
          transform:       'translate(-50%, -50%)',
          width:           '32px',
          height:          '32px',
          borderRadius:    '50%',
          background:      'radial-gradient(circle, var(--bright) 0%, var(--mid) 100%)',
          border:          '1px solid var(--cyan)',
          boxShadow:       '0 0 8px var(--cyan)',
          display:         'flex',
          alignItems:      'center',
          justifyContent:  'center',
        }}
      >
        <div
          style={{
            width:        '6px',
            height:       '6px',
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
    <div
      className="flex items-end gap-0.5"
      aria-hidden="true"
      style={{ height: '20px' }}
    >
      <span className="eq-bar" />
      <span className="eq-bar" />
      <span className="eq-bar" />
      <span className="eq-bar" />
      <span className="eq-bar" />
      <span className="eq-bar" />
    </div>
  )
}

export default function MusicWidget() {
  const { music } = currently

  return (
    <Widget title="music vibe" accent="var(--cyan)" as="section">
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem', textAlign: 'center' }}>
        <Vinyl />

        <div style={{ minWidth: 0, width: '100%' }}>
          <p
            style={{
              fontFamily:    'var(--font-terminal)',
              fontSize:      '0.85rem',
              color:         'var(--sky)',
              letterSpacing: '0.08em',
              opacity:       0.7,
              marginBottom:  '0.2rem',
            }}
          >
            NOW PLAYING
          </p>

          <p
            style={{
              fontFamily:   'var(--font-pixel)',
              fontSize:     '0.8rem',
              color:        'var(--cyan)',
              textShadow:   '0 0 6px var(--cyan)',
              lineHeight:   1.6,
              marginBottom: '0.25rem',
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
              fontSize:      '1.05rem',
              color:         'var(--pink)',
              letterSpacing: '0.04em',
              marginBottom:  '0.6rem',
            }}
          >
            {music.artist}
          </p>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem' }}>
            <span className="tag tag-music" style={{ fontSize: '0.8rem' }}>
              {music.genre}
            </span>
            <Equalizer />
          </div>
        </div>

        <p
          style={{
            fontFamily:  'var(--font-body)',
            fontSize:    '0.85rem',
            color:       'var(--sky)',
            opacity:     0.5,
            fontStyle:   'italic',
          }}
        >
          currently obsessing over j-pop &amp; anime OSTs
        </p>
      </div>
    </Widget>
  )
}
