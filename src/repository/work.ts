

// Type for a single repository
export type ProjectRepo = {
  name: string;
  link: string;
};

// Type for a single project
export type Project = {
  title: string;
  description: string;
  images: string[];  
  thumnail: string;  
  repos: ProjectRepo[];
  link?: string; 
};

// Type for the full projects array
export const projects: Project[] = [
  {
    title: "T- watch",
    description:
      "An e-commerce frontend web application built with React js. User can browse and buy watch",
    images: [
      "https://res.cloudinary.com/dz5le70y6/image/upload/v1773612319/t_1_pkvngs.png", 
      "https://res.cloudinary.com/dz5le70y6/image/upload/v1773612319/t_2_tmvgzx.png", 
      "https://res.cloudinary.com/dz5le70y6/image/upload/v1773612319/t_3_hcow5r.png", 
      "https://res.cloudinary.com/dz5le70y6/image/upload/v1773612319/t_4_irqnki.png", 
      "https://res.cloudinary.com/dz5le70y6/image/upload/v1773612319/t_5_ocredz.png", 
      "https://res.cloudinary.com/dz5le70y6/image/upload/v1773612320/t_6_dnj4rp.png", 
      "https://res.cloudinary.com/dz5le70y6/image/upload/v1773612320/t_7_xut0hc.png"],
    thumnail: "https://res.cloudinary.com/dz5le70y6/image/upload/v1773612319/t_1_pkvngs.png",
    repos: [
      {
        name: "Repository",
        link: "https://github.com/sokundeny/T_WATCH",
      },
    ],
    link: "https://facebook.com",
  },
  {
    title: "Chat Application",
    description:
      "An Application using Java with socket which user can send text or image in real time",
    images: [
      "https://res.cloudinary.com/dz5le70y6/image/upload/v1773612319/t_1_pkvngs.png", 
      "https://res.cloudinary.com/dz5le70y6/image/upload/v1773612319/t_2_tmvgzx.png", 
      "https://res.cloudinary.com/dz5le70y6/image/upload/v1773612319/t_3_hcow5r.png", 
      "https://res.cloudinary.com/dz5le70y6/image/upload/v1773612319/t_4_irqnki.png", 
      "https://res.cloudinary.com/dz5le70y6/image/upload/v1773612319/t_5_ocredz.png", 
      "https://res.cloudinary.com/dz5le70y6/image/upload/v1773612320/t_6_dnj4rp.png", 
      "https://res.cloudinary.com/dz5le70y6/image/upload/v1773612320/t_7_xut0hc.png"],
    thumnail: "https://res.cloudinary.com/dz5le70y6/image/upload/v1773612319/t_1_pkvngs.png",
    repos: [
      {
        name: "Repository",
        link: "https://github.com/JamJam126/Chat-Application",
      },
    ],
    link: "https://facebook.com",
  },
];