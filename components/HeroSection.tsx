'use client'

import Link from 'next/link'
import ProfileCard from '@/components/ProfileCard'

const CTA_LINKS = [
  { href: '/blog',    label: 'EXPLORE →',  primary: true  },
  { href: '/about',   label: 'ABOUT ME',   primary: false },
]

export default function HeroSection() {
  return (
    <section
      className="mx-auto w-full max-w-7xl px-8 py-12 md:py-16 animate-fade-in"
      aria-label="Introduction"
    >
      <div className="grid grid-cols-1 md:grid-cols-hero gap-10 items-center">
        <div className="flex flex-col gap-5" style={{ minWidth: 0 }}>
          <div
            className="animate-blink-border-yellow"
            style={{
              display:       'inline-block',
              fontFamily:    'var(--font-terminal)',
              fontSize:      '1rem',
              color:         'var(--yellow)',
              background:    'rgba(255,229,102,0.08)',
              border:        '1px solid rgba(255,229,102,0.4)',
              padding:       '0.25rem 0.9rem',
              width:         'fit-content',
              letterSpacing: '0.12em',
            }}
          >
            ★ WELCOME TO MY CORNER OF THE NET ★
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
            <h1
              style={{
                fontFamily: 'var(--font-pixel)',
                fontSize:   'clamp(1.4rem, 3.5vw, 2.5rem)',
                color:      'var(--white)',
                lineHeight: 1.6,
                textShadow: '2px 2px 0 var(--bright), 0 0 30px rgba(30,94,255,0.6)',
              }}
            >
              hey, i&apos;m{' '}
              <span style={{ color: 'var(--cyan)', textShadow: '2px 2px 0 #0044aa, 0 0 20px var(--cyan)' }}>
                shana
              </span>
              .
            </h1>
            <p
              style={{
                fontFamily:    'var(--font-pixel)',
                fontSize:      'clamp(1.1rem, 3vw, 2.2rem)',
                color:         'var(--white)',
                textShadow:    '2px 2px 0 var(--bright), 0 0 30px rgba(30,94,255,0.5)',
                lineHeight:    1.6,
                letterSpacing: '0.02em',
              }}
            >
              gamer. weeb.
            </p>
            <p
              style={{
                fontFamily:    'var(--font-pixel)',
                fontSize:      'clamp(1.1rem, 3vw, 2.2rem)',
                color:         'var(--pink)',
                textShadow:    '2px 2px 0 #aa0066, 0 0 20px var(--pink)',
                lineHeight:    1.6,
                letterSpacing: '0.02em',
              }}
            >
              certified nerd.
            </p>
          </div>

          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize:   '1rem',
              color:      'var(--white)',
              lineHeight: 1.8,
              maxWidth:   '480px',
              opacity:    0.85,
            }}
          >
            this is my little corner of the internet, where i log what i&apos;m
            playing, watching, and obsessing over. no algorithm, no brand deals,
            just vibes and opinions about certain topics.
          </p>

          <div className="flex flex-wrap gap-3">
            {CTA_LINKS.map(({ href, label, primary }) => (
              <Link
                key={href}
                href={href}
                style={{
                  fontFamily:     'var(--font-pixel)',
                  fontSize:       '0.6rem',
                  letterSpacing:  '0.05em',
                  padding:        '0.75rem 1.25rem',
                  textDecoration: 'none',
                  display:        'inline-block',
                  transition:     'all 0.1s ease',
                  ...(primary
                    ? {
                        background: 'linear-gradient(135deg, var(--cyan), var(--sky))',
                        color:      'var(--navy)',
                        boxShadow:  '3px 3px 0 var(--bright), 0 0 20px rgba(0,229,255,0.4)',
                        border:     'none',
                      }
                    : {
                        background: 'transparent',
                        color:      'var(--cyan)',
                        border:     '2px solid var(--cyan)',
                        boxShadow:  '3px 3px 0 rgba(0,229,255,0.3)',
                      }),
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement
                  if (primary) {
                    el.style.transform  = 'translate(-2px, -2px)'
                    el.style.boxShadow  = '5px 5px 0 var(--bright), 0 0 30px rgba(0,229,255,0.6)'
                  } else {
                    el.style.transform  = 'translate(-2px, -2px)'
                    el.style.background = 'rgba(0,229,255,0.08)'
                    el.style.boxShadow  = '5px 5px 0 rgba(0,229,255,0.4)'
                  }
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement
                  el.style.transform = 'translate(0, 0)'
                  if (primary) {
                    el.style.boxShadow = '3px 3px 0 var(--bright), 0 0 20px rgba(0,229,255,0.4)'
                  } else {
                    el.style.background = 'transparent'
                    el.style.boxShadow  = '3px 3px 0 rgba(0,229,255,0.3)'
                  }
                }}
              >
                {label}
              </Link>
            ))}
          </div>

          <div
            aria-hidden="true"
            style={{
              height:     '1px',
              background: 'linear-gradient(90deg, var(--bright), var(--cyan), transparent)',
              maxWidth:   '360px',
              opacity:    0.5,
            }}
          />
        </div>

        <ProfileCard />
      </div>
    </section>
  )
}
