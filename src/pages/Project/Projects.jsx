import { useEffect, useRef, useState } from "react";
import "./project.scss";
import { motion, useScroll, useTransform } from "framer-motion";
import { projects } from '../../constants';

const desktopQuery = window.matchMedia('(min-width: 1024px)');

const Single = ({ item, index }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const [transform, setTransform] = useState(() => desktopQuery.matches)

  useEffect(() => {
    const onChange = (e) => setTransform(e.matches)
    desktopQuery.addEventListener("change", onChange)
    return () => desktopQuery.removeEventListener("change", onChange)
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
            <img src={item.img} alt={`${item.title} screenshot`} loading="lazy" />
          </div>
          <motion.div className={transform ? 'textContainer' : 'noTransFormText'} style={transform ? { y } : {}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <div className='flex justify-between items-center'>
              {
                item.gitUrl.length ?
                  <a href={item.gitUrl} target='_blank' rel='noopener noreferrer' className='btn inline-block'>
                    Code
                  </a>
                  : <></>
              }
              {
                item.liveUrl.length ?
                  <a href={item.liveUrl} target='_blank' rel='noopener noreferrer' className='btn inline-block'>
                    Demo
                  </a> : <></>
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
