import logo from "../assets/Ng.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";
import { FaHackerrank } from "react-icons/fa";
import { motion } from "framer-motion";

import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className=" mg-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center ">
        <img className=" w-20" src={logo} alt="Ng" />
      </div>

      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 100 }}
        transition={{ duration: 0.5 }}
        className="m-8 flex items-center justify-center gap-4 text-2xl "
      >
        <a href="https://github.com/g1Nikhil?tab=repositories" target="_blank">
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/nikhil-goswami-059b9418a/"
          target="_blank"
        >
          <FaLinkedin />
        </a>
        <a href="https://leetcode.com/u/Nikhil1101/" target="_blank">
          <SiLeetcode />
        </a>

        <a
          href="https://nikhilgoswami891.hackerresume.io/ae5a3151-1221-4179-8781-d425d4612856"
          target="_blank"
        >
          <FaHackerrank />
        </a>

        <a href="">
          <FaXTwitter />
        </a>
        <a href="">
          <FaInstagram />
        </a>
      </motion.div>
    </nav>
  );
};

export default Navbar;
