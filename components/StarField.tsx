// Server component — no 'use client' needed.
// Renders a fixed full-screen div; all visuals live in .starfield (globals.css).
export default function StarField() {
  return <div className="starfield" aria-hidden="true" />
}
