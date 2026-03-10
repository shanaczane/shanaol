'use client'

import { useState, useRef, type ReactNode } from 'react'
import { unlockDiary } from '@/app/diary/actions'

type Props = {
  children: ReactNode
  locked:   boolean
}

export default function DiaryGate({ children, locked }: Props) {
  const [unlocked, setUnlocked]   = useState(!locked)
  const [password, setPassword]   = useState('')
  const [error,    setError]      = useState(false)
  const [shaking,  setShaking]    = useState(false)
  const [pending,  setPending]    = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  if (unlocked) {
    return <>{children}</>
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (pending) return

    setPending(true)
    setError(false)

    const ok = await unlockDiary(password)

    if (ok) {
      setUnlocked(true)
    } else {
      setPassword('')
      setError(true)
      // trigger shake then remove the class so it can fire again
      setShaking(true)
      setTimeout(() => setShaking(false), 450)
      inputRef.current?.focus()
    }

    setPending(false)
  }

  return (
    <div
      style={{
        display:        'flex',
        flexDirection:  'column',
        alignItems:     'center',
        justifyContent: 'center',
        padding:        '3rem 1.25rem',
        textAlign:      'center',
      }}
    >
      <div
        className="widget"
        style={{
          maxWidth:      '22rem',
          width:         '100%',
          padding:       '2rem 1.5rem',
          borderColor:   'var(--pink)',
          boxShadow:     '0 0 24px rgba(255,110,180,0.12)',
        }}
      >
        {/* Lock icon */}
        <div
          aria-hidden="true"
          style={{
            fontSize:     '2.5rem',
            marginBottom: '1rem',
            filter:       'drop-shadow(0 0 8px rgba(255,110,180,0.6))',
          }}
        >
          🔒
        </div>

        {/* Heading */}
        <p
          style={{
            fontFamily:    'var(--font-pixel)',
            fontSize:      '0.75rem',
            color:         'var(--pink)',
            textShadow:    '0 0 8px var(--pink)',
            lineHeight:    2,
            marginBottom:  '0.5rem',
          }}
        >
          private entry
        </p>

        {/* Subtitle */}
        <p
          style={{
            fontFamily:   'var(--font-terminal)',
            fontSize:     '1.1rem',
            color:        'var(--white)',
            opacity:      0.55,
            marginBottom: '1.75rem',
            lineHeight:   1.5,
          }}
        >
          this one's not for everyone.
          <br />
          enter the password to continue.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          <div className={shaking ? 'animate-shake' : ''}>
            <input
              ref={inputRef}
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="password..."
              autoComplete="off"
              disabled={pending}
              aria-label="Diary entry password"
              style={{
                width:         '100%',
                background:    'var(--mid)',
                border:        `1px solid ${error ? 'var(--pink)' : 'var(--blue)'}`,
                borderRadius:  '4px',
                padding:       '0.55rem 0.8rem',
                fontFamily:    'var(--font-terminal)',
                fontSize:      '1.15rem',
                color:         'var(--white)',
                letterSpacing: '0.1em',
                outline:       'none',
                marginBottom:  '0.5rem',
                transition:    'border-color 0.2s',
              }}
            />

            {/* Error message */}
            {error && (
              <p
                role="alert"
                style={{
                  fontFamily:   'var(--font-terminal)',
                  fontSize:     '1rem',
                  color:        'var(--pink)',
                  marginBottom: '0.75rem',
                  letterSpacing: '0.04em',
                }}
              >
                wrong password. try again.
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={pending || password.length === 0}
            style={{
              width:         '100%',
              marginTop:     error ? 0 : '0.75rem',
              padding:       '0.5rem 1rem',
              background:    'transparent',
              border:        '1px solid var(--pink)',
              borderRadius:  '4px',
              fontFamily:    'var(--font-terminal)',
              fontSize:      '1.15rem',
              color:         'var(--pink)',
              letterSpacing: '0.08em',
              opacity:       pending || password.length === 0 ? 0.45 : 1,
              transition:    'all 0.2s',
            }}
          >
            {pending ? 'checking...' : '→ unlock'}
          </button>
        </form>
      </div>
    </div>
  )
}
