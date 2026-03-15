import { getAllBlogPosts } from '@/lib/posts'
import CategoryFilter     from '@/components/CategoryFilter'

const SECTION = 'w-full'

export const metadata = {
  title:       'blog',
  description: 'thoughts on games, anime, manga, and everything else',
  openGraph: {
    title:       'blog — shanaol',
    description: 'thoughts on games, anime, manga, and everything else',
    type:        'website',
  },
  twitter: {
    title:       'blog — shanaol',
    description: 'thoughts on games, anime, manga, and everything else',
  },
}

export default function BlogPage() {
  const posts = getAllBlogPosts()

  return (
    <main className={`${SECTION} py-12`} style={{ paddingLeft: '4rem', paddingRight: '4rem', paddingTop: '3rem', paddingBottom: '5rem' }}>
      <header style={{ marginBottom: '2.5rem' }}>
        <p
          style={{
            fontFamily:    'var(--font-terminal)',
            fontSize:      '1rem',
            color:         'var(--sky)',
            letterSpacing: '0.12em',
            opacity:       0.7,
            marginBottom:  '0.5rem',
          }}
        >
          {'// thoughts & ramblings'}
        </p>
        <h1
          style={{
            fontFamily:  'var(--font-pixel)',
            fontSize:    'clamp(1.1rem, 3.5vw, 1.9rem)',
            color:       'var(--cyan)',
            textShadow:  '0 0 12px var(--cyan), 0 0 24px rgba(0,229,255,0.4)',
            lineHeight:  1.5,
            marginBottom: '0.75rem',
          }}
        >
          the blog
        </h1>
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize:   '1rem',
            color:      'var(--white)',
            opacity:    0.7,
            lineHeight: 1.6,
          }}
        >
          gaming deep-dives, anime episode reactions, manga hot takes, and
          occasional life updates. lowercase always. sleep optional.
        </p>

        <div
          aria-hidden="true"
          style={{
            height:     '1px',
            background: 'linear-gradient(90deg, transparent, var(--cyan), transparent)',
            marginTop:  '1.5rem',
          }}
        />
      </header>

      <CategoryFilter posts={posts} />
    </main>
  )
}
