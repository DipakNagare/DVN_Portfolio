import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  cdac,
  Pratitilogo,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  Meghshikshak,
  CaneAdviser,
  ContentDelivary

} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
  {
    id: "downloadCv",
    title: "Download Cv",
  },
];

const services = [
  {
    title: "Software Developer",
    icon: web,
  },
  {
    title: "ReactJS Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Web Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Full Stack Developer",
    company_name: " Intern at CDAC Hyderabad",
    icon: cdac,
    iconBg: "#383E56",
    date: "March 2023 - March 2024",
    points: [
      "Project : Meghshikshak E-Learning Platform ",
      "Developing and maintaining web applications using HTML, CSS, JavaScript,Boostrap, ReactJS, API, NodeJS, MongoDB, JAVA, spring boot, MySQL Led the development of a dynamic and user-friendly E-Learning platform, MeghShikshak, for CDAC Hyderabad",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
  {
    title: "Software Developer",
    company_name: "Pratiti Technologies",
    icon: Pratitilogo,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - March 2023",
    points: [
      "Project: Token Generation System for Bank.",
      "Developing and maintaining web applications using ReactJS, Java, Spring Boot, MySQL, Git, Boostrap and other related technologies.",
      "We have successfully developed a web application for a bank, providing a robust and efficient TokenGeneration System",
      "Followed the MVC architecture and adhered to industry best software practices to ensure a secure and reliable platform.",
      "We improved the user experience by implementing a user-friendly interface and streamlining the token generation process, leading to increased customer satisfaction.",
    ],
  },
  // {
  //   title: "Web Developer",
  //   company_name: "Shopify",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  
  {
    name: "MeghShikshak E-Learing Platform",
    description:
      "Led the creation of MeghShikshak, an innovative E-Learning platform, utilizing HTML, CSS, JavaScript, ReactJS, API, JAVA, spring boot,and MySQL. I make all content of this website is Static to Dynamic.",
    tags: [
      {
        name: "ReactJS",
        color: "blue-text-gradient",
      },
      {
        name: "Java",
        color: "green-text-gradient",
      },
      {
        name: "Boostrap",
        color: "pink-text-gradient",  
      },
      {
        name: "restapi",
        color: "blue-text-gradient",
      },
    ],
    image: Meghshikshak,
    source_code_link: "https://github.com/DipakNagare/MeghS1_Implementation_Modal",
  },
  {
    name: "Content Delivary E-Learnign Platform",
    description:
      "Led the creation of Content Delivary, an innovative E-Learning platform, utilizing HTML, CSS, JavaScript, ReactJS, API, JAVA, spring boot,and MySQL.",
    tags: [
      {
        name: "ReactJS",
        color: "blue-text-gradient",
      },
      {
        name: "Java",
        color: "green-text-gradient",
      },
      {
        name: "Boostrap",
        color: "pink-text-gradient",  
      },
      {
        name: "restapi",
        color: "blue-text-gradient",
      },
    ],
    image: ContentDelivary,
    source_code_link: "https://github.com/DipakNagare/ContentDelevary-for-E-Learning-Platform",
  },
  {
    name: "Cane Adviser - Web Application",
    description:
      "It is sugarcane breeding institute application in three different language by utilizing HTML, CSS, JavaScript, Thymeleaf(spring boot),API, JAVA, and MySQL.This is a client based project which includes the sugarcane technologies, scheduler and query handler.",
    tags: [
      {
        name: "Thymeleaf",
        color: "blue-text-gradient",
      },
      {
        name: "Java",
        color: "green-text-gradient",
      },
      {
        name: "Boostrap",
        color: "pink-text-gradient",  
      },
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
    ],
    image: CaneAdviser,
    source_code_link: "https://github.com/DipakNagare/CaneAdviser-Web",
  },
  {
    name: "Task Management",
    description:
      "Developed a web-based platform that utilizes ReactJS, Spring Boot, MongoDB, and Bootstrap to create a task management web application. The platform provides users with an intuitive and responsive interface for efficient task management.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "Sprin boot",
        color: "yellow-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/DipakNagare/Todo_List",
  },
  {
    name: "DevSpace | Web App",
    description:
      "A web application built with Node.js, Express, Socket.io, and MongoDB for the backend, and HTML, CSS, JS, and Bootstrap for the frontend. Managed diverse database collections, such as users, posts, and follows, incorporating intricate operations for data integrity.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
      {
        name: "nodejs",
        color: "blue-text-gradient",
      },
      {
        name: "boostrap",
        color: "green-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/DipakNagare/DevSpace_Web_App",
  },
  {
    name: "Crypto Currency Tracker",
    description:
      "Created a real-time web app for monitoring cryptocurrency data, providing users with live prices, volumes, and changes. Implemented automatic 30-second updates, eliminating manual refreshes and enhancing the overall user experience.",
    tags: [
      {
        name: "Javascript",
        color: "blue-text-gradient",
      },
      {
        name: "HTML5",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",  
      },
      {
        name: "restapi",
        color: "blue-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/DipakNagare/Cripto-Tracker-Frontend-Project",
  },
];

export { services, technologies, experiences, testimonials, projects };
