import { ImageResponse } from 'next/og'
import { getBlogPost }   from '@/lib/posts'

export const runtime     = 'edge'
export const size        = { width: 1200, height: 630 }
export const contentType = 'image/png'

const CATEGORY_COLORS: Record<string, string> = {
  gaming: '#5fffc8',
  anime:  '#ff6eb4',
  manga:  '#38b4ff',
  movies: '#ffe566',
  music:  '#00e5ff',
  life:   '#4df0ff',
}

export default async function OgImage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  let title    = 'blog post'
  let excerpt  = ''
  let category = 'gaming'
  let date     = ''

  try {
    const { frontmatter: fm } = getBlogPost(slug)
    title    = fm.title
    excerpt  = fm.excerpt ?? ''
    category = fm.category
    date     = fm.date
      ? new Date(fm.date + 'T00:00:00').toLocaleDateString('en-US', {
          month: 'long', day: 'numeric', year: 'numeric',
        })
      : ''
  } catch {
    /* unknown slug — use defaults */
  }

  const accent = CATEGORY_COLORS[category.toLowerCase()] ?? '#4df0ff'

  return new ImageResponse(
    (
      <div
        style={{
          width:          '100%',
          height:         '100%',
          display:        'flex',
          flexDirection:  'column',
          background:     '#080d1a',
          position:       'relative',
          overflow:       'hidden',
          padding:        '60px 72px',
        }}
      >
        {/* Top accent bar */}
        <div
          style={{
            position:   'absolute',
            top:        0,
            left:       0,
            right:      0,
            height:     '4px',
            background: `linear-gradient(90deg, ${accent}, #ff6eb4, transparent)`,
          }}
        />

        {/* Glow blob */}
        <div
          style={{
            position:     'absolute',
            top:          '-100px',
            right:        '-100px',
            width:        '500px',
            height:       '500px',
            borderRadius: '50%',
            background:   `radial-gradient(circle, ${accent}15 0%, transparent 70%)`,
          }}
        />

        {/* Site label */}
        <div
          style={{
            display:     'flex',
            alignItems:  'center',
            gap:         '16px',
            marginBottom: 'auto',
          }}
        >
          <span
            style={{
              fontSize:      '22px',
              color:         '#00e5ff',
              fontFamily:    'monospace',
              letterSpacing: '0.08em',
              opacity:       0.7,
            }}
          >
            shanaol
          </span>
          <span style={{ color: '#1a2a4a', fontSize: '18px' }}>·</span>
          <span
            style={{
              fontSize:      '18px',
              color:         accent,
              fontFamily:    'monospace',
              letterSpacing: '0.12em',
              background:    `${accent}18`,
              border:        `1px solid ${accent}40`,
              borderRadius:  '6px',
              padding:       '4px 14px',
            }}
          >
            {category}
          </span>
        </div>

        {/* Post title */}
        <div
          style={{
            flex:          1,
            display:       'flex',
            flexDirection: 'column',
            justifyContent:'center',
            gap:           '20px',
          }}
        >
          <div
            style={{
              fontSize:   title.length > 60 ? '44px' : title.length > 40 ? '52px' : '60px',
              fontWeight: 700,
              color:      '#e8f4ff',
              fontFamily: 'monospace',
              lineHeight: 1.25,
              maxWidth:   '900px',
            }}
          >
            {title}
          </div>

          {excerpt && (
            <div
              style={{
                fontSize:   '24px',
                color:      '#a8d8ff',
                fontFamily: 'monospace',
                opacity:    0.6,
                lineHeight: 1.5,
                maxWidth:   '820px',
                overflow:   'hidden',
                display:    '-webkit-box',
              }}
            >
              {excerpt.length > 120 ? excerpt.slice(0, 117) + '...' : excerpt}
            </div>
          )}
        </div>

        {/* Footer row */}
        <div
          style={{
            display:        'flex',
            alignItems:     'center',
            justifyContent: 'space-between',
            marginTop:      '32px',
            paddingTop:     '20px',
            borderTop:      '1px solid #1a2a4a',
          }}
        >
          <div
            style={{
              width:      '200px',
              height:     '1px',
              background: `linear-gradient(90deg, ${accent}80, transparent)`,
            }}
          />
          <div
            style={{
              fontSize:      '18px',
              color:         '#4db8ff',
              fontFamily:    'monospace',
              letterSpacing: '0.06em',
              opacity:       0.55,
            }}
          >
            {date}
          </div>
        </div>
      </div>
    ),
    { ...size },
  )
}
