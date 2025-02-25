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
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  ecom,
  chatapp,
  careerconnect,
  aws,
  postman,
  kubernetes,
  mysql,
  jenkins
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
    id: "resume",
    title: "Download Resume"
  }
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "DevOps",
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
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
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
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  // {
  //   name: "git",
  //   icon: git,
  // },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "aws",
    icon: aws,
  },
  {
    name: "postman",
    icon: postman,
  },
  {
    name: "kubernetes",
    icon: kubernetes,
  },
  {
    name: "mysql",
    icon: mysql,
  },
  // {
  //   name: "jenkins",
  //   icon: jenkins,
  // },
];

const experiences = [
  {
    title: "Engineer Intern",
    company_name: "Sify Technologies Limited",
    icon: shopify,
    iconBg: "#383E56",
    date: "February 2023 – May 2023",
    points: [
      "Developed interactive web applications using the MERN stack, boosting user engagement and page load times by 30%.",
      "Optimized SQL queries for CRUD operations, enhancing database response time by 35% and improving API efficiency.",
      "Automated infrastructure tasks using Python, reducing manual workload by 50% and improving system uptime by 20%.",
    ],
  },
  {
    title: "DevOps and API Automation Engineer Trainee",
    company_name: "Sify Technologies Limited",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jul 2023- Sep 2023",
    points: [
      "Developed robust CI/CD pipelines, saving 5+ hours per week in manual deployment efforts.",
      "Enhanced DevSecOps by integrating security checks, leading to 20% faster software deployment cycles.",
      "Implemented AppDynamics for full-stack observability, accelerating bottleneck identification and resolution by 2x.",
      "Deployed the CFX application using Kubernetes, ensuring 99.9% uptime, high availability, auto-scaling, and seamless container orchestration.",
    ],
  },
  {
    title: "API Automation Engineer",
    company_name: "Sify Technologies Limited",
    icon: shopify ,
    iconBg: "#383E56",
    date: "Jul 2023- Present",
    points: [
      "Developed and maintained automated test scripts using Java, Python, and JavaScript, achieving 98% test case accuracy.",
      "Designed and implemented API testing frameworks using Rest Assured, reducing test execution time by 35%.",
      "Integrated API tests into CI/CD pipelines, cutting deployment time by 40% and minimizing manual testing efforts.",
      "Automated dynamic data input from Excel, enhancing debugging and error tracking by 40%.",
      "Created data analysis scripts, reducing manual data processing by 30% through Excel automation.",
    ],
  },
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
    name: "Real-Time Chat App",
    description:
      "A feature-rich chat application supporting both private and group conversations, real-time messaging, user authentication, and media file sharing. Built with a scalable architecture, it ensures seamless communication using WebSockets.",
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
        name: "nodejs",
        color: "pink-text-gradient",
      },
      {
        name: "express",
        color: "blue-text-gradient",
      },
      {
        name: "socket.io",
        color: "green-text-gradient",
      },
      {
        name: "JWT Authentication",
        color: "pink-text-gradient",
      },
      {
        name: "RESTful API",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      }
    ],
    image: chatapp,
    source_code_link: "https://github.com/Rubanrk004/Chat-Application",
  },
  {
    name: "E-Commerce Platform",
    description:
      "A fully functional e-commerce platform with product listings, secure authentication, integrated payment gateway, and an admin dashboard for managing products and orders. Designed to provide a smooth shopping experience for users and efficient order management for administrators.",
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
        name: "nodejs",
        color: "pink-text-gradient",
      },
      {
        name: "express",
        color: "blue-text-gradient",
      },
      {
        name: "JWT Authentication",
        color: "pink-text-gradient",
      },
      {
        name: "RESTful API",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
    ],
    image: ecom,
    source_code_link: "https://github.com/Rubanrk004/E-Commerce-Platform",
  },
  {
    name: "Career Connect Platform",
    description:
      "A job search and recruitment platform enabling companies to post job listings while allowing candidates to apply, upload resumes, and track applications. Features include role-based authentication and a streamlined hiring workflow.",
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
        name: "nodejs",
        color: "pink-text-gradient",
      },
      {
        name: "express",
        color: "blue-text-gradient",
      },
      {
        name: "JWT Authentication",
        color: "pink-text-gradient",
      },
      {
        name: "RESTful API",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
    ],
    image: careerconnect,
    source_code_link: "https://github.com/Rubanrk004/Career-Connect-Platform",
  },
];

export { services, technologies, experiences, testimonials, projects };
