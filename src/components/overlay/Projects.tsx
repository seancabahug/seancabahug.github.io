import { AnimatePresence, motion, Variants } from "framer-motion";
import { projectShowcase } from "../../consts";
import "./Projects.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {
  currentProjectId: number;
};

const container: Variants = {
  hidden: {
    transition: {
      staggerChildren: 0.05,
    },
  },
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
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

const Projects = ({ currentProjectId }: Props) => {
  let project = projectShowcase[currentProjectId];

  return (
    <AnimatePresence>
      {currentProjectId > -1 && (
        <motion.div
          key={currentProjectId}
          style={{
            transform: "translateY(-50%)",
            position: "absolute",
            width: "1800px",
            pointerEvents: "none"
          }}
          variants={container}
          initial="hidden"
          animate="show"
          exit="hidden"
        >
          <motion.h1 className="name" variants={fadeUpToOpacity(1)}>
            {project.name}
          </motion.h1>
          <motion.p className="languages" variants={fadeUpToOpacity(1)}>
            {project.languages.join("  ·  ")}
          </motion.p>
          <motion.p className="technologies" variants={fadeUpToOpacity(1)}>
            {project.technologies.join(" · ")}
          </motion.p>
          {project.awards?.map((award) => (
            <motion.p className="awards" variants={fadeUpToOpacity(1)}>
              🏅 <a href={award.proofUrl} target="_blank">{award.name}</a>
            </motion.p>
          ))}
          <motion.p className="description" variants={fadeUpToOpacity(1)}>
            {project.description}
          </motion.p>
          <motion.div variants={links} className="projectLinks">
            {project.relevantLinks?.map((i) => (
              <motion.a
                key={i.link}
                href={i.link}
                title={i.altText}
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

export default Projects;
