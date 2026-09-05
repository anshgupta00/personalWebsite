export interface CommunityRole {
  org: string
  role: string
  period: string
  location: string
  description: string
}

export const communityRoles: CommunityRole[] = [
  {
    org: 'Abhiyan: Designing the Future',
    role: 'Instructor & Panelist',
    period: '2025',
    location: 'Koshi Province',
    description: 'Delivered educational sessions on AI and its real-world applications across Health, Education, and Business sectors. Facilitated panel discussions, competitions, and workshops for students and teachers.',
  },
  {
    org: 'Cyber Security and Ethical Hacking Training',
    role: 'Instructor & Learner',
    period: '2024',
    location: 'Koshi Province',
    description: 'Instructed 450+ grade 9 and 10 students across different schools in Koshi Province on cybersecurity and ethical hacking.',
  },
  {
    org: 'ACES, IOE Purwanchal Campus',
    role: 'Vice-PR',
    period: '2023/2024',
    location: 'Dharan',
    description: 'Organized workshops and national-level events ; Hackathon, Datathon, and Capture The Flag. Fostered partnerships with industry leaders and sponsors.',
  },
  {
    org: 'Delta, IOE Purwanchal Campus',
    role: 'Content Writer',
    period: '2023',
    location: 'Dharan',
    description: 'Contributed to national tech events through creative writing for college reps, company ads, event partners, and social media.',
  },
  {
    org: 'NTBNS, IOE Purwanchal Campus',
    role: 'Main Event Host',
    period: '2023',
    location: 'Dharan',
    description: 'Led the Saraswati Puja event as Main Event Host ; successfully hosting both the formal and informal segments.',
  },
  {
    org: 'Biratnagar Children Metropolitan Network',
    role: 'President → Advisor',
    period: '2017–2020',
    location: 'Biratnagar',
    description: 'Member (2017/18) → President (2018/19) → Advisor (2019/20). Advocated for children\'s rights with NGOs and INGOs under the Biratnagar Metropolitan. Collaborated with UNICEF Nepal and UNICEF Finland.',
  },
]
