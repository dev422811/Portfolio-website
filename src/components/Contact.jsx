import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  return (
    <div className="xl:mt-12 flex xl:flex-row flex-col gap-10 overflow-hidden">
      {/* Left section - Contact Info */}
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact Me</h3>

        <p className="mt-4 text-white text-[17px] max-w-3xl leading-[30px]">
          I am currently seeking entry-level opportunities to start my tech career. As of May 2025, I've completed my Master's and developed projects showcasing my skills. I'm open to joining supportive, growth-oriented organizations. Let's connect if you're looking for a dedicated team member!
        </p>

        <div className="mt-6 flex flex-col gap-4 text-white text-lg">
          <a
            href="/Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-400 hover:underline"
          >
            📄 View My Resume
          </a>
          <a
            href="mailto:your-email@gmail.com"
            className="text-pink-400 hover:underline"
          >
            📧 Email Me
          </a>
          <a
            href="https://www.linkedin.com/in/p-charan-satya-dev-2b5225196/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            💻 LinkedIn
          </a>
          <a
            href="https://github.com/dev422811"
            target="_blank"
            rel="noopener noreferrer"
            className="text-grey-400 hover:underline"
          >
            🐱 GitHub Profile
          </a>
        </div>
      </motion.div>

      {/* Right section - 3D Earth */}
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 h-[350px] md:h-[500px] xl:h-[550px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
