import {
  BiLogoHtml5,
  BiLogoJavascript,
  BiLogoPostgresql,
  BiLogoSpringBoot,
  BiLogoTailwindCss,
  BiLogoTypescript,
  BiLogoVuejs,
} from "react-icons/bi";
import {
  DiCss3,
  DiIllustrator,
  DiJava,
  DiPhotoshop,
  DiSass,
  DiWordpress,
} from "react-icons/di";
import { FaAws, FaNode } from "react-icons/fa";
import { RiBootstrapFill, RiReactjsLine } from "react-icons/ri";
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
        Technologies
      </motion.h2>
      <motion.p
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="text-center pb-20 text-slate-500 tracking-wide"
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
          variants={iconVariants(3)}
          className="p-2 flex flex-col justify-center"
        >
          <BiLogoVuejs className="text-6xl text-center text-[#aa9260]" />
          <span className="text-slate-500 text-center text-sm">Vue JS</span>
        </motion.div>

        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(2.5)}
          className="p-2 flex flex-col justify-center"
        >
          <BiLogoTypescript className="text-6xl text-center text-[#aa9260]" />
          <span className="text-slate-500 text-center text-sm">TypeScript</span>
        </motion.div>

        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(5)}
          className="p-2 flex flex-col justify-center"
        >
          <BiLogoJavascript className="text-6xl text-center text-[#aa9260]" />
          <span className="text-center text-sm text-slate-500">JavaScript</span>
        </motion.div>

        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(5)}
          className="p-2 flex flex-col justify-center"
        >
          <BiLogoHtml5 className="text-6xl text-center text-[#aa9260]" />
          <span className="text-center text-sm text-slate-500">HTML 5</span>
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(2)}
          className="p-2 flex flex-col justify-center"
        >
          <DiCss3 className="text-6xl text-center text-[#aa9260]" />
          <span className="text-center text-sm text-slate-500">CSS 3</span>
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
          <RiBootstrapFill className="text-6xl text-center text-[#aa9260]" />
          <span className="text-slate-500 text-sm text-center">Bootstrap</span>
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
          <BiLogoPostgresql className="text-6xl text-center text-[#aa9260]" />
          <span className="text-center text-sm text-slate-500">PostgreSQL</span>
        </motion.div>

        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(5)}
          className="p-2 flex flex-col justify-center"
        >
          <SiExpress className="text-6xl text-center text-[#aa9260]" />
          <span className="text-center text-sm text-slate-500">Express</span>
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(2)}
          className="p-2 flex flex-col justify-center"
        >
          <FaNode className="text-6xl text-center text-[#aa9260]" />
          <span className="text-center text-sm text-slate-500">Node JS</span>
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(6)}
          className="p-2 flex flex-col justify-center"
        >
          <FaAws className="text-6xl text-center text-[#aa9260]" />
          <span className="text-center text-sm text-slate-500">AWS</span>
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(4)}
          className="p-2 flex flex-col justify-center"
        >
          <BiLogoSpringBoot className="w-full text-6xl text-center text-[#aa9260] align-self-center" />
          <span className="text-center text-slate-500 text-sm">
            Spring Boot
          </span>
        </motion.div>

        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(2.5)}
          className="p-2 flex flex-col justify-center "
        >
          <DiJava className="text-6xl text-center text-[#aa9260]" />
          <span className="text-slate-500 text-center text-sm">Java</span>
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(3)}
          className="p-2 flex flex-col justify-center"
        >
          <DiWordpress className="text-6xl text-center text-[#aa9260]" />
          <span className="text-slate-500 text-center text-sm">WordPress</span>
        </motion.div>

        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(2.5)}
          className="p-2 flex flex-col justify-center text-sm"
        >
          <SiGit className="text-6xl text-center text-[#aa9260]" />
          <span className="text-slate-500 text-center text-sm">Git</span>
        </motion.div>

        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(5)}
          className="p-2 flex flex-col justify-center"
        >
          <SiWebpack className="text-6xl text-center text-[#aa9260]" />
          <span className="text-center text-sm text-slate-500">Webpack</span>
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
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(2)}
          className="p-2 flex flex-col justify-center"
        >
          <DiPhotoshop className="text-6xl text-center text-[#aa9260]" />
          <span className="text-center text-sm text-slate-500">Photoshop</span>
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(6)}
          className="p-2 flex flex-col justify-center"
        >
          <DiIllustrator className="text-6xl text-center text-[#aa9260]" />
          <span className="text-center text-sm text-slate-500">
            Illustrator
          </span>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
