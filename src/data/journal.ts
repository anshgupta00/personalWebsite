export type JournalCategory =
  | 'AI/ML'
  | 'Engineering'
  | 'Building'
  | 'Teaching'
  | 'Career'
  | 'Ideas'
  | 'Nepal Tech'

export interface JournalPost {
  id: string
  slug: string
  title: string
  excerpt: string
  category: JournalCategory
  date: string
  readingTime: number
  published: boolean
}

// Real posts will be added here as they are published
export const journalPosts: JournalPost[] = []

export const journalCategories: JournalCategory[] = [
  'AI/ML', 'Engineering', 'Building', 'Teaching', 'Career', 'Ideas', 'Nepal Tech'
]
