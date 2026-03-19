import type { PortfolioConfig } from "./types";

export const config: PortfolioConfig = {
  name: "G. Banidhar",
  role: "AI & ML Engineering Student | Tech Enthusiast",
  about:
    "I’m an AI & ML engineering student passionate about building scalable, user-centric digital products that bridge design and technology.",
  bio: "AI & ML engineering student skilled in Python, Java, Data Analytics, and Computer Vision. Experienced in leading teams and building projects like Face Recognition Attendance System and Quick News Web App. Proficient in Power BI, MySQL, MongoDB, and cloud technologies, with strong problem-solving and adaptability skills.",
  contact: {
    email: "nsbanidhar123@gmail.com",
    github: "https://github.com/NSBunny",
    linkedin: "https://www.linkedin.com/in/g-banidhar-0a5046247/",
    phone: "+91 8688300014",
  },
  skills: [
    "Java",
    "Python",
    "C",
    "JavaScript",
    "HTML",
    "CSS",
    "Prompt Engineering",
    "Machine Learning",
    "Computer Vision",
    "Data Analytics",
    "MySQL",
    "MongoDB",
    "Power BI",
    "AI Tools",
  ],
  experience: [
    {
      duration: "Apr 2025 — May 2025",
      company: "VaultofCodes",
      role: "AI & Prompt Engineering Intern",
      link: "https://vaultofcodes.in/",
      description: [
        "Developed a personal AI assistant with voice control, task management, and information retrieval features.",
        "Gained hands-on experience with real-world AI and prompt engineering applications.",
      ],
    },
    {
      duration: "Nov 2024 — Jan 2025",
      company: "OctaNet Services Pvt. Ltd.",
      role: "Python Developer Intern",
      link: "https://octanet.in/",
      description: [
        "Designed an ATM simulation model, gaining experience in Python GUI and backend development.",
        "Built projects focusing on logic design and user interaction with Python.",
      ],
    },
    {
      duration: "Aug 2023 — Feb 2024",
      company: "Google Developer Student Club (GDSC)",
      role: "Technical Lead",
      link: "https://developers.google.com/community/gdsc",
      description: [
        "Coordinated and organized Google Cloud Study Jam 2023 at Guru Nanak Dev Engineering College.",
        "Facilitated hands-on sessions on Google Cloud and Generative AI for juniors.",
      ],
    },
  ],
  projects: [
    {
      name: "Quick News Web App",
      description:
        "Developed a news aggregator web application that fetches and displays real-time headlines from multiple sources using API integration.",
      technologies: ["HTML", "CSS", "JavaScript", "Python", "Django"],
      github: "https://github.com/NSBunny/Quick-News",
    },
    {
      name: "Face Recognition Attendance System",
      description:
        "Built a real-time face recognition-based attendance system for use in industries and educational institutions.",
      technologies: ["Python", "Computer Vision", "HTML", "CSS"],
      github: "https://github.com/NSBunny",
    },
    {
      name: "Gesture Volume Control",
      description:
        "Created a gesture-controlled volume system using Python and OpenCV that detects hand gestures to control volume in real-time.",
      technologies: ["Python", "OpenCV"],
      github: "https://github.com/NSBunny",
    },
  ],
  certificates: [
    {
      name: "Basic Programming using python",
      issuer: "FOSSEE, IIT Bombay",
      date: "Jul, 2024",
      description:
        "Completed a 3-day workshop on basic programming organized by GNDEC University in collaboration with FOSSEE Project, IIT Bombay.",
      image: "/cert1.png",
    },
    {
      name: "Development of Gen AI models",
      issuer: "NxtWave",
      date: "Sep, 2024",
      description:
        "Acquired skills in Text-to-Image synthesis, Language Translation, and Chatbots using Deep Learning architectures.",
      image: "/ai_neural_processor_core_1773297711972.png",
    },
    {
      name: "Power BI",
      issuer: "Simplilearn",
      date: "Oct, 2024",
      description:
        "Developed proficiency in data preparation, modeling, and visualization with DAX and Power Query.",
      image: "/cert2.png",
    },
    {
      name: "Java Boot Camp",
      issuer: "LetsUpgrade",
      date: "Jun, 2024",
      description:
        "Hands-on experience with core Java concepts, OOP, and building basic applications.",
      image: "/cert3.png",
    },
    {
      name: "Data Analytics Job Simulation",
      issuer: "Deloitte",
      date: "Apr, 2025",
      description:
        "Completed virtual job simulation on Forage, gaining experience in data analysis and forensic technology.",
      image: "/cert4.png",
    },
    {
      name: "Data Science & Analytics",
      issuer: "HP Life",
      date: "Jul, 2025",
      description:
        "Gained key data science methodologies and tools to make data-driven decisions.",
      image: "/cert5.png",
    },
  ],
};
