import { useRef } from "react";
import "./project.scss";
import { motion, useScroll, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "React Commerce",
    img: "https://images.pexels.com/photos/18073372/pexels-photo-18073372/free-photo-of-young-man-sitting-in-a-car-on-a-night-street.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
  },
  {
    id: 2,
    title: "Next.js Blog",
    img: "https://images.pexels.com/photos/18023772/pexels-photo-18023772/free-photo-of-close-up-of-a-person-holding-a-wristwatch.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
  },
  {
    id: 3,
    title: "Vanilla JS App",
    img: "https://images.pexels.com/photos/6894528/pexels-photo-6894528.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
  },
  {
    id: 4,
    title: "Music App",
    img: "https://images.pexels.com/photos/18540208/pexels-photo-18540208/free-photo-of-wood-landscape-water-hill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
  },
];

const Single = ({ item, index }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-100, 200]);

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
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>See Demo</button>
          </motion.div>
        </div>
        {/* {
          index % 2 === 0 ?
            <div className="wrapper">
              <div className="imageContainer" ref={ref}>
                <img src={item.img} alt="" />
              </div>
              <motion.div className="textContainer" style={{ y }}>
                <h2>{item.title}</h2>
                <p>{item.desc}</p>
                <button>See Demo</button>
              </motion.div>
            </div>
            :
            <div className="wrapper">
              <motion.div className="textContainer" style={{ y }}>
                <h2>{item.title}</h2>
                <p>{item.desc}</p>
                <button>See Demo</button>
              </motion.div>
              <div className="imageContainer" ref={ref}>
                <img src={item.img} alt="" />
              </div>
            </div>
        } */}
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
      {items.map((item, index) => (
        <Single item={item} key={item.id} index={index} />
      ))}
    </div>
  );
};

export default Projects;