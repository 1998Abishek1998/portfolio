import "./hero.scss";
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 15,
    },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>Abishek Timsina
          </motion.h2>
          <motion.h1 variants={textVariants}>
            Full-Stack <br /> Web Developer
          </motion.h1>
          <motion.div variants={textVariants}>
            <motion.div variants={textVariants}>
              A JavaScript enthusiast with a passion for crafting dynamic and interactive web experiences. Equipped with expertise in a variety of JavaScript frameworks, libraries, and tools.
            </motion.div>
          </motion.div>
          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src="/scroll.png"
            alt=""
          />
        </motion.div>
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Just JS
      </motion.div>
      <div className="imageContainer">
        <img src="/abishek_profile.png" alt="" />
      </div>
    </div>
  );
};

export default Hero;
