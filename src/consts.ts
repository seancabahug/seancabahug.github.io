import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faGithub, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faComputerMouse, faMagnifyingGlass, faScroll } from "@fortawesome/free-solid-svg-icons";
import { Euler, Quaternion, Vector3 } from "three";

export enum SceneSection {
  TRANSITION,
  NAME,
  SKILLS,
  PROJECTS,
}

export type SceneControlValues = {
  section: SceneSection;
  camera: {
    position: Vector3;
    rotation: Quaternion;
  };
  dof: {
    target: Vector3;
    bokehScale: number;
  };
};

export const sectionValues = [
  {
    section: SceneSection.NAME,
    camera: {
      position: new Vector3(-1.05, 1.4, -0.891),
      rotation: new Quaternion().setFromEuler(new Euler(-1.45, -0.146, -1.149)),
    },
    dof: {
      target: new Vector3(-1.043, 0.703, -1.202),
      bokehScale: 10,
    },
  },
  {
    section: SceneSection.SKILLS,
    camera: {
      position: new Vector3(-1.374, 0.248, -2.371),
      rotation: new Quaternion().setFromEuler(
        new Euler(3.011, -0.5527, 3.0728)
      ),
    },
    dof: {
      target: new Vector3(-1.032, 0.325, -1.208),
      bokehScale: 6,
    },
  },
  null, // rest
  {
    section: SceneSection.PROJECTS,
    camera: {
      position: new Vector3(-1.927, 1.175, -2.167),
      rotation: new Quaternion().setFromEuler(
        new Euler(-3.132, -0.703, -3.135)
      ),
    },
    dof: {
      target: new Vector3(0.829, 1.231, -0.005),
      bokehScale: 1,
    },
  },
];

export const sectionTimings = [0, 0.2, 0.4, 0.6];

export type Project = {
  name: string;
  demoVideoPath: string;
  languages: string[];
  technologies: string[];
  description: string;
  repoUrl: string;
  awards?: {
    name: string;
    proofUrl: string;
  }[];
  relevantLinks?: {
    icon: IconDefinition;
    altText: string;
    link: string;
  }[];
};

export const projectShowcase: Project[] = [
  {
    name: "PRCPT",
    demoVideoPath: "/videos/prcpt.mp4",
    repoUrl: "https://github.com/seancabahug/prcpt-react",
    languages: ["HTML", "CSS", "JSX"],
    technologies: ["React", "Three.js", "Framer Motion"],
    description:
      "A creatively designed website for a fictitious glasses company.",
    relevantLinks: [
      {
        icon: faGithub,
        altText: "GitHub Repository",
        link: "https://github.com/seancabahug/prcpt-react",
      },
      {
        icon: faComputerMouse,
        altText: "Live Demo",
        link: "https://prcpt.netlify.app"
      }
    ],
  },
  {
    name: "NearLink",
    demoVideoPath: "/videos/nearlink.mp4",
    repoUrl: "https://github.com/seancabahug/NearLink",
    languages: ["HTML", "CSS", "JS", "C#"],
    technologies: ["Express.js", "WebSocket", "Virtual Peripherals"],
    description:
      "Makes playing in-person video games more accessible to those unable to afford more controllers by turning phones into gamepads.",
    awards: [
      {
        name: "Winner of the 2019 Congressional App Challenge in AZ-03",
        proofUrl: "https://www.congressionalappchallenge.us/19-az03/",
      },
    ],
    relevantLinks: [
      {
        icon: faGithub,
        altText: "GitHub Repository",
        link: "https://github.com/seancabahug/NearLink-source",
      },
      {
        icon: faYoutube,
        altText: "Video",
        link: "https://youtu.be/rozb-hcB_Ik"
      }
    ]
  },
  {
    name: "foodSeek",
    demoVideoPath: "/videos/foodseek.mp4",
    repoUrl: "https://github.com/seancabahug/foodseek",
    languages: ["HTML", "CSS", "JSX", "Python"],
    technologies: ["React", "Express.js", "MongoDB", "JWT"],
    description:
      "Full-stack web app developed in a week; made to help coordinate locations to provide food to the needy. Features React frontend, a REST API with user authentication, and interfacing with a MongoDB database.",
    awards: [
      {
        name: "2nd Place in Humanitarianism @ synHacks's 2020 Hack The World Hackathon",
        proofUrl:
          "https://hack-the-world-2020.devpost.com/submissions/search?utf8=%E2%9C%93&terms=foodSeek&sort="
      },
    ],
    relevantLinks: [
      {
        icon: faGithub,
        altText: "GitHub Repository",
        link: "https://github.com/seancabahug/foodseek"
      }
    ]
  },
];
