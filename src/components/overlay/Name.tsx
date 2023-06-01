import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import "./Name.css";
import { AnimatePresence, motion, Variants } from "framer-motion";

type Props = {
  visible: boolean;
};

const container = {
  hidden: {
    transition: {
      staggerChildren: 0.05,
    },
  },
  show: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const fadeUpToOpacity = (i: number): Variants => {
  return {
    hidden: {
      opacity: 0,
      translateY: "0.3rem",
    },
    show: {
      opacity: i,
      translateY: 0,
    },
  };
};

const links = {
  hidden: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  show: {
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.1,
    },
  },
};

const Name = ({ visible }: Props) => {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          exit="hidden"
        >
          <motion.h1 variants={fadeUpToOpacity(1)}>full-stack</motion.h1>
          <motion.h1 variants={fadeUpToOpacity(1)}>webdev</motion.h1>
          <motion.div variants={links} className="links">
            {[
              {
                icon: faGithub,
                link: "https://github.com/seancabahug",
                title: "GitHub",
              },
              {
                icon: faLinkedin,
                link: "https://www.linkedin.com/in/sean-cabahug/",
                title: "LinkedIn",
              },
              {
                icon: faFile,
                link: "https://docs.google.com/document/d/11lO6KCO4DxSrhtlNPkCnh7a0BBAKPWG0/edit?usp=sharing&ouid=100923833208194895081&rtpof=true&sd=true",
                title: "Resume",
              },
            ].map((i) => (
              <motion.a
                key={i.link}
                href={i.link}
                title={i.title}
                target="_blank"
                variants={fadeUpToOpacity(0.7)}
                whileHover={{ scale: 1.1 }}
              >
                <FontAwesomeIcon icon={i.icon} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Name;
