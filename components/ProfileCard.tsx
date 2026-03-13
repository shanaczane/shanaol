import currently from '@/content/currently.json'
import Widget from '@/components/Widget'
import Image from 'next/image'

const TAGS = [
  { label: 'gamer',      className: 'tag tag-gaming' },
  { label: 'weeb',       className: 'tag tag-anime'  },
  { label: 'manga head', className: 'tag tag-manga'  },
]

const STATS = [
  { label: 'hrs gamed',    value: '1,337' },
  { label: 'anime done',   value: '214'   },
  { label: 'manga ch.',    value: '4,802' },
  { label: 'coffees',      value: '∞'     },
]

export default function ProfileCard() {
  return (
    <Widget
      className="animate-float"
      style={{
        maxWidth:  '360px',
        width:     '100%',
        margin:    '0 auto',
        border:    '2px solid var(--bright)',
        boxShadow: '0 0 30px rgba(30,94,255,0.3), inset 0 1px 0 rgba(255,255,255,0.1)',
      }}
      aria-label="Shana's profile card"
    >
      <div
        aria-hidden="true"
        style={{
          position:   'absolute',
          top:        0,
          left:       '1.25rem',
          right:      '1.25rem',
          height:     '2px',
          background: 'linear-gradient(90deg, transparent, var(--cyan), transparent)',
        }}
      />

      <div className="flex flex-col items-center gap-3 mb-5">
        <div
          style={{
            marginTop:    '0.5rem',
            width:        '80px',
            height:       '80px',
            borderRadius: '4px',
            border:       '3px solid var(--cyan)',
            boxShadow:    '0 0 15px rgba(0,229,255,0.4)',
            overflow:     'hidden',
            flexShrink:   0,
          }}
          aria-hidden="true"
        >
          <Image src="/image.jpg" alt="Shana" width={80} height={80} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }} />
        </div>

        <div className="text-center">
          <p
            style={{
              fontFamily:  'var(--font-pixel)',
              fontSize:    '0.9rem',
              color:       'var(--cyan)',
              textShadow:  '0 0 8px var(--cyan)',
              marginBottom: '0.25rem',
              letterSpacing: '0.06em',
            }}
          >
            shana
          </p>
          <p
            style={{
              fontFamily:  'var(--font-terminal)',
              fontSize:    '1.1rem',
              color:       'var(--sky)',
              letterSpacing: '0.04em',
            }}
          >
            @shanaol
          </p>
        </div>
      </div>

      <div
        className="flex flex-wrap justify-center gap-1.5"
        style={{ marginBottom: '1.25rem' }}
      >
        {TAGS.map((t) => (
          <span key={t.label} className={t.className}>
            {t.label}
          </span>
        ))}
      </div>

      <div
        style={{
          display:      'grid',
          gridTemplateColumns: '1fr 1fr',
          gap:          '0.5rem',
          marginBottom: '1.25rem',
        }}
      >
        {STATS.map((s) => (
          <div
            key={s.label}
            style={{
              background:   'var(--mid)',
              border:       '1px solid var(--blue)',
              borderRadius: '6px',
              padding:      '0.5rem 0.4rem',
              textAlign:    'center',
            }}
          >
            <p
              style={{
                fontFamily:  'var(--font-pixel)',
                fontSize:    '0.85rem',
                color:       'var(--cyan)',
                marginBottom: '0.2rem',
              }}
            >
              {s.value}
            </p>
            <p
              style={{
                fontFamily:  'var(--font-terminal)',
                fontSize:    '0.9rem',
                color:       'var(--sky)',
                letterSpacing: '0.03em',
              }}
            >
              {s.label}
            </p>
          </div>
        ))}
      </div>

      <div
        style={{
          borderTop:   '1px solid var(--blue)',
          paddingTop:  '0.75rem',
          textAlign:   'center',
        }}
      >
        <p
          style={{
            fontFamily:  'var(--font-terminal)',
            fontSize:    '1rem',
            color:       'var(--sky)',
            letterSpacing: '0.04em',
          }}
        >
          <span style={{ color: 'var(--blue)', marginRight: '0.4rem' }}>mood //</span>
          {currently.mood}
        </p>
      </div>
    </Widget>
  )
}
