import { nuxt, vue, nest, aws, sql, mavorion, upaya } from "../assets/images";
import { trelloclone, covid19, beachresort, winklemedia } from '../assets/images/projects';
import {
  css,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  motion,
  mui,
  nextjs,
  nodejs,
  react,
  redux,
  sass,
  tailwindcss,
  typescript
} from "../assets/icons";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "project",
    title: "Project",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const skills = [
  {
    imageUrl: nodejs,
    name: "Node.Js",
    type: "Backend",
  },
  {
    imageUrl: nest,
    name: "Nest.Js",
    type: "Backend",
  },
  {
    imageUrl: express,
    name: "Express.Js",
    type: "Backend",
  },
  {
    imageUrl: react,
    name: "React.Js",
    type: "Frontend",
  },
  {
    imageUrl: vue,
    name: "Vue.Js",
    type: "Frontend",
  },
  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
  },
  {
    imageUrl: nuxt,
    name: "Nuxt.Js",
    type: "Frontend",
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },
  {
    imageUrl: sql,
    name: "My SQL",
    type: "Database",
  },
  {
    imageUrl: aws,
    name: "Amazon Web Services",
    type: "Database",
  },
  {
    imageUrl: redux,
    name: "Redux",
    type: "State Management",
  },
  {
    imageUrl: sass,
    name: "Sass",
    type: "Frontend",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: motion,
    name: "Motion",
    type: "Animation",
  },
  {
    imageUrl: mui,
    name: "Material-UI",
    type: "Frontend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
];

export const experiences = [
  {
    title: "InternShip",
    company_name: "Mavorion",
    icon: mavorion,
    iconBg: "#accbe1",
    date: "Aug 2021 - Dec 2021",
    points: [
      "Learned using and maintaining web applications using React.js.",
      "Collaborating with teams and learned from senior developers about work environments and on creation high-quality products.",
      "Participating in code reviews and gained constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Mavorion",
    icon: mavorion,
    iconBg: "#fbc3bc",
    date: "Jan 2022 - Dec 2022",
    points: [
      "Developing and maintaining web applications using React.js, Antd Design and Redux-Saga.",
      "Took lead for 3 months when there was a time to deploy an logistic app.",
      "Gained intrest in server side development and started knowing about node js.",
      "Learned AWS architecture and its services like S3, EC2, Cloudwatch and CI/CD",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
  {
    title: "Full Stack developer",
    company_name: "Upaya",
    icon: upaya,
    iconBg: "#b7e4c7",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js, Express.Js and Nest.Js .",
      "Took a part in writing server side program for logistics Client App.",
      "Collaborating with cross-functional teams including designers, product managers, operations and other developers to create high-quality products.",
      "Re-Writing server side program for driver application and driver matching system.",
      "Used cloud services like Textract, Logger, Buckets, Virtual Gateways and many new web technologies like docker, schedulling, Polling, Caching.",
      "Gained intrest in kafka, kubernetes, writing yaml, deploying and scaling applications.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

export const socialLinks = [
  {
    name: 'GitHub',
    iconUrl: github,
    link: 'https://github.com/1998Abishek1998',
  },
  {
    name: 'LinkedIn',
    iconUrl: linkedin,
    link: 'https://www.linkedin.com/in/abishek-timsina-795a89220/',
  }
];


export const projects = [
  {
    id: 1,
    title: "React - Beach Resort",
    img: beachresort,
    desc: "This is the first app that I created using react. This was my early starting days with react and its environment. I used basics of react to create frontend only web app.",
    gitUrl: "https://github.com/1998Abishek1998/react-beach-resort-room",
    liveUrl: "https://react-beach-resort-room-3lni.vercel.app/",
  },
  {
    id: 2,
    title: "Nuxt - Trello Clone",
    img: trelloclone,
    desc: "This is the recent app that I created using Nuxt Js. I learned vue 3 back on 2021, but had not used it since. Hearing about Nuxt I wanted to give it a try.",
    gitUrl: "https://github.com/1998Abishek1998/Trello-Clone",
    liveUrl: "https://trello-clone-1.vercel.app/"
  },
  {
    id: 3,
    title: "MERN - WinkleMedia",
    img: winklemedia,
    desc: "This is a final year project I created on 2022. This application is like a low version discord. This project helped me to get credits without deploying it",
    gitUrl: "https://github.com/1998Abishek1998/Final",
    liveUrl: ""
  },
  {
    id: 4,
    title: "React - Covid 19 Info",
    img: covid19,
    desc: "I created this website when I had datas about the covid from an external app called dieases.sh. If there is you should see the payload but if not the designs are pretty much empty.",
    gitUrl: "https://github.com/1998Abishek1998/covid-19-info",
    liveUrl: ""
  },
  {
    id: 5,
    title: "MERN - Social App",
    img: "https://images.pexels.com/photos/6894528/pexels-photo-6894528.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    desc: "This is a fullstack app created using MERN stack with graphQL. I was entruiged when I learned about graphQL so I tried to use it in this application.",
    gitUrl: "https://github.com/1998Abishek1998/shoppingArea/tree/main",
    liveUrl: ""
  },
];
