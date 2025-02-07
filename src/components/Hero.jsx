import { motion } from "framer-motion";
import heroImg from "../assets/hero.jpg";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 p-24 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className=" pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-6xl"
            >
              Nikhil Goswami
            </motion.h1>

            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className=" text-yellow-400  text-3xl tracking-tight"
            >
              Frontend Developer
            </motion.span>

            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-3 max-w-xl py-6 font-light tracking-tight"
            >
              Hi, I’m Nikhil, a passionate Frontend Developer specializing in
              building modern, responsive, and high-performance web
              applications. I thrive on crafting user-friendly interfaces with
              React.js, JavaScript, and Tailwind CSS to deliver seamless digital
              experiences. With a strong foundation in UI/UX principles, I focus
              on writing clean, efficient, and scalable code to create visually
              appealing and interactive applications. I enjoy solving complex
              problems, optimizing performance, and staying updated with the
              latest trends in frontend development.
            </motion.p>
          </div>
        </div>

        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              src={heroImg}
              width={300}
              height={300}
              alt=""
              className="rounded-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
