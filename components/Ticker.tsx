import currently from '@/content/currently.json'

const SEP = '\u00A0\u00A0\u2736\u00A0\u00A0' // "  ✶  "

function buildItems(): string[] {
  const items: string[] = []

  if (currently.game)
    items.push(`\uD83C\uDFAE\u00A0gaming:\u00A0${currently.game.title}\u00A0\u2014\u00A0${currently.game.sub}`)

  if (currently.anime)
    items.push(`\uD83D\uDCFA\u00A0watching:\u00A0${currently.anime.title}\u00A0${currently.anime.sub}`)

  if (currently.manga)
    items.push(`\uD83D\uDCDA\u00A0reading:\u00A0${currently.manga.title}\u00A0${currently.manga.sub}`)

  if (currently.music)
    items.push(`\uD83C\uDFB5\u00A0listening:\u00A0${currently.music.title}\u00A0\u2014\u00A0${currently.music.artist}`)

  if (currently.movie)
    items.push(`\uD83C\uDFAC\u00A0movie:\u00A0${currently.movie.title}\u00A0(${currently.movie.sub})`)

  if (currently.mood)
    items.push(`\u2728\u00A0mood:\u00A0${currently.mood}`)

  return items
}

export default function Ticker() {
  const items = buildItems()
  const tickerString = items.join(SEP) + SEP

  return (
    <div
      className="w-full overflow-hidden"
      style={{
        background:  'var(--deep)',
        borderBottom: '1px solid var(--blue)',
        padding:     '0.35rem 0',
      }}
      aria-label="Currently — status ticker"
    >
      <p
        className="animate-ticker"
        style={{
          fontFamily:    'var(--font-terminal)',
          fontSize:      '1.1rem',
          color:         'var(--sky)',
          letterSpacing: '0.04em',
          margin:        0,
        }}
        aria-hidden="true"
      >
        <span>{tickerString}</span>
        <span aria-hidden="true">{tickerString}</span>
      </p>

      <p className="sr-only">{items.join(' · ')}</p>
    </div>
  )
}
