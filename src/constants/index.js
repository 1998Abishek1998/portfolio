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
    myExperience: "I started my node js journey from 2020. This is when my coding journey began, from the period of lockdown. I was intrested in javasscript and wanted to build applications with it."
  },
  {
    imageUrl: express,
    name: "Express.Js",
    type: "Backend (Node Framweork)",
    myExperience: "I started my express js journey from 2020. This is when my coding journey began, from the period of lockdown. I made server with node and express combined."
  },
  {
    imageUrl: react,
    name: "React.Js",
    type: "Frontend (Js Library)",
    myExperience: "I started my react js journey from 2020. This is when my coding journey began, from the period of lockdown. I made SPA with react for companies I worked with and for some personal projects. I have created total 8-9 projects with React."
  },
  {
    imageUrl: redux,
    name: "Redux",
    type: "Frontend (State Management)",
    myExperience: "I started my redux journey from 2020. This is when my coding journey began, from the period of lockdown. I use redux for handling states of my all react applications."
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
    myExperience: "I started my git journey from 2020. This is when my coding journey began, from the period of lockdown. I used it only for all of my projects."
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Programming Language",
    myExperience: "I started my typescript journey from 2022. I statred using TS since I joined Upaya. I used it only for all of my projects since then, eliminating js completely."
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
    myExperience: "I started my HTML journey from 2020. This is when my coding journey began, from the period of lockdown. Without this none of my frontend framework knowledge and experience would be gained."
  },
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend (UI Kit)",
    myExperience: "I started my CSS journey from 2020. This is when my coding journey began, from the period of lockdown. Without this none of my design and styling knowledge and experience would be gained."
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Programming Language",
    myExperience: "I started my Javascript journey from 2020. This is when my coding journey began, from the period of lockdown. Without this none of my coding knowledge and experience would be gained."
  },
  {
    imageUrl: nest,
    name: "Nest.Js",
    type: "Backend (Express Framework)",
    myExperience: "I started my nest js journey from 2023. I sstarted learning this when I needed to make a service oriented application for my company. We have created 4 services with Nest Js."
  },
  {
    imageUrl: vue,
    name: "Vue.Js",
    type: "Frontend (JS Framework)",
    myExperience: "I started my Vue js journey from 2022. I learned and worked on vue when my team had no react projects ongoing. I used Vue 3 more but some of the project included Vue 2 as well."
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
    myExperience: "I started my MongoDb journey from 2021. This was my first experience with NO SQL or non relational databases. I created 7-8 applications with it."
  },
  {
    imageUrl: sql,
    name: "My SQL",
    type: "Database",
    myExperience: "I started my My SQL journey from 2023. I used it since joining Upaya and its so easy to work with SQL Databases. In upaya we mainly use SQL db as our main database."
  },
  {
    imageUrl: aws,
    name: "Amazon Web Services",
    type: "Cloud Service",
    myExperience: "I started my AWS journey from 2022. I have used many services like, EC2 S3, CloudWatch, APIGateway, Textract, VPCs, ECS ... and many more."
  },
  {
    imageUrl: sass,
    name: "Sass",
    type: "Frontend (UI Kit)",
    myExperience: "I started my Sass journey from 2020. This is when my coding journey began, from the period of lockdown. I used it only for 3 of my projects."
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend (UI Kit)",
    myExperience: "I started my tailwind journey from 2023. I started using it after joining Upaya. I used it only for 3 of my projects."
  },
  {
    imageUrl: mui,
    name: "Material-UI",
    type: "Frontend (UI Kit)",
    myExperience: "I started my material UI journey from 2021. I used it only for 2 of my projects. I use this frequently with And Design. But after learning Tailwind my use of material UI has been comparatively low."
  },
  {
    imageUrl: motion,
    name: "Motion UI",
    type: "Animation",
    myExperience: "I started my motion UI journey from 2024. I used it only for one of my projects."
  },
  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend (React Framework)",
    myExperience: "I started my Next js journey from 2023. I learned Next Js when I was free from any extra projects and wanted to explore frontend world."
  },
  {
    imageUrl: nuxt,
    name: "Nuxt.Js",
    type: "Frontend (Vue Framework)",
    myExperience: "I started my Nuxt js journey from 2024. I learned Nuxt Js when I was free from any extra projects and wanted to explore frontend world."
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
      "Internship and training of, MIS system and Logistic System.",
      "I already had knowledge of the MERN stack application before joining. So I started to  implement my knowledge of React.",
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
      "Took the lead for a quarter of a year when there was a time to deploy a Logistic app.",
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
      "Developing and maintaining web applications using React.js, Express.Js, Nest.Js and Hono.Js .",
      "Wrote a server side program for logistics Client App, Driver App, Billing system, Report Generation, Driver matching Engine and Sales Analysis.",
      "Implemented Cron jobs for billing system, and data migrations.",
      "Implemented wallet payment methods in the system with Esewa and Khalti.",
      "Re-writing the Database schemas and changing data structure for fast and smooth client side experience.",
      "Used cloud services like Textract, Logger, Buckets, Virtual Gateways and many new web technologies like docker, scheduling, Polling, Caching.",
      "Gained intrest in kafka, kubernetes, writing yaml, deploying and scaling applications.",
      "Collaborating with cross-functional teams including designers, product managers, operations and other developers to create high-quality products.",
      "Participating in code reviews , providing constructive feedback and helping other developers.",
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
