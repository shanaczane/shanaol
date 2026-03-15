import { getAllReviews } from '@/lib/reviews'
import ReviewFilter      from '@/components/ReviewFilter'

export const metadata = {
  title:       'reviews',
  description: 'ratings and quick thoughts on games, anime, manga, and movies.',
  openGraph: {
    title:       'reviews — shanaol',
    description: 'ratings and quick thoughts on games, anime, manga, and movies.',
    type:        'website',
  },
  twitter: {
    title:       'reviews — shanaol',
    description: 'ratings and quick thoughts on games, anime, manga, and movies.',
  },
}

const SECTION = 'w-full'

export default function ReviewsPage() {
  const reviews = getAllReviews()

  return (
    <main className={`${SECTION} py-12`} style={{ paddingLeft: '4rem', paddingRight: '4rem', paddingTop: '3rem', paddingBottom: '5rem' }}>
      <header style={{ marginBottom: '2.5rem' }}>
        <p
          style={{
            fontFamily:    'var(--font-terminal)',
            fontSize:      '1rem',
            color:         'var(--yellow)',
            letterSpacing: '0.12em',
            opacity:       0.7,
            marginBottom:  '0.5rem',
          }}
        >
          {'// games · anime · manga · movies'}
        </p>
        <h1
          style={{
            fontFamily:   'var(--font-pixel)',
            fontSize:     'clamp(1.1rem, 3.5vw, 1.9rem)',
            color:        'var(--yellow)',
            textShadow:   '0 0 12px var(--yellow), 0 0 24px rgba(255,229,102,0.3)',
            lineHeight:   1.5,
            marginBottom: '0.75rem',
          }}
        >
          reviews
        </h1>
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize:   '1rem',
            color:      'var(--white)',
            opacity:    0.65,
            lineHeight: 1.6,
            maxWidth:   '48ch',
          }}
        >
          quick ratings and thoughts. no long essays, just vibes and verdicts.
          scored out of 10, sorted however makes sense at the time.
        </p>

        <div
          aria-hidden="true"
          style={{
            height:     '1px',
            background: 'linear-gradient(90deg, var(--yellow), transparent)',
            marginTop:  '1.5rem',
          }}
        />
      </header>

      <ReviewFilter reviews={reviews} />
    </main>
  )
}
