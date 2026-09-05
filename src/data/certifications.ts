export interface Certification {
  title: string
  issuer: string
  year?: string
  link?: string  // UPDATE: add actual Udemy certificate URLs when available
}

export const certifications: Certification[] = [
  {
    title: 'Complete A.I. Machine Learning, Data Science Bootcamp',
    issuer: 'Udemy',
    link: undefined, // UPDATE: add certificate URL
  },
  {
    title: 'Python for Beginners',
    issuer: 'Udemy',
    link: undefined,
  },
  {
    title: 'Complete React Developer (w/ Redux, Hooks, GraphQL)',
    issuer: 'Udemy',
    link: undefined,
  },
  {
    title: 'The Complete JavaScript Course 2025',
    issuer: 'Udemy',
    link: undefined,
  },
  {
    title: 'Fundamentals of Python and Machine Learning',
    issuer: 'ACES',
    link: undefined,
  },
  {
    title: 'HTML, CSS, Bootstrap',
    issuer: 'ACES',
    link: undefined,
  },
]
