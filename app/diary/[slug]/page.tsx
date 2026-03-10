import { notFound }                      from 'next/navigation'
import Link                               from 'next/link'
import { MDXRemote }                      from 'next-mdx-remote/rsc'
import { getDiaryEntry, getDiarySlugs }   from '@/lib/posts'
import DiaryGate                          from '@/components/DiaryGate'

// ─── Static generation ───────────────────────────────────────

export function generateStaticParams() {
  return getDiarySlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  try {
    const { frontmatter: fm } = getDiaryEntry(slug)
    const label       = fm.locked ? 'private entry' : fm.moodLabel ?? 'entry'
    const title       = `diary · ${label}`
    const description = fm.locked ? 'this entry is private.' : `diary entry from ${fm.date}`
    return {
      title,
      description,
      openGraph: {
        title:         `${title} — shanaol`,
        description,
        type:          'article',
        publishedTime: fm.locked ? undefined : fm.date,
      },
      twitter: {
        title:       `${title} — shanaol`,
        description,
      },
    }
  } catch {
    return { title: 'entry not found — shanaol' }
  }
}

// ─── Helpers ─────────────────────────────────────────────────

function formatDate(iso: string) {
  return new Date(iso + 'T00:00:00').toLocaleDateString('en-US', {
    weekday: 'long',
    month:   'long',
    day:     'numeric',
    year:    'numeric',
  })
}

// ─── Page ────────────────────────────────────────────────────

export default async function DiaryEntryPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  let entry
  try {
    entry = getDiaryEntry(slug)
  } catch {
    notFound()
  }

  const { frontmatter: fm, content } = entry
  const locked = fm.locked ?? false

  return (
    <main
      style={{
        maxWidth: '36rem',
        margin:   '0 auto',
        padding:  '3rem 1.25rem 5rem',
      }}
    >
      {/* ── Back link ── */}
      <Link
        href="/diary"
        style={{
          fontFamily:    'var(--font-terminal)',
          fontSize:      '1.05rem',
          color:         'var(--pink)',
          letterSpacing: '0.05em',
          opacity:       0.7,
          display:       'inline-block',
          marginBottom:  '2rem',
        }}
      >
        ← back to diary
      </Link>

      {/* ── Entry header ── */}
      <header style={{ marginBottom: '2rem' }}>
        <div
          style={{
            display:      'flex',
            alignItems:   'center',
            gap:          '0.75rem',
            marginBottom: '0.6rem',
            flexWrap:     'wrap',
          }}
        >
          {/* Mood emoji */}
          <span
            aria-hidden="true"
            style={{
              fontSize: '1.5rem',
              filter:   locked
                ? 'drop-shadow(0 0 6px rgba(255,110,180,0.5))'
                : 'drop-shadow(0 0 6px rgba(255,110,180,0.4))',
            }}
          >
            {fm.mood}
          </span>

          {/* Date */}
          <time
            dateTime={fm.date}
            style={{
              fontFamily:    'var(--font-terminal)',
              fontSize:      '1.15rem',
              color:         'var(--pink)',
              letterSpacing: '0.06em',
            }}
          >
            {formatDate(fm.date)}
          </time>

          {/* Mood label badge */}
          {fm.moodLabel && !locked && (
            <span
              className="tag tag-anime"
              style={{ fontSize: '0.85rem' }}
            >
              {fm.moodLabel}
            </span>
          )}
        </div>

        {/* Pink gradient divider */}
        <div
          aria-hidden="true"
          style={{
            height:     '1px',
            background: 'linear-gradient(90deg, var(--pink), transparent)',
            marginTop:  '0.75rem',
          }}
        />
      </header>

      {/* ── DiaryGate wraps content — shows password form if locked ── */}
      <DiaryGate locked={locked}>
        <article className="prose">
          <MDXRemote source={content} />
        </article>

        {/* Footer nav — only shown once unlocked */}
        <footer
          style={{
            marginTop:  '3.5rem',
            paddingTop: '1.25rem',
            borderTop:  '1px solid var(--blue)',
          }}
        >
          <Link
            href="/diary"
            style={{
              fontFamily:    'var(--font-terminal)',
              fontSize:      '1.05rem',
              color:         'var(--pink)',
              letterSpacing: '0.06em',
              opacity:       0.7,
            }}
          >
            ← all entries
          </Link>
        </footer>
      </DiaryGate>
    </main>
  )
}
