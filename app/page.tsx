import type React from 'react'
import Ticker          from '@/components/Ticker'
import HeroSection     from '@/components/HeroSection'
import CurrentlyWidget from '@/components/CurrentlyWidget'
import MusicWidget     from '@/components/MusicWidget'
import SiteUpdates     from '@/components/SiteUpdates'
import Widget          from '@/components/Widget'
import Link            from 'next/link'
import { getAllBlogPosts, getAllDiaryEntries } from '@/lib/posts'

export const metadata = {
  title:       'shanaol ✦ personal interest hub',
  description: "shana's corner of the internet — gaming, anime, manga, movies, music & life",
  openGraph: {
    title:       'shanaol ✦ personal interest hub',
    description: "shana's corner of the internet — gaming, anime, manga, movies, music & life",
    type:        'website',
  },
  twitter: {
    title:       'shanaol ✦ personal interest hub',
    description: "shana's corner of the internet — gaming, anime, manga, movies, music & life",
  },
}

const SECTION = 'mx-auto w-full max-w-7xl'
const SECTION_PAD: React.CSSProperties = { paddingLeft: '4rem', paddingRight: '4rem' }

const CATEGORY_TAG: Record<string, string> = {
  gaming: 'tag-gaming',
  anime:  'tag-anime',
  manga:  'tag-manga',
  movies: 'tag-movies',
  music:  'tag-music',
  life:   'tag-life',
}

function tagClass(cat: string) {
  return CATEGORY_TAG[cat.toLowerCase()] ?? 'tag-random'
}

function shortDate(iso: string) {
  return new Date(iso + 'T00:00:00').toLocaleDateString('en-US', {
    month: 'short',
    day:   'numeric',
    year:  'numeric',
  })
}

function getPreview(content: string, max = 110): string {
  const paragraphs = content
    .split(/\n\n+/)
    .map(p =>
      p.trim()
        .replace(/[*_`#>]/g, '')
        .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
        .trim()
    )
    .filter(Boolean)
  const text = paragraphs[0] ?? ''
  return text.length > max ? text.slice(0, max).trimEnd() + '...' : text
}

function LatestPosts() {
  const posts = getAllBlogPosts().slice(0, 3)

  return (
    <Widget title="latest posts" accent="var(--glow)" as="section">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {posts.map((post) => {
          const fm = post.frontmatter
          return (
            <article
              key={post.slug}
              style={{
                paddingBottom: '1rem',
                borderBottom:  '1px solid var(--blue)',
              }}
            >
              <div
                style={{
                  display:        'flex',
                  alignItems:     'center',
                  justifyContent: 'space-between',
                  marginBottom:   '0.4rem',
                  gap:            '0.5rem',
                }}
              >
                <span className={`tag ${tagClass(fm.category)}`} style={{ fontSize: '0.8rem' }}>
                  {fm.category}
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-terminal)',
                    fontSize:   '0.85rem',
                    color:      'var(--sky)',
                    opacity:    0.7,
                    flexShrink: 0,
                  }}
                >
                  {shortDate(fm.date)}
                </span>
              </div>

              <Link href={`/blog/${post.slug}`}>
                <p
                  style={{
                    fontFamily:   'var(--font-pixel)',
                    fontSize:     '0.75rem',
                    color:        'var(--white)',
                    lineHeight:   1.8,
                    marginBottom: '0.35rem',
                  }}
                >
                  {fm.title}
                </p>
              </Link>

              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize:   '0.85rem',
                  color:      'var(--white)',
                  opacity:    0.7,
                  lineHeight: 1.6,
                }}
              >
                {fm.excerpt}
              </p>
            </article>
          )
        })}

        <Link
          href="/blog"
          style={{
            fontFamily:     'var(--font-terminal)',
            fontSize:       '1rem',
            color:          'var(--glow)',
            letterSpacing:  '0.06em',
            textDecoration: 'none',
            opacity:        0.8,
          }}
        >
          {'→ all posts'}
        </Link>
      </div>
    </Widget>
  )
}

function DiaryPreview() {
  const entries = getAllDiaryEntries().slice(0, 3)

  return (
    <Widget title="diary" accent="var(--pink)" as="section">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        {entries.map((entry) => {
          const { slug, frontmatter: fm, content } = entry
          const preview = fm.locked ? '🔒 private entry.' : getPreview(content)

          return (
            <Link
              key={slug}
              href={`/diary/${slug}`}
              style={{ textDecoration: 'none' }}
            >
              <div
                style={{
                  display:    'flex',
                  gap:        '0.6rem',
                  alignItems: 'flex-start',
                  paddingLeft: '0.75rem',
                  borderLeft: '2px solid var(--pink)',
                }}
              >
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div
                    style={{
                      display:        'flex',
                      justifyContent: 'space-between',
                      alignItems:     'center',
                      marginBottom:   '0.3rem',
                    }}
                  >
                    <p
                      style={{
                        fontFamily:    'var(--font-terminal)',
                        fontSize:      '0.8rem',
                        color:         'var(--pink)',
                        opacity:       0.7,
                        letterSpacing: '0.05em',
                      }}
                    >
                      {shortDate(fm.date)}
                    </p>
                    <span style={{ fontSize: '1rem' }}>{fm.mood}</span>
                  </div>
                  <p
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize:   '0.85rem',
                      color:      'var(--white)',
                      opacity:    0.85,
                      lineHeight: 1.5,
                    }}
                  >
                    {preview}
                  </p>
                </div>
              </div>
            </Link>
          )
        })}

        <Link
          href="/diary"
          style={{
            fontFamily:     'var(--font-terminal)',
            fontSize:       '1rem',
            color:          'var(--pink)',
            letterSpacing:  '0.06em',
            textDecoration: 'none',
            opacity:        0.8,
            marginTop:      '0.25rem',
          }}
        >
          {'→ all entries'}
        </Link>
      </div>
    </Widget>
  )
}

function RecentReviewsPlaceholder() {
  const reviews = [
    { id: 'elden-ring',    title: 'Elden Ring',    type: 'game',  score: 10,  cover: '🛡️', status: 'completed',    statusAccent: 'var(--mint)' },
    { id: 'dungeon-meshi', title: 'Dungeon Meshi', type: 'anime', score: 9.5, cover: '🍲', status: 'in progress',  statusAccent: 'var(--sky)'  },
    { id: 'berserk',       title: 'Berserk',       type: 'manga', score: 10,  cover: '⚔️', status: 'in progress',  statusAccent: 'var(--sky)'  },
    { id: 'your-name',     title: 'Your Name',     type: 'movie', score: 9,   cover: '🌠', status: 'completed',    statusAccent: 'var(--mint)' },
  ]

  return (
    <Widget title="recent reviews" accent="var(--yellow)" as="section">
      <div
        style={{ display: 'grid', gap: '0.75rem' }}
        className="grid-cols-2"
      >
        {reviews.map((r) => (
          <Link key={r.id} href="/reviews" style={{ textDecoration: 'none' }}>
            <div
              style={{
                background:   'var(--mid)',
                border:       '1px solid var(--blue)',
                borderRadius: '6px',
                padding:      '0.6rem 0.7rem',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.3rem' }}>
                <span style={{ fontSize: '1.2rem' }}>{r.cover}</span>
                <span
                  style={{
                    fontFamily:    'var(--font-terminal)',
                    fontSize:      '0.8rem',
                    color:         r.statusAccent,
                    letterSpacing: '0.03em',
                  }}
                >
                  {r.score}/10
                </span>
              </div>
              <p
                style={{
                  fontFamily:   'var(--font-body)',
                  fontSize:     '0.8rem',
                  color:        'var(--white)',
                  fontWeight:   600,
                  lineHeight:   1.3,
                  marginBottom: '0.2rem',
                  overflow:     'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace:   'nowrap',
                }}
              >
                {r.title}
              </p>
              <span
                style={{
                  fontFamily: 'var(--font-terminal)',
                  fontSize:   '0.75rem',
                  color:      r.statusAccent,
                  opacity:    0.8,
                }}
              >
                {r.status}
              </span>
            </div>
          </Link>
        ))}
      </div>

      <Link
        href="/reviews"
        style={{
          display:        'block',
          marginTop:      '0.75rem',
          fontFamily:     'var(--font-terminal)',
          fontSize:       '1rem',
          color:          'var(--yellow)',
          letterSpacing:  '0.06em',
          textDecoration: 'none',
          opacity:        0.8,
        }}
      >
        {'→ all reviews'}
      </Link>
    </Widget>
  )
}

function NavShortcuts() {
  const links = [
    { href: '/currently', label: 'currently into', emoji: '⚡', accent: 'var(--cyan)'  },
    { href: '/music',     label: 'music corner',   emoji: '🎵', accent: 'var(--pink)'  },
    { href: '/about',     label: 'about me',       emoji: '🌙', accent: 'var(--sky)'   },
    { href: '/blog',      label: 'read my blog',   emoji: '✍️', accent: 'var(--glow)'  },
  ]

  return (
    <Widget title="explore" accent="var(--sky)" as="nav" aria-label="Quick navigation">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        {links.map(({ href, label, emoji, accent }) => (
          <Link
            key={href}
            href={href}
            style={{
              display:        'flex',
              alignItems:     'center',
              gap:            '0.6rem',
              padding:        '0.6rem 0.75rem',
              borderRadius:   '4px',
              border:         '1px solid var(--blue)',
              textDecoration: 'none',
              background:     'transparent',
            }}
          >
            <span aria-hidden="true" style={{ fontSize: '1rem' }}>{emoji}</span>
            <span
              style={{
                fontFamily:    'var(--font-terminal)',
                fontSize:      '1.1rem',
                color:         accent,
                letterSpacing: '0.05em',
              }}
            >
              {label}
            </span>
          </Link>
        ))}
      </div>
    </Widget>
  )
}

export default function HomePage() {
  return (
    <main>
      <Ticker />

      <HeroSection />

      <div
        aria-hidden="true"
        className={SECTION}
        style={{
          ...SECTION_PAD,
          height:       '1px',
          background:   'linear-gradient(90deg, transparent, var(--blue), transparent)',
          marginBottom: '2.5rem',
        }}
      />

      <section
        className={SECTION}
        style={{ ...SECTION_PAD, paddingBottom: '2.5rem' }}
        aria-label="Currently, music, and site updates"
      >
        <div
          style={{ display: 'grid', gap: '1.25rem' }}
          className="md:grid-cols-3"
        >
          <CurrentlyWidget />
          <MusicWidget />
          <SiteUpdates />
        </div>
      </section>

      <div aria-hidden="true" className={SECTION} style={{ ...SECTION_PAD, height: '1px', background: 'linear-gradient(90deg, transparent, var(--blue), transparent)', marginBottom: '2.5rem' }} />

      <section
        className={SECTION}
        style={{ ...SECTION_PAD, paddingBottom: '2.5rem' }}
        aria-label="Latest posts and diary"
      >
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '1.25rem' }}>
          <LatestPosts />
          <DiaryPreview />
        </div>
      </section>

      <div aria-hidden="true" className={SECTION} style={{ ...SECTION_PAD, height: '1px', background: 'linear-gradient(90deg, transparent, var(--blue), transparent)', marginBottom: '2.5rem' }} />

      <section
        className={SECTION}
        style={{ ...SECTION_PAD, paddingBottom: '5rem' }}
        aria-label="Recent reviews and navigation"
      >
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '1.25rem' }}>
          <RecentReviewsPlaceholder />
          <NavShortcuts />
        </div>
      </section>
    </main>
  )
}
