import reviewsData from '@/content/reviews.json'

export type Review = {
  id:      string
  title:   string
  type:    'game' | 'anime' | 'manga' | 'movie'
  score:   number
  cover:   string
  status:  'completed' | 'in progress' | 'dropped' | 'on hold'
  date:    string   
  excerpt: string
}

export function getAllReviews(): Review[] {
  return (reviewsData.reviews as Review[]).sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )
}
