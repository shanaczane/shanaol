import { ImageResponse } from 'next/og'

export const runtime     = 'edge'
export const alt         = 'shanaol — gaming, anime, manga, music & life'
export const size        = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width:          '100%',
          height:         '100%',
          display:        'flex',
          flexDirection:  'column',
          alignItems:     'center',
          justifyContent: 'center',
          background:     '#080d1a',
          position:       'relative',
          overflow:       'hidden',
        }}
      >
        {/* Top cyan gradient bar */}
        <div
          style={{
            position:   'absolute',
            top:        0,
            left:       0,
            right:      0,
            height:     '4px',
            background: 'linear-gradient(90deg, #00e5ff, #ff6eb4, #4df0ff)',
          }}
        />

        {/* Bottom pink gradient bar */}
        <div
          style={{
            position:   'absolute',
            bottom:     0,
            left:       0,
            right:      0,
            height:     '4px',
            background: 'linear-gradient(90deg, #ff6eb4, #00e5ff, #4df0ff)',
          }}
        />

        {/* Decorative star cluster — top left */}
        <div
          style={{
            position: 'absolute',
            top:      60,
            left:     80,
            display:  'flex',
            gap:      '32px',
          }}
        >
          {['✦', '✧', '✦'].map((s, i) => (
            <span
              key={i}
              style={{
                color:   i === 1 ? '#ff6eb4' : '#00e5ff',
                opacity: i === 1 ? 0.4 : 0.25,
                fontSize: i === 1 ? '18px' : '12px',
              }}
            >
              {s}
            </span>
          ))}
        </div>

        {/* Decorative star cluster — bottom right */}
        <div
          style={{
            position: 'absolute',
            bottom:   60,
            right:    80,
            display:  'flex',
            gap:      '28px',
          }}
        >
          {['✦', '✧', '✦'].map((s, i) => (
            <span
              key={i}
              style={{
                color:    i === 1 ? '#4df0ff' : '#ff6eb4',
                opacity:  i === 1 ? 0.35 : 0.2,
                fontSize: i === 1 ? '16px' : '10px',
              }}
            >
              {s}
            </span>
          ))}
        </div>

        {/* Glow circle behind title */}
        <div
          style={{
            position:     'absolute',
            width:        '600px',
            height:       '300px',
            borderRadius: '50%',
            background:   'radial-gradient(ellipse, rgba(0,229,255,0.07) 0%, transparent 70%)',
          }}
        />

        {/* Main content */}
        <div
          style={{
            display:       'flex',
            flexDirection: 'column',
            alignItems:    'center',
            gap:           '24px',
          }}
        >
          {/* Site name */}
          <div
            style={{
              fontSize:      '96px',
              fontWeight:    700,
              color:         '#00e5ff',
              letterSpacing: '0.08em',
              fontFamily:    'monospace',
              textShadow:    '0 0 40px rgba(0,229,255,0.6), 0 0 80px rgba(0,229,255,0.3)',
              lineHeight:    1,
            }}
          >
            shanaol
          </div>

          {/* Decorative divider */}
          <div
            style={{
              width:      '320px',
              height:     '1px',
              background: 'linear-gradient(90deg, transparent, #00e5ff, #ff6eb4, transparent)',
              opacity:    0.6,
            }}
          />

          {/* Tagline */}
          <div
            style={{
              fontSize:      '28px',
              color:         '#a8d8ff',
              letterSpacing: '0.18em',
              fontFamily:    'monospace',
              opacity:       0.75,
            }}
          >
            gaming · anime · manga · music · life
          </div>
        </div>

        {/* URL watermark */}
        <div
          style={{
            position:      'absolute',
            bottom:        28,
            right:         48,
            fontSize:      '18px',
            color:         '#ff6eb4',
            fontFamily:    'monospace',
            letterSpacing: '0.08em',
            opacity:       0.5,
          }}
        >
          shanaol.com
        </div>
      </div>
    ),
    { ...size },
  )
}
