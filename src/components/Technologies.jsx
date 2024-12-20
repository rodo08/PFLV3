import {
  BiLogoJavascript,
  BiLogoTailwindCss,
  BiLogoTypescript,
} from "react-icons/bi";
import { DiSass } from "react-icons/di";
import { FaNode } from "react-icons/fa";
import { RiReactjsLine } from "react-icons/ri";
import {
  SiExpress,
  SiGit,
  SiMongodb,
  SiMysql,
  SiWebpack,
} from "react-icons/si";

import { motion } from "framer-motion";

import { PiFigmaLogoThin } from "react-icons/pi";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div className="pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="mt-20 mb-8 text-center text-4xl"
      >
        Core Technologies
      </motion.h2>
      <motion.p
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="text-center pb-20 text-stone-400 tracking-wide"
      >
        Extensive experience in frontend and backend technologies, leveraging
        frameworks, libraries, databases, and tools to deliver efficient,
        scalable and innovative solutions.
      </motion.p>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(2.5)}
          className="p-2 flex flex-col justify-center"
        >
          <RiReactjsLine className="text-6xl text-center text-[#aa9260]" />
          <span className="text-slate-500 text-center text-sm">React JS</span>
        </motion.div>

        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(2)}
          className="p-2 flex flex-col justify-center"
        >
          <BiLogoTypescript className="text-6xl text-center text-[#aa9260]" />
          <span className="text-slate-500 text-center text-sm">TypeScript</span>
        </motion.div>

        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(3.5)}
          className="p-2 flex flex-col justify-center"
        >
          <BiLogoJavascript className="text-6xl text-center text-[#aa9260]" />
          <span className="text-center text-sm text-slate-500">JavaScript</span>
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(6)}
          className="p-2 flex flex-col justify-center"
        >
          <DiSass className="text-6xl text-center text-[#aa9260]" />
          <span className="text-center text-sm text-slate-500">Sass</span>
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(4)}
          className="p-2"
        >
          <BiLogoTailwindCss className="w-full text-6xl text-center text-[#aa9260] align-self-center" />
          <span className="text-center text-sm text-slate-500">
            Tailwind CSS
          </span>
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(2.5)}
          className="p-2 flex flex-col justify-center"
        >
          <SiExpress className="text-6xl text-center text-[#aa9260]" />
          <span className="text-center text-sm text-slate-500">Express</span>
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(3)}
          className="p-2 flex flex-col justify-center"
        >
          <SiMongodb className="text-6xl text-center text-[#aa9260]" />
          <span className="text-slate-500 text-sm text-center">MongoDB</span>
        </motion.div>

        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(2.5)}
          className="p-2 flex flex-col justify-center"
        >
          <SiMysql className="text-6xl text-center text-[#aa9260]" />
          <span className="text-slate-500 text-sm text-center">MySql</span>
        </motion.div>

        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(5)}
          className="p-2 flex flex-col justify-center"
        >
          <FaNode className="text-6xl text-center text-[#aa9260]" />
          <span className="text-center text-sm text-slate-500">Node JS</span>
        </motion.div>

        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(2.5)}
          className="p-2 flex flex-col justify-center text-sm"
        >
          <SiGit className="text-6xl text-center text-[#aa9260]" />
          <span className="text-slate-500 text-center text-sm pt-2">Git</span>
        </motion.div>

        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(5)}
          className="p-2 flex flex-col justify-center"
        >
          <SiWebpack className="text-6xl text-center text-[#aa9260]" />
          <span className="text-center text-sm text-slate-500 pt-2">
            Webpack
          </span>
        </motion.div>

        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(5)}
          className="p-2 flex flex-col justify-center"
        >
          <PiFigmaLogoThin className="text-6xl text-center text-[#aa9260]" />
          <span className="text-center text-slate-500">Figma</span>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
