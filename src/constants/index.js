import project1 from "../assets/projects/project-1.webp";
import project2 from "../assets/projects/project-2.webp";
import project3 from "../assets/projects/project-3.webp";
import project4 from "../assets/projects/project-4.webp";
import project5 from "../assets/projects/project-5.webp";

export const HERO_CONTENT = `I am Rodrigo, a seasoned professional in Web Development and Design, with a background as an Art Director and UI/UX Designer. With experience in advertising agencies and design studios, my cross-disciplinary approach allows me to craft visually appealing designs rooted in strong programming principles.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 3 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2020 - 2024",
    role: "Full Stack Developer",
    company: "Mezcla Studio",
    description: `Developed full-stack applications using React and Node.js/Express with Context API for
state management. Skilled in MongoDB, Java Spring Boot and MySQL for database
interactions and user authentication, delivering responsive web designs optimized for
performance and cross-browser compatibility.`,
    technologies: ["MERN stack", "MySQL", "Figma"],
  },
  {
    year: "2014 - 2018",
    role: "Web & Graphic Designer",
    company: "SCHOPDOG Restaurants",
    description: `Developed in marketing graphics, social media design, print preparation, and web
layout design, with expertise in HTML, CSS, Bootstrap, JavaScript, and MySQL
database and API interaction.`,
    technologies: ["HTML/CSS/JavaScript", "Adobe Creative Suite"],
  },
  {
    year: "2012 - 2014",
    role: "Art Director",
    company: "Ají Marketing & Advertising",
    description: `Led art direction, layout design, illustration, and print preparation. Experience in web
layout design, UX/UI, and coding with HTML, CSS, and JavaScript.`,
    technologies: ["HTML/CSS/JavaScript", "Adobe Creative Suite"],
  },
];

export const PROJECTS = [
  {
    title: "Rollgram",
    image: project1,
    description:
      "A fully functional Intagram clone, with features like post creation, comments, and user authentication.",
    technologies: ["React", "TypeScript", "TailwindCSS", "Appwrite"],
    link: "https://resilient-zabaione-44943e.netlify.app",
  },
  {
    title: "Eclectica",
    image: project2,
    description:
      "A personal social media project currently in development, featuring technologies like React, PostgreSQL, Tailwind CSS, Express and Gemini to build a modern and scalable platform. Featuring Task Management, AI Tarot reading, Posts and Authentication.",
    technologies: ["React", "TailwindCSS", "Express", "PostgreSQL"],
    link: "https://eclecticasite.netlify.app/",
  },
  {
    title: "Previwork",
    image: project3,
    description:
      "Accredited External Prevention Service website (Official website).",
    technologies: ["Wordpress", "Elementor", "Figma", "MySQL"],
    link: "https://www.previwork.es/",
  },
  {
    title: "Tesla Car customization",
    image: project4,
    description:
      "An interactive Tesla customization tool that lets users select exterior and interior colors, performance options, accessories, and calculates pricing, down payments, and monthly financing. Built with JavaScript for dynamic UI updates and seamless interactivity.",
    technologies: ["HTML", "CSS", "JavaScript"],
    link: "https://teslabudgeting.netlify.app/",
  },
  {
    title: "OmniFood",
    image: project5,
    description: "Food subscription service. Responsive web design.",
    technologies: ["HTML", "CSS", "JavaScript"],
    link: "https://cssprojectomnifood.netlify.app/",
  },
];

export const CONTACT = {
  address:
    "Feel free to reach out for any inquiries, collaboration opportunities, or to discuss how I can contribute to your next project. I look forward to connecting with you!",
  phoneNo: "+34 00000000",
  email: "rodrigo.rosalesmoya@gmail.com",
};
