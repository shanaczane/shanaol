'use client'

import { useEffect } from 'react'

const EMOJIS = ['✦', '★', '✸', '⟡', '✺', '✼', '☆', '⋆']

function spawnSparkle(x: number, y: number) {
  const el = document.createElement('div')
  el.className = 'sparkle'
  el.textContent = EMOJIS[Math.floor(Math.random() * EMOJIS.length)]
  el.style.left = `${x}px`
  el.style.top  = `${y}px`
  document.body.appendChild(el)
  // Remove after animation completes (matches 1s sparkle-out duration)
  el.addEventListener('animationend', () => el.remove(), { once: true })
}

export default function Sparkle() {
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      // Skip clicks on interactive elements to avoid fighting with UI
      const target = e.target as HTMLElement
      if (target.closest('button, a, input, textarea, select, [role="button"]')) {
        // Still spawn but offset slightly so it doesn't obscure the element
        spawnSparkle(e.clientX + 12, e.clientY - 8)
        return
      }
      spawnSparkle(e.clientX, e.clientY)
    }

    window.addEventListener('click', handleClick)
    return () => window.removeEventListener('click', handleClick)
  }, [])

  // Renders nothing — purely a side-effect component
  return null
}
