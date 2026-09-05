export type ProjectCategory = 'sayapatri' | 'personal'

export interface Project {
  id: string
  title: string
  subtitle?: string
  description: string
  longDescription?: string
  stack: string[]
  image?: string
  links: {
    github?: string
    live?: string
  }
  featured: boolean
  category: ProjectCategory
  year: string
}

export const projects: Project[] = [
  // ── Sayapatri Group Products ──
  {
    id: 'sayapatri-connect',
    title: 'Sayapatri Connect',
    subtitle: 'Event Sponsorship & Creator Marketplace',
    description: "Nepal's dedicated platform connecting Event Organizers, Brand Owners, and Content Creators for event sponsorships, media coverage, and competitive bidding.",
    longDescription: "At Sayapatri Connect, we are building Nepal's dedicated platform where Event Organizers (hosting hackathons, tech fests, music concerts, sports, and charity events) post events to seek sponsorships from Brand Owners whose values align with the cause. Organizers can also hire Content Creators for event coverage or post bid opportunities. Brand Owners discover aligned events to sponsor, run creator campaigns, invite bids, and maximize ROI.",
    stack: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'TailwindCSS'],
    image: undefined,
    links: {
      live: 'https://sayapatriconnect.com',
    },
    featured: true,
    category: 'sayapatri',
    year: '2026',
  },
  {
    id: 'org-management-system',
    title: 'Organization Management System (OMS)',
    subtitle: 'Enterprise Administrative ERP',
    description: 'Comprehensive organization management system built for institutions and enterprises to manage member roles, operations, and digital workflows.',
    longDescription: 'A robust administrative system for organizations to manage member registries, financial records, event scheduling, and internal communications in a unified dashboard.',
    stack: ['React', 'TypeScript', 'REST API', 'PostgreSQL', 'TailwindCSS'],
    image: undefined,
    links: {},
    featured: false,
    category: 'sayapatri',
    year: '2025',
  },
  {
    id: 'sayapatri-lms',
    title: 'EduConnect LMS',
    subtitle: 'Learning Management System for Schools',
    description: 'Custom e-learning management system empowering schools and training institutions with course delivery, student tracking, and digital assessments.',
    longDescription: 'Built for partner schools and training programs to digitize course materials, track student performance, assign quizzes, and conduct online learning sessions.',
    stack: ['React', 'TypeScript', 'Node.js', 'MongoDB', 'Express'],
    image: undefined,
    links: {},
    featured: false,
    category: 'sayapatri',
    year: '2025',
  },
  // ── Self-Built & Personal Projects ──
  {
    id: 'ai-hiring-platform',
    title: 'AI Hiring & Proctoring Platform',
    subtitle: 'Real-Time CV & AI Interview Monitoring',
    description: 'A real-time interview proctoring system combining computer vision (YOLOv8n + MediaPipe) and WebSockets for automated candidate monitoring.',
    longDescription: 'Built a real-time interview proctoring platform combining computer vision and WebSocket-based monitoring. The system detects suspicious activity during remote interviews using YOLOv8n for object detection and MediaPipe for facial landmark tracking.',
    stack: ['FastAPI', 'WebSocket', 'YOLOv8n', 'MediaPipe', 'PostgreSQL', 'Python'],
    image: '/projects/ai-hiring.png',
    links: {
      github: 'https://github.com/anshgupta00/aiHiringPlatform',
    },
    featured: true,
    category: 'personal',
    year: '2026',
  },
  {
    id: 'stock-prediction',
    title: 'NEPSE Stock Price Prediction',
    subtitle: 'LSTM Time-Series Forecasting',
    description: 'NEPSE stock data analysis using LSTM deep learning ; predicts closing prices and notifies users via an automated alert system.',
    longDescription: 'Analyzed NEPSE stock market datasets using Long Short-Term Memory (LSTM) recurrent neural networks. Features automated data fetching, preprocessing, model training, and price direction forecasting.',
    stack: ['Python', 'TensorFlow', 'Keras', 'TypeScript', 'Pandas'],
    image: undefined,
    links: {
      github: 'https://github.com/anshgupta00/stockPrediction',
    },
    featured: true,
    category: 'personal',
    year: '2025',
  },
  {
    id: 'dog-breed',
    title: 'Dog Breed Classification',
    subtitle: 'Computer Vision & Transfer Learning',
    description: 'Deep learning CNN model trained with transfer learning to identify 120+ dog breeds with high confidence.',
    longDescription: 'Computer vision application built during deep learning research using transfer learning with pre-trained ResNet/MobileNet models to accurately classify dog breeds from uploaded images.',
    stack: ['Python', 'TensorFlow', 'Keras', 'OpenCV'],
    image: undefined,
    links: {
      github: 'https://github.com/anshgupta00/dogBreed',
    },
    featured: false,
    category: 'personal',
    year: '2025',
  },
  {
    id: 'ecommerce',
    title: 'E-Commerce Store',
    subtitle: 'Retail Web Application',
    description: 'Online store with authentication, product catalog filtering, responsive cart, and checkout ; built with React, TypeScript, and Redux.',
    longDescription: 'Full-featured online retail store featuring user authentication, reactive shopping cart management, product filtering, and payment checkout interface.',
    stack: ['ReactJS', 'TypeScript', 'Redux', 'SCSS'],
    image: undefined,
    links: {
      github: 'https://github.com/anshgupta00/clothingbrand',
    },
    featured: false,
    category: 'personal',
    year: '2024',
  },
]
