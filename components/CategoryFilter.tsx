'use client'

import { useState } from 'react'
import type { BlogPost } from '@/lib/posts'
import BlogCard from '@/components/BlogCard'

const CATEGORY_ACCENTS: Record<string, string> = {
  all:    'var(--glow)',
  gaming: 'var(--mint)',
  anime:  'var(--pink)',
  manga:  'var(--sky)',
  movies: 'var(--yellow)',
  music:  'var(--cyan)',
  life:   'var(--glow)',
}

function accentFor(cat: string) {
  return CATEGORY_ACCENTS[cat.toLowerCase()] ?? 'var(--white)'
}

export default function CategoryFilter({ posts }: { posts: BlogPost[] }) {
  const [active, setActive] = useState('all')

  const categories = ['all', ...Array.from(new Set(posts.map((p) => p.frontmatter.category)))]

  const filtered = active === 'all'
    ? posts
    : posts.filter((p) => p.frontmatter.category === active)

  return (
    <div>
      <div
        role="tablist"
        aria-label="Filter posts by category"
        style={{
          display:        'flex',
          flexWrap:       'wrap',
          gap:            '0.5rem',
          marginBottom:   '2rem',
          paddingBottom:  '1rem',
          borderBottom:   '1px solid var(--blue)',
        }}
      >
        {categories.map((cat) => {
          const isActive = active === cat
          const accent   = accentFor(cat)
          return (
            <button
              key={cat}
              role="tab"
              aria-selected={isActive}
              onClick={() => setActive(cat)}
              style={{
                fontFamily:    'var(--font-terminal)',
                fontSize:      '1.1rem',
                letterSpacing: '0.06em',
                padding:       '0.3rem 0.9rem',
                borderRadius:  '99px',
                border:        `1px solid ${isActive ? accent : 'var(--blue)'}`,
                background:    isActive ? `color-mix(in srgb, ${accent} 15%, transparent)` : 'transparent',
                color:         isActive ? accent : 'var(--sky)',
                transition:    'all 0.2s',
                textTransform: 'lowercase',
              }}
            >
              {cat}
            </button>
          )
        })}
      </div>

      {filtered.length === 0 ? (
        <p
          style={{
            fontFamily:  'var(--font-terminal)',
            fontSize:    '1.2rem',
            color:       'var(--sky)',
            opacity:     0.6,
            textAlign:   'center',
            paddingTop:  '2rem',
          }}
        >
          no posts here yet...
        </p>
      ) : (
        <div
          style={{
            display:             'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap:                 '1.25rem',
          }}
        >
          {filtered.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      )}
    </div>
  )
}
