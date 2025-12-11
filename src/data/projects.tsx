// src/data/projects.ts

export type Project = {
  id: string
  title: string
  description: string
  link: string
}

export const projects: Project[] = [
  {
    id: 'pump-project',
    title: 'Insulin Pump Data Pipeline',
    description: 'A data pipeline exposing, ingesting and analyzing insulin pump data.',
    link: '/pages/subpages/pump-project',
  },
  {
    id: 'investigatsby',
    title: 'Investigatsby',
    description: 'Data Engineering and DFIR modules and musings.',
    link: '/pages/subpages/investigatsby',
  },
  {
    id: 'dashboard-grid',
    title: 'Coming Soon',
    description: 'Coming soon. Likely a blog of randomness.',
    link: '/projects/dashboard-grid',
  },
]