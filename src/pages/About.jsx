import {
  Popover,
  PopoverHandler,
  PopoverContent,
  Button,
  Tooltip
} from "@material-tailwind/react";

import { skills } from "../constants";


const printName = (str) => str.length > 8 ? str = str.slice(0, 5) + "..." : str = str.slice(0, 8)

const PopControl = (skill) =>
  <div className="pop-container" key={skill.name}>
    <Popover
      animate={{
        mount: { scale: 1, y: 0 },
        unmount: { scale: 0, y: 25 },
      }}>
      <PopoverHandler>
        <div className='block-container w-20 h-20'>
          <div className='btn-back rounded-xl' />
          <div className='btn-front rounded-xl flex justify-center items-center'>
            <img
              src={skill.imageUrl}
              alt={skill.name}
              className='w-1/2 h-1/2 object-contain'
            />
          </div>
        </div>
      </PopoverHandler>
      <PopoverContent>
        <div className='bg-black-500 z-10 border-gray-300 p-2'>
          <span className='font-bold blue-gradient_text'>{skill.name}</span> <br />
          - <span className='text-gray-500 font-bold'>{skill.type}</span>
          <hr className="my-2 border-gray-300 " />
          <p>{skill.myExperience}</p>
        </div>
      </PopoverContent>
    </Popover>
    <span className='text-blue-300 pb-4 font-bold text-xl'>{printName(skill.name)}</span>
  </div>


const About = () => {
  return (
    <section className='max-container' id="about">
      <h1 className='head-text'>
        <span className='blue-gradient_text font-semibold drop-shadow'>
          About
        </span>
      </h1>

      <div className='mt-5 flex flex-col gap-3 text-gray-300'>
        <p>
          With proficiency in popular frameworks like React, Vue, Nuxt and Next, I excel at architecting intuitive user interfaces and optimizing performance for seamless user interactions. Leveraging tools such as Webpack, Babel, and ESLint, I ensure code quality, maintainability, and compatibility across different environments.
          <br />
          <br />
          Additionally, my familiarity with Node.js enables me to develop full-stack applications, empowering me to seamlessly integrate front-end and back-end functionalities. Whether it's RESTful APIs, real-time communication with WebSocket, or serverless architectures with AWS Lambda, I thrive in creating cohesive solutions that deliver value to users.
        </p>
      </div>

      <div className='py-16 flex flex-col'>
        <h3 className='subhead-text'>My Skills</h3>
        <div className='mt-16 flex flex-wrap gap-12'>
          {skills.map((skill) => PopControl(skill))}
        </div>
      </div>

    </section>
  );
};

export default About;
