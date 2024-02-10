import { useEffect, useRef, useState } from "react";
import "./project.scss";
import { motion, useScroll, useTransform } from "framer-motion";
import { projects } from '../../constants';
import { Link } from 'react-router-dom';

const Single = ({ item, index }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const [transform, setTransform] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth < 1024) setTransform(false)
      else setTransform(true)
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [])

  const y = useTransform(scrollYProgress, [0, 1], [-200, 200]);

  return (
    <section
      style={{
        height: '45vh',
        overflow: 'hidden'
      }}
    >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className={transform ? 'textContainer' : 'noTransFormText'} style={transform ? { y } : {}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <div className='flex justify-between items-center'>
              {
                item.gitUrl.length &&
                <Link to={item.gitUrl}>
                  <button className='btn'>Source Code</button>
                </Link>
              }
              {
                item.liveUrl.length &&
                <Link to={item.liveUrl}>
                  <button className='bg-blue-500'>Live Demo</button>
                </Link>
              }
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  const ref = useRef();

  return (
    <div className="max-container-project portfolio" ref={ref} id="project">
      <div className="progress">
        <h1 className='flex items-center justify-center m-3 head-text'>
          My{" "}
          <span className='blue-gradient_text drop-shadow font-semibold'>
            Projects
          </span>
        </h1>
      </div>
      {projects.map((item, index) => (
        <Single item={item} key={item.id} index={index} />
      ))}
    </div>
  );
};

export default Projects;
