export type CertCategory = 'ai-ml' | 'cybersecurity' | 'web' | 'leadership' | 'other'

export interface Certificate {
  id: string
  title: string
  issuer: string
  date: string
  category: CertCategory
  /** Thumbnail image stored locally in public/certificates/ */
  image?: string
  /** Link to open the full certificate on Google Drive */
  link: string
  description?: string
}

// Helper: given a Drive file ID, returns the public view link
const driveLink = (id: string) =>
  `https://drive.google.com/file/d/${id}/view?usp=sharing`

export const certificates: Certificate[] = [
  {
    id: 'completed-ai',
    title: 'Complete AI & Machine Learning Bootcamp',
    issuer: 'Udemy',
    date: '2025',
    category: 'ai-ml',
    image: '/certificates/completed-ai.jpg',
    link: driveLink('1PEmCV0GTRmxLMeK8K1yCCk_5M1_xJTJM'),
    description: 'End-to-end AI & ML training covering supervised/unsupervised learning, deep learning, and real-world projects.',
  },
  {
    id: 'aces-ai',
    title: 'ACES, AI Track Certificate',
    issuer: 'ACES · IOE Purwanchal Campus',
    date: '2024',
    category: 'ai-ml',
    image: '/certificates/aces-ai.jpg',
    link: driveLink('19Wc1RltQ_m6MEeSWR5C_Vowr-dvyKGLj'),
    description: 'AI specialisation certificate from the ACES student club at IOE Purwanchal Campus.',
  },
  {
    id: 'complete-python',
    title: 'Complete Python Bootcamp',
    issuer: 'Udemy',
    date: '2024',
    category: 'other',
    image: '/certificates/complete-python.jpg',
    link: driveLink('15km7fJefDxgRtWgldJJs-N4olT8oQzjQ'),
    description: 'Comprehensive Python course covering fundamentals to advanced topics including OOP, file handling, and automation.',
  },
  {
    id: 'complete-react',
    title: 'Complete React Developer Bootcamp',
    issuer: 'Udemy',
    date: '2025',
    category: 'web',
    image: '/certificates/complete-react.jpg',
    link: driveLink('1CwpD5fK2fBgUYEdsEeYZSfB1u1nTC6X2'),
    description: 'Full React ecosystem , hooks, context, Redux, React Router, and building modern web applications.',
  },
  {
    id: 'complete-js',
    title: 'Complete JavaScript Course',
    issuer: 'Udemy',
    date: '2025',
    category: 'web',
    image: '/certificates/complete-js.jpg',
    link: driveLink('1KMbrn6MexCo_uWAuQjuPQpFW0gjNlUHj'),
    description: 'Modern JavaScript from fundamentals to advanced , ES6+, async/await, closures, and DOM manipulation.',
  },
  {
    id: 'aces-web',
    title: 'ACES , Web Development Certificate',
    issuer: 'ACES · IOE Purwanchal Campus',
    date: '2023',
    category: 'web',
    image: '/certificates/aces-web.jpg',
    link: driveLink('19WiuOLEsYBLouti0nTAAYMBtJ082Xlhe'),
    description: 'Web development certificate from the ACES student club covering HTML, CSS, and JavaScript fundamentals.',
  },
  {
    id: 'delta',
    title: 'Delta Club , Tech Certificate',
    issuer: 'Delta · IOE Purwanchal Campus',
    date: '2023',
    category: 'other',
    image: '/certificates/delta.jpg',
    link: driveLink('19SQUaDjcHowwc1PgtkqfuerYdhUKFS9H'),
    description: 'Certificate from Delta, the technology club at IOE Purwanchal Campus, for participation in tech events.',
  },
]
