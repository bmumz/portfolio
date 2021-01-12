import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faDesktop,
  faDatabase,
  faServer,
  faCameraRetro,
  faCat,
  faPizzaSlice,
  faMountain,
  faDiceSix,
} from "@fortawesome/free-solid-svg-icons"
import { faGrinSquintTears } from "@fortawesome/free-regular-svg-icons"
import {
  faNode,
  faJsSquare,
  faReact,
  faGithubAlt,
  faGitAlt,
  faSass,
} from "@fortawesome/free-brands-svg-icons"

export const AboutList = [
  {
    item: "JavaScript",
    icon: <FontAwesomeIcon icon={faJsSquare} className="about__icon" />,
  },
  {
    item: "React",
    icon: <FontAwesomeIcon icon={faReact} className="about__icon" />,
  },
  {
    item: "SASS",
    icon: <FontAwesomeIcon icon={faSass} className="about__icon" />,
  },
  {
    item: "Node.js",
    icon: <FontAwesomeIcon icon={faNode} className="about__icon" />,
  },
  {
    item: "Express",
    icon: <FontAwesomeIcon icon={faServer} className="about__icon" />,
  },
  {
    item: "PostgreSQL",
    icon: <FontAwesomeIcon icon={faDatabase} className="about__icon" />,
  },
  {
    item: "Github",
    icon: <FontAwesomeIcon icon={faGithubAlt} className="about__icon" />,
  },
  {
    item: "Git",
    icon: <FontAwesomeIcon icon={faGitAlt} className="about__icon" />,
  },
  {
    item: "Adobe Photoshop",
    icon: <FontAwesomeIcon icon={faCameraRetro} className="about__icon" />,
  },
  {
    item: "Adobe XD",
    icon: <FontAwesomeIcon icon={faDesktop} className="about__icon" />,
  },
  {
    item: "Dad Jokes",
    icon: <FontAwesomeIcon icon={faGrinSquintTears} className="about__icon" />,
  },
  {
    item: "Cat Whispering",
    icon: <FontAwesomeIcon icon={faCat} className="about__icon" />,
  },
  {
    item: "Cooking & Baking",
    icon: <FontAwesomeIcon icon={faPizzaSlice} className="about__icon" />,
  },
  {
    item: "Hiking",
    icon: <FontAwesomeIcon icon={faMountain} className="about__icon" />,
  },
  {
    item: "Board Games",
    icon: <FontAwesomeIcon icon={faDiceSix} className="about__icon" />,
  },
]
