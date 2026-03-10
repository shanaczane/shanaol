import { ImageResponse }  from 'next/og'
import { getDiaryEntry }  from '@/lib/posts'

export const runtime     = 'edge'
export const size        = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function OgImage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  let locked    = false
  let date      = ''
  let mood      = '🌙'
  let moodLabel = ''

  try {
    const { frontmatter: fm } = getDiaryEntry(slug)
    locked    = fm.locked ?? false
    mood      = fm.mood ?? '🌙'
    moodLabel = fm.moodLabel ?? ''
    date      = fm.date
      ? new Date(fm.date + 'T00:00:00').toLocaleDateString('en-US', {
          weekday: 'long', month: 'long', day: 'numeric', year: 'numeric',
        })
      : ''
  } catch {
    /* unknown slug — use defaults */
  }

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
        {/* Top pink gradient bar */}
        <div
          style={{
            position:   'absolute',
            top:        0,
            left:       0,
            right:      0,
            height:     '4px',
            background: 'linear-gradient(90deg, #ff6eb4, #00e5ff, transparent)',
          }}
        />

        {/* Glow */}
        <div
          style={{
            position:     'absolute',
            width:        '600px',
            height:       '400px',
            borderRadius: '50%',
            background:   'radial-gradient(ellipse, rgba(255,110,180,0.06) 0%, transparent 70%)',
          }}
        />

        {/* Content */}
        <div
          style={{
            display:       'flex',
            flexDirection: 'column',
            alignItems:    'center',
            gap:           '24px',
            textAlign:     'center',
            padding:       '0 80px',
          }}
        >
          {/* Mood emoji or lock */}
          <div style={{ fontSize: '72px', lineHeight: 1 }}>
            {locked ? '🔒' : mood}
          </div>

          {/* Title */}
          <div
            style={{
              fontSize:      '52px',
              fontWeight:    700,
              color:         '#ff6eb4',
              fontFamily:    'monospace',
              letterSpacing: '0.04em',
              lineHeight:    1.2,
            }}
          >
            {locked ? 'private entry' : 'diary'}
          </div>

          {/* Subtitle */}
          <div
            style={{
              fontSize:      '26px',
              color:         '#a8d8ff',
              fontFamily:    'monospace',
              opacity:       0.65,
              letterSpacing: '0.06em',
            }}
          >
            {locked
              ? 'this one is not for everyone.'
              : moodLabel
              ? `${date} · ${moodLabel}`
              : date}
          </div>
        </div>

        {/* Site brand */}
        <div
          style={{
            position:      'absolute',
            bottom:        28,
            right:         48,
            fontSize:      '18px',
            color:         '#ff6eb4',
            fontFamily:    'monospace',
            letterSpacing: '0.08em',
            opacity:       0.45,
          }}
        >
          shanaol · diary
        </div>
      </div>
    ),
    { ...size },
  )
}
