

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
  },
  {
    title: "Chat Application",
    description:
      "An Application using Java with socket which user can send text or image in real time",
    images: [
      "https://res.cloudinary.com/dz5le70y6/image/upload/v1773648203/Screenshot_2026-03-12_004528_go1v31.png",
      "https://res.cloudinary.com/dz5le70y6/image/upload/v1773648229/Screenshot_2026-03-12_004550_cwdmtx.png",
      "https://res.cloudinary.com/dz5le70y6/image/upload/v1773648326/Screenshot_2026-03-12_011050_pi2d1n.png",
      "https://res.cloudinary.com/dz5le70y6/image/upload/v1773648310/Screenshot_2026-03-12_010759_w3t8il.png",
      "https://res.cloudinary.com/dz5le70y6/image/upload/v1773648133/Screenshot_2026-03-12_011433_slaxtf.png",],
    thumnail: "https://res.cloudinary.com/dz5le70y6/image/upload/v1773648133/Screenshot_2026-03-12_011433_slaxtf.png",
    repos: [
      {
        name: "Repository",
        link: "https://github.com/JamJam126/Chat-Application",
      },
    ],
  },
  {
    title: "Sastra",
    description:
      "An Khmer Language website, user can buy course with bakong and self-learning",
    images: [
      "https://res.cloudinary.com/dz5le70y6/image/upload/v1773685843/Screenshot_2026-03-17_005948_sk3oir.png",
      "https://res.cloudinary.com/dz5le70y6/image/upload/v1773685847/Screenshot_2026-03-17_010018_o52tdv.png",
      "https://res.cloudinary.com/dz5le70y6/image/upload/v1773685846/Screenshot_2026-03-17_010058_nllfwf.png",
      "https://res.cloudinary.com/dz5le70y6/image/upload/v1773685848/Screenshot_2026-03-17_011032_psqyst.png",
      "https://res.cloudinary.com/dz5le70y6/image/upload/v1773685847/Screenshot_2026-03-17_011042_choiu9.png",
      "https://res.cloudinary.com/dz5le70y6/image/upload/v1773685848/Screenshot_2026-03-17_012121_mii5vk.png",
      "https://res.cloudinary.com/dz5le70y6/image/upload/v1773685850/Screenshot_2026-03-17_012355_pd9kae.png",
      "https://res.cloudinary.com/dz5le70y6/image/upload/v1773685851/Screenshot_2026-03-17_012844_yunrqo.png"
    ],
    thumnail: "https://res.cloudinary.com/dz5le70y6/image/upload/v1773685843/Screenshot_2026-03-17_005948_sk3oir.png",
    repos: [
      {
        name: "Repository",
        link: "https://github.com/pychey/Online-Learning-Platform",
      },
    ],
  },
  {
    title: "Collaboard",
    description:
      "Collaboard is a full-stack Kanban-style task management app inspired by Trello.",
    images: [
      "https://res.cloudinary.com/dz5le70y6/image/upload/v1773686474/Screenshot_2026-03-17_010003_kav4bd.png",
      "https://res.cloudinary.com/dz5le70y6/image/upload/v1773686476/Screenshot_2026-03-17_010144_uhs3es.png",
      "https://res.cloudinary.com/dz5le70y6/image/upload/v1773686477/Screenshot_2026-03-17_010152_lwfvbo.png",
      "https://res.cloudinary.com/dz5le70y6/image/upload/v1773686480/Screenshot_2026-03-17_010242_wcaujx.png",
      "https://res.cloudinary.com/dz5le70y6/image/upload/v1773686482/Screenshot_2026-03-17_010308_do4vnb.png",
      "https://res.cloudinary.com/dz5le70y6/image/upload/v1773686483/Screenshot_2026-03-17_010422_ef4k8r.png",
      "https://res.cloudinary.com/dz5le70y6/image/upload/v1773686484/Screenshot_2026-03-17_010457_xoglnj.png",
      "https://res.cloudinary.com/dz5le70y6/image/upload/v1773686476/Screenshot_2026-03-17_010122_wxdvcg.png"
    ],
    thumnail: "https://res.cloudinary.com/dz5le70y6/image/upload/v1773686476/Screenshot_2026-03-17_010144_uhs3es.png",
    repos: [
      {
        name: "Repository",
        link: "https://github.com/JamJam126/Collaboard",
      },
    ],
  },
  {
    title: "Codifyx",
    description:
      "A codifyx portfolio website , A software company delivering high-quality web/app products.",
    images: [
      "https://res.cloudinary.com/dz5le70y6/image/upload/v1773682018/Screenshot_2026-03-17_002426_orzfqz.png",
      "https://res.cloudinary.com/dz5le70y6/image/upload/v1773682032/Screenshot_2026-03-17_002604_x5h5tw.png",
      "https://res.cloudinary.com/dz5le70y6/image/upload/v1773682030/Screenshot_2026-03-17_002552_ddobuz.png",
      "https://res.cloudinary.com/dz5le70y6/image/upload/v1773682023/Screenshot_2026-03-17_002501_d3xlxt.png",
      "https://res.cloudinary.com/dz5le70y6/image/upload/v1773682025/Screenshot_2026-03-17_002516_qltwcx.png",],
    thumnail: "https://res.cloudinary.com/dz5le70y6/image/upload/v1773682018/Screenshot_2026-03-17_002426_orzfqz.png",
    repos: [
      {
        name: "Repository",
        link: "https://github.com/sokundeny/codifyx",
      },
    ],
  },
  {
    title: "SafeAid Kh",
    description:
      "A Mobile Application using Flutter user can find a guidence to get  emergency assistance",
    images: [
      "https://res.cloudinary.com/dz5le70y6/image/upload/v1773680911/Screenshot_2026-03-17_000211_dyfinz.png",
      "https://res.cloudinary.com/dz5le70y6/image/upload/v1773680911/Screenshot_2026-03-17_000211_dyfinz.png",
      "https://res.cloudinary.com/dz5le70y6/image/upload/v1773681013/Screenshot_2026-03-17_000237_un5zun.png",
      "https://res.cloudinary.com/dz5le70y6/image/upload/v1773681013/Screenshot_2026-03-17_000302_rodn9a.png",
      "https://res.cloudinary.com/dz5le70y6/image/upload/v1773681012/Screenshot_2026-03-17_000247_dxghdp.png",],
    thumnail: "https://res.cloudinary.com/dz5le70y6/image/upload/v1773680911/Screenshot_2026-03-17_000211_dyfinz.png",
    repos: [
      {
        name: "Repository",
        link: "https://github.com/sokundeny/safeaid_kh",
      },
    ],
  },
];