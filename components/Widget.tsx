import { ReactNode } from 'react'

type WidgetProps = {
  children:    ReactNode
  title?:      string        // Optional header label (VT323 font)
  accent?:     string        // CSS color var for the title label, default --sky
  className?:  string        // Extra classes (e.g. "animate-float", col-span-2)
  style?:      React.CSSProperties
  as?:         'div' | 'section' | 'article' | 'nav'
  'aria-label'?: string
}

export default function Widget({
  children,
  title,
  accent = 'var(--sky)',
  className = '',
  style,
  as: Tag = 'div',
  'aria-label': ariaLabel,
}: WidgetProps) {
  return (
    <Tag
      className={`widget ${className}`.trim()}
      style={style}
      aria-label={ariaLabel}
    >
      {title && (
        <header
          style={{
            marginBottom:  '1rem',
            paddingBottom: '0.6rem',
            borderBottom:  '1px solid var(--blue)',
          }}
        >
          <p
            style={{
              fontFamily:    'var(--font-terminal)',
              fontSize:      '1.05rem',
              letterSpacing: '0.08em',
              color:         accent,
              display:       'flex',
              alignItems:    'center',
              gap:           '0.5rem',
            }}
          >
            <span
              aria-hidden="true"
              style={{
                display:      'inline-block',
                width:        '3px',
                height:       '0.9em',
                background:   accent,
                borderRadius: '1px',
                boxShadow:    `0 0 6px ${accent}`,
                flexShrink:   0,
              }}
            />
            {title.toUpperCase()}
          </p>
        </header>
      )}

      {children}
    </Tag>
  )
}
