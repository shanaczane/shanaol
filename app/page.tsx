import Ticker          from '@/components/Ticker'
import HeroSection     from '@/components/HeroSection'
import CurrentlyWidget from '@/components/CurrentlyWidget'
import MusicWidget     from '@/components/MusicWidget'
import SiteUpdates     from '@/components/SiteUpdates'
import Widget          from '@/components/Widget'
import Link            from 'next/link'

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

const SECTION = 'mx-auto w-full max-w-7xl px-8'

function LatestPostsPlaceholder() {
  const posts = [
    {
      slug:     'blue-protocol-launch',
      title:    'Blue Protocol finally launched and I have not slept',
      date:     'Mar 8, 2026',
      category: 'gaming',
      accent:   'var(--mint)',
      tagClass: 'tag-gaming',
      excerpt:
        'okay so I said I was just going to try it for an hour. it is now 4am.',
    },
    {
      slug:     'dungeon-meshi-episode-18',
      title:    'dungeon meshi ep 18 destroyed me emotionally',
      date:     'Mar 7, 2026',
      category: 'anime',
      accent:   'var(--pink)',
      tagClass: 'tag-anime',
      excerpt:
        'I was not prepared. I am still not prepared. Falin deserved better.',
    },
  ]

  return (
    <Widget title="latest posts" accent="var(--glow)" as="section">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {posts.map((post) => (
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
              <span className={`tag ${post.tagClass}`} style={{ fontSize: '0.8rem' }}>
                {post.category}
              </span>
              <span
                style={{
                  fontFamily:  'var(--font-terminal)',
                  fontSize:    '0.85rem',
                  color:       'var(--sky)',
                  opacity:     0.7,
                  flexShrink:  0,
                }}
              >
                {post.date}
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
                {post.title}
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
              {post.excerpt}
            </p>
          </article>
        ))}

        <Link
          href="/blog"
          style={{
            fontFamily:    'var(--font-terminal)',
            fontSize:      '1rem',
            color:         'var(--glow)',
            letterSpacing: '0.06em',
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

function DiaryPlaceholder() {
  const entries = [
    { date: 'Mar 9', mood: '🌙', preview: 'stayed up too late again. no regrets.' },
    { date: 'Mar 7', mood: '✨', preview: 'finally started dungeon meshi. why did i wait so long.' },
    { date: 'Mar 5', mood: '😮‍💨', preview: 'berserk chapter dropped. still processing.' },
  ]

  return (
    <Widget title="diary" accent="var(--pink)" as="section">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        {entries.map((e, i) => (
          <div
            key={i}
            style={{
              display:    'flex',
              gap:        '0.6rem',
              alignItems: 'flex-start',
              paddingLeft: '0.75rem',
              borderLeft: '2px solid var(--pink)',
            }}
          >
            <span style={{ fontSize: '1rem', flexShrink: 0 }}>{e.mood}</span>
            <div>
              <p
                style={{
                  fontFamily:  'var(--font-terminal)',
                  fontSize:    '0.8rem',
                  color:       'var(--pink)',
                  opacity:     0.7,
                  letterSpacing: '0.05em',
                }}
              >
                {e.date}
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize:   '0.85rem',
                  color:      'var(--white)',
                  opacity:    0.85,
                  lineHeight: 1.5,
                }}
              >
                {e.preview}
              </p>
            </div>
          </div>
        ))}

        <Link
          href="/diary"
          style={{
            fontFamily:    'var(--font-terminal)',
            fontSize:      '1rem',
            color:         'var(--pink)',
            letterSpacing: '0.06em',
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
    { id: 'elden-ring',    title: 'Elden Ring',       type: 'game',  score: 10, cover: '🛡️', status: 'completed', statusAccent: 'var(--mint)'   },
    { id: 'dungeon-meshi', title: 'Dungeon Meshi',    type: 'anime', score: 9.5, cover: '🍲', status: 'in progress', statusAccent: 'var(--sky)'  },
    { id: 'berserk',       title: 'Berserk',          type: 'manga', score: 10, cover: '⚔️', status: 'in progress', statusAccent: 'var(--sky)'  },
    { id: 'your-name',     title: 'Your Name',        type: 'movie', score: 9,  cover: '🌠', status: 'completed', statusAccent: 'var(--mint)'   },
  ]

  return (
    <Widget title="recent reviews" accent="var(--yellow)" as="section">
      <div
        style={{
          display: 'grid',
          gap:     '0.75rem',
        }}
        className="grid-cols-2"
      >
        {reviews.map((r) => (
          <Link
            key={r.id}
            href={`/reviews`}
            style={{ textDecoration: 'none' }}
          >
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
                    fontFamily:  'var(--font-terminal)',
                    fontSize:    '0.8rem',
                    color:       r.statusAccent,
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
                  fontFamily:  'var(--font-terminal)',
                  fontSize:    '0.75rem',
                  color:       r.statusAccent,
                  opacity:     0.8,
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
          display:       'block',
          marginTop:     '0.75rem',
          fontFamily:    'var(--font-terminal)',
          fontSize:      '1rem',
          color:         'var(--yellow)',
          letterSpacing: '0.06em',
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
    { href: '/currently', label: 'currently into',  emoji: '⚡', accent: 'var(--cyan)'   },
    { href: '/music',     label: 'music corner',    emoji: '🎵', accent: 'var(--pink)'   },
    { href: '/about',     label: 'about me',        emoji: '🌙', accent: 'var(--sky)'    },
    { href: '/blog',      label: 'read my blog',    emoji: '✍️', accent: 'var(--glow)'   },
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
              padding:        '0.5rem 0.6rem',
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
          height:     '1px',
          background: 'linear-gradient(90deg, transparent, var(--blue), transparent)',
          marginBottom: '2.5rem',
        }}
      />

      <section
        className={`${SECTION} pb-8`}
        aria-label="Currently, music, and site updates"
      >
        <div
          style={{
            display: 'grid',
            gap:     '1.25rem',
          }}
          className="md:grid-cols-3"
        >
          <CurrentlyWidget />
          <MusicWidget />
          <SiteUpdates />
        </div>
      </section>

      <section
        className={`${SECTION} pb-8`}
        aria-label="Latest posts and diary"
      >
        <div
          style={{
            display: 'grid',
            gap:     '1.25rem',
          }}
          className="md:grid-cols-3"
        >
          <div style={{ gridColumn: 'span 1' }} className="md:col-span-2">
            <LatestPostsPlaceholder />
          </div>
          <div>
            <DiaryPlaceholder />
          </div>
        </div>
      </section>

      <section
        className={`${SECTION} pb-16`}
        aria-label="Recent reviews and navigation"
      >
        <div
          style={{
            display: 'grid',
            gap:     '1.25rem',
          }}
          className="md:grid-cols-3"
        >
          <div style={{ gridColumn: 'span 1' }} className="md:col-span-2">
            <RecentReviewsPlaceholder />
          </div>
          <div>
            <NavShortcuts />
          </div>
        </div>
      </section>
    </main>
  )
}
