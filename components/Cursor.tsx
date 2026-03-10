'use client'

import { useEffect, useRef } from 'react'

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const dot = dotRef.current
    if (!dot) return

    // Skip on touch-only devices — no mouse to track
    if (!window.matchMedia('(pointer: fine)').matches) return

    function onMove(e: MouseEvent) {
      dot!.style.left    = `${e.clientX}px`
      dot!.style.top     = `${e.clientY}px`
      dot!.style.opacity = '1'
    }

    function onLeave() {
      dot!.style.opacity = '0'
    }

    document.addEventListener('mousemove', onMove)
    document.addEventListener('mouseleave', onLeave)

    return () => {
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseleave', onLeave)
    }
  }, [])

  return (
    <div
      ref={dotRef}
      aria-hidden="true"
      style={{
        position:      'fixed',
        top:           0,
        left:          0,
        width:         '10px',
        height:        '10px',
        borderRadius:  '50%',
        background:    'var(--cyan)',
        boxShadow:     '0 0 6px var(--cyan), 0 0 14px rgba(0,229,255,0.5), 0 0 24px rgba(0,229,255,0.2)',
        pointerEvents: 'none',
        zIndex:        99998,
        transform:     'translate(-50%, -50%)',
        opacity:       0,
        transition:    'opacity 0.2s ease',
        willChange:    'left, top',
      }}
    />
  )
}
