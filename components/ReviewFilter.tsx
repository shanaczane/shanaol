'use client'

import { useState } from 'react'
import type { Review } from '@/lib/reviews'
import ReviewCard from '@/components/ReviewCard'

// ─── Config ──────────────────────────────────────────────────

const TABS = [
  { label: 'all',    value: 'all',   accent: 'var(--glow)'   },
  { label: 'games',  value: 'game',  accent: 'var(--mint)'   },
  { label: 'anime',  value: 'anime', accent: 'var(--pink)'   },
  { label: 'manga',  value: 'manga', accent: 'var(--sky)'    },
  { label: 'movies', value: 'movie', accent: 'var(--yellow)' },
]

const SORTS = [
  { label: 'date added', value: 'newest'    },
  { label: 'rating',     value: 'top-rated' },
  { label: 'a-z',        value: 'alpha'     },
]

// ─── Sort logic ───────────────────────────────────────────────

function sortReviews(reviews: Review[], sort: string): Review[] {
  const copy = [...reviews]
  switch (sort) {
    case 'top-rated':
      return copy.sort((a, b) => b.score - a.score)
    case 'alpha':
      return copy.sort((a, b) => a.title.localeCompare(b.title))
    case 'newest':
    default:
      return copy.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  }
}

// ─── Component ───────────────────────────────────────────────

export default function ReviewFilter({ reviews }: { reviews: Review[] }) {
  const [activeTab,  setActiveTab]  = useState('all')
  const [activeSort, setActiveSort] = useState('newest')

  const activeAccent = TABS.find((t) => t.value === activeTab)?.accent ?? 'var(--glow)'

  const visible = sortReviews(
    activeTab === 'all' ? reviews : reviews.filter((r) => r.type === activeTab),
    activeSort,
  )

  return (
    <div>
      {/* ── Controls row: tabs + sort ── */}
      <div
        style={{
          display:       'flex',
          flexWrap:      'wrap',
          alignItems:    'center',
          gap:           '0.75rem',
          marginBottom:  '1.5rem',
          paddingBottom: '1rem',
          borderBottom:  '1px solid var(--blue)',
          rowGap:        '0.75rem',
        }}
      >
        {/* Category tabs */}
        <div
          role="tablist"
          aria-label="Filter reviews by type"
          style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', flex: 1 }}
        >
          {TABS.map(({ label, value, accent }) => {
            const isActive = activeTab === value
            return (
              <button
                key={value}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveTab(value)}
                style={{
                  fontFamily:    'var(--font-terminal)',
                  fontSize:      '1.1rem',
                  letterSpacing: '0.06em',
                  padding:       '0.3rem 0.85rem',
                  borderRadius:  '99px',
                  border:        `1px solid ${isActive ? accent : 'var(--blue)'}`,
                  background:    isActive ? `color-mix(in srgb, ${accent} 15%, transparent)` : 'transparent',
                  color:         isActive ? accent : 'var(--sky)',
                  transition:    'all 0.2s',
                }}
              >
                {label}
              </button>
            )
          })}
        </div>

        {/* Sort controls */}
        <div
          aria-label="Sort reviews"
          style={{
            display:    'flex',
            gap:        '0.1rem',
            alignItems: 'center',
            flexShrink: 0,
          }}
        >
          <span
            style={{
              fontFamily:    'var(--font-terminal)',
              fontSize:      '0.9rem',
              color:         'var(--sky)',
              opacity:       0.45,
              marginRight:   '0.4rem',
              letterSpacing: '0.04em',
            }}
          >
            sort:
          </span>
          {SORTS.map(({ label, value }, i) => (
            <span key={value} style={{ display: 'flex', alignItems: 'center' }}>
              {i > 0 && (
                <span style={{ color: 'var(--blue)', margin: '0 0.3rem', fontSize: '0.8rem' }}>·</span>
              )}
              <button
                onClick={() => setActiveSort(value)}
                style={{
                  fontFamily:      'var(--font-terminal)',
                  fontSize:        '1rem',
                  letterSpacing:   '0.04em',
                  color:           activeSort === value ? activeAccent : 'var(--sky)',
                  background:      'transparent',
                  border:          'none',
                  padding:         '0',
                  textDecoration:  activeSort === value ? 'underline' : 'none',
                  textUnderlineOffset: '3px',
                  opacity:         activeSort === value ? 1 : 0.55,
                  transition:      'all 0.15s',
                }}
              >
                {label}
              </button>
            </span>
          ))}
        </div>
      </div>

      {/* ── Result count ── */}
      <p
        style={{
          fontFamily:    'var(--font-terminal)',
          fontSize:      '0.95rem',
          color:         'var(--sky)',
          opacity:       0.45,
          letterSpacing: '0.04em',
          marginBottom:  '1.25rem',
        }}
      >
        {visible.length} {visible.length === 1 ? 'entry' : 'entries'}
      </p>

      {/* ── Card grid ── */}
      {visible.length === 0 ? (
        <p
          style={{
            fontFamily: 'var(--font-terminal)',
            fontSize:   '1.2rem',
            color:      'var(--sky)',
            opacity:    0.5,
            textAlign:  'center',
            paddingTop: '2.5rem',
          }}
        >
          nothing here yet...
        </p>
      ) : (
        <div
          style={{
            display: 'grid',
            gap:     '1.1rem',
          }}
          className="sm:grid-cols-2 lg:grid-cols-3"
        >
          {visible.map((r) => (
            <ReviewCard key={r.id} review={r} />
          ))}
        </div>
      )}
    </div>
  )
}
