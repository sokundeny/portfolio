import t_1 from '@/assets/work/T-watch/t_1.png';
import t_2 from '@/assets/work/T-watch/t_2.png';
import t_3 from '@/assets/work/T-watch/t_3.png';
import t_4 from '@/assets/work/T-watch/t_4.png';
import t_5 from '@/assets/work/T-watch/t_5.png';
import t_6 from '@/assets/work/T-watch/t_6.png';
import t_7 from '@/assets/work/T-watch/t_7.png';
import { StaticImageData } from 'next/image';

// Type for a single repository
export type ProjectRepo = {
  name: string;
  link: string;
};

// Type for a single project
export type Project = {
  title: string;
  description: string;
  images: StaticImageData[];  
  thumnail: StaticImageData;  
  repos: ProjectRepo[];
  link?: string; 
};

// Type for the full projects array
export const projects: Project[] = [
  {
    title: "T- watch",
    description:
      "An e-commerce frontend web application built with React js. User can browse and buy watch",
    images: [t_1, t_2, t_3, t_4, t_5, t_6, t_7],
    thumnail: t_1,
    repos: [
      {
        name: "Repository",
        link: "https://github.com/sokundeny/T_WATCH",
      },
    ],
    link: "https://facebook.com",
  },
];