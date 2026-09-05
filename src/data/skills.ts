export interface SkillGroup {
  label: string
  skills: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    label: 'AI / ML',
    skills: ['Python', 'TensorFlow', 'Keras', 'Scikit-learn', 'OpenCV', 'YOLOv8n', 'MediaPipe', 'Pandas', 'NumPy', 'Matplotlib'],
  },
  {
    label: 'Frontend',
    skills: ['ReactJS', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Redux', 'SCSS'],
  },
  {
    label: 'Backend',
    skills: ['FastAPI', 'WebSocket', 'PostgreSQL', 'SQL'],
  },
  {
    label: 'Languages',
    skills: ['Python', 'JavaScript', 'TypeScript', 'C', 'C++', 'SQL'],
  },
  {
    label: 'Tools',
    skills: ['Git', 'GitHub', 'VS Code', 'Conda', 'MiniConda'],
  },
]

export const interests = [
  'Artificial Intelligence',
  'Deep Learning',
  'System Design',
  'Education Technology',
  'Digital Transformation',
  'Web Development',
  'Data Science & Predictive Analytics',
  'Entrepreneurship & Management',
  'Cloud Computing',
]
