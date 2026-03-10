import { notFound }                  from 'next/navigation'
import Link                           from 'next/link'
import { MDXRemote }                  from 'next-mdx-remote/rsc'
import { getBlogPost, getBlogSlugs }  from '@/lib/posts'
import { MoodTag }                    from '@/components/BlogCard'

// ─── Static generation ───────────────────────────────────────

export function generateStaticParams() {
  return getBlogSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  try {
    const { frontmatter: fm } = getBlogPost(slug)
    return {
      title:       fm.title,
      description: fm.excerpt,
      openGraph: {
        title:         `${fm.title} — shanaol`,
        description:   fm.excerpt,
        type:          'article',
        publishedTime: fm.date,
        tags:          [fm.category],
      },
      twitter: {
        title:       `${fm.title} — shanaol`,
        description: fm.excerpt,
      },
    }
  } catch {
    return { title: 'post not found — shanaol' }
  }
}

// ─── Read-time helper ────────────────────────────────────────

function readTime(content: string): string {
  const words = content.trim().split(/\s+/).length
  const mins  = Math.max(1, Math.ceil(words / 200))
  return `${mins} min read`
}

// ─── Page ────────────────────────────────────────────────────

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  let post
  try {
    post = getBlogPost(slug)
  } catch {
    notFound()
  }

  const { frontmatter: fm, content } = post

  const displayDate = new Date(fm.date + 'T00:00:00').toLocaleDateString('en-US', {
    month: 'long',
    day:   'numeric',
    year:  'numeric',
  })

  const CATEGORY_ACCENT: Record<string, string> = {
    gaming: 'var(--mint)',
    anime:  'var(--pink)',
    manga:  'var(--sky)',
    movies: 'var(--yellow)',
    music:  'var(--cyan)',
    life:   'var(--glow)',
  }
  const accent = CATEGORY_ACCENT[fm.category.toLowerCase()] ?? 'var(--white)'

  return (
    <main
      style={{
        maxWidth: '42rem',
        margin:   '0 auto',
        padding:  '3rem 1.25rem 5rem',
      }}
    >
      {/* ── Back link ── */}
      <Link
        href="/blog"
        style={{
          fontFamily:    'var(--font-terminal)',
          fontSize:      '1.05rem',
          color:         'var(--sky)',
          letterSpacing: '0.05em',
          display:       'inline-block',
          marginBottom:  '2rem',
          opacity:       0.8,
        }}
      >
        ← back to blog
      </Link>

      {/* ── Post header ── */}
      <header style={{ marginBottom: '2.5rem' }}>
        {/* Meta row: MoodTag + date + read time */}
        <div
          style={{
            display:      'flex',
            alignItems:   'center',
            flexWrap:     'wrap',
            gap:          '0.6rem',
            marginBottom: '1.25rem',
          }}
        >
          <MoodTag category={fm.category} />

          <span
            aria-hidden="true"
            style={{ color: 'var(--blue)', fontSize: '0.9rem' }}
          >
            ·
          </span>

          <span
            style={{
              fontFamily:    'var(--font-terminal)',
              fontSize:      '1rem',
              color:         'var(--sky)',
              opacity:       0.7,
              letterSpacing: '0.04em',
            }}
          >
            {displayDate}
          </span>

          <span
            aria-hidden="true"
            style={{ color: 'var(--blue)', fontSize: '0.9rem' }}
          >
            ·
          </span>

          <span
            style={{
              fontFamily:    'var(--font-terminal)',
              fontSize:      '1rem',
              color:         accent,
              opacity:       0.75,
              letterSpacing: '0.04em',
            }}
          >
            {readTime(content)}
          </span>
        </div>

        {/* Title */}
        <h1
          style={{
            fontFamily:  'var(--font-pixel)',
            fontSize:    'clamp(0.85rem, 3vw, 1.4rem)',
            color:       'var(--white)',
            textShadow:  'none',
            lineHeight:  2,
            marginBottom: '1rem',
          }}
        >
          {fm.title}
        </h1>

        {/* Tags */}
        {fm.tags && fm.tags.length > 0 && (
          <div
            style={{
              display:  'flex',
              flexWrap: 'wrap',
              gap:      '0.4rem',
            }}
          >
            {fm.tags.map((tag) => (
              <span
                key={tag}
                style={{
                  fontFamily:    'var(--font-terminal)',
                  fontSize:      '0.9rem',
                  color:         'var(--sky)',
                  opacity:       0.6,
                  letterSpacing: '0.03em',
                }}
              >
                #{tag}
              </span>
            ))}
          </div>
        )}

        {/* Divider */}
        <div
          aria-hidden="true"
          style={{
            height:     '1px',
            background: `linear-gradient(90deg, ${accent}, transparent)`,
            marginTop:  '1.5rem',
          }}
        />
      </header>

      {/* ── MDX content ── */}
      <article className="prose">
        <MDXRemote source={content} />
      </article>

      {/* ── Footer nav ── */}
      <footer
        style={{
          marginTop:   '4rem',
          paddingTop:  '1.5rem',
          borderTop:   '1px solid var(--blue)',
        }}
      >
        <Link
          href="/blog"
          style={{
            fontFamily:    'var(--font-terminal)',
            fontSize:      '1.1rem',
            color:         accent,
            letterSpacing: '0.06em',
            opacity:       0.8,
          }}
        >
          ← all posts
        </Link>
      </footer>
    </main>
  )
}
