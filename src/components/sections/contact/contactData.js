import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faLinkedin,
  faAngellist,
  faGithub,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons"

export const ContactData = [
  {
    name: "GitHub",
    icon: <FontAwesomeIcon icon={faGithub} />,
    url: "https://www.github.com/bmumz",
  },
  {
    name: "LinkedIn",
    icon: <FontAwesomeIcon icon={faLinkedin} />,
    url: "https://www.linkedin.com/in/brandimummery",
  },
  {
    name: "AngelList",
    icon: <FontAwesomeIcon icon={faAngellist} />,
    url: "https://angel.co/u/brandi-mummery",
  },
  {
    name: "Twitter",
    icon: <FontAwesomeIcon icon={faTwitterSquare} />,
    url: "https://www.twitter.com/brandiCodes",
  },
]
