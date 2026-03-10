import Link from 'next/link'
import type { BlogPost } from '@/lib/posts'

const CATEGORY_MAP: Record<string, { tagClass: string; accent: string }> = {
  gaming: { tagClass: 'tag-gaming', accent: 'var(--mint)'   },
  anime:  { tagClass: 'tag-anime',  accent: 'var(--pink)'   },
  manga:  { tagClass: 'tag-manga',  accent: 'var(--sky)'    },
  movies: { tagClass: 'tag-movies', accent: 'var(--yellow)' },
  music:  { tagClass: 'tag-music',  accent: 'var(--cyan)'   },
  life:   { tagClass: 'tag-life',   accent: 'var(--glow)'   },
}

function categoryStyle(cat: string) {
  return CATEGORY_MAP[cat.toLowerCase()] ?? { tagClass: 'tag-random', accent: 'var(--white)' }
}

export function MoodTag({ category }: { category: string }) {
  const { tagClass } = categoryStyle(category)
  return (
    <span className={`tag ${tagClass}`} style={{ fontSize: '0.85rem' }}>
      {category}
    </span>
  )
}

export default function BlogCard({ post }: { post: BlogPost }) {
  const { slug, frontmatter: fm } = post
  const { accent } = categoryStyle(fm.category)

  // Format ISO date → "Mar 8, 2026"
  const displayDate = new Date(fm.date + 'T00:00:00').toLocaleDateString('en-US', {
    month: 'short',
    day:   'numeric',
    year:  'numeric',
  })

  return (
    <Link href={`/blog/${slug}`} style={{ textDecoration: 'none', display: 'block' }}>
      <article
        className="widget"
        style={{
          borderLeft:    `3px solid ${accent}`,
          borderRadius:  '8px',
          paddingLeft:   '1.1rem',
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
          <MoodTag category={fm.category} />
          <span
            style={{
              fontFamily:    'var(--font-terminal)',
              fontSize:      '0.9rem',
              color:         'var(--sky)',
              opacity:       0.7,
              flexShrink:    0,
              letterSpacing: '0.04em',
            }}
          >
            {displayDate}
          </span>
        </div>

        <p
          style={{
            fontFamily:   'var(--font-pixel)',
            fontSize:     '0.75rem',
            color:        'var(--white)',
            lineHeight:   2,
            marginBottom: '0.5rem',
          }}
        >
          {fm.title}
        </p>

        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize:   '0.9rem',
            color:      'var(--white)',
            opacity:    0.7,
            lineHeight: 1.6,
          }}
        >
          {fm.excerpt}
        </p>

        <p
          style={{
            fontFamily:    'var(--font-terminal)',
            fontSize:      '1rem',
            color:         accent,
            marginTop:     '0.75rem',
            letterSpacing: '0.05em',
            opacity:       0.8,
          }}
        >
          {'→ read more'}
        </p>
      </article>
    </Link>
  )
}
