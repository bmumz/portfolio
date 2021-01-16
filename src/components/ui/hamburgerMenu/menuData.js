import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faDesktop,
  faEnvelopeOpen,
  faHome,
} from "@fortawesome/free-solid-svg-icons"
import { faAddressCard, faNewspaper } from "@fortawesome/free-regular-svg-icons"

export const MenuData = [
  {
    title: "Home",
    path: "/",
    icon: <FontAwesomeIcon icon={faHome} />,
  },
  {
    title: "About",
    path: "/#about",
    icon: <FontAwesomeIcon icon={faAddressCard} />,
  },
  {
    title: "Projects",
    path: "/#projects",
    icon: <FontAwesomeIcon icon={faDesktop} />,
  },
  {
    title: "Contact",
    path: "/#contact",
    icon: <FontAwesomeIcon icon={faEnvelopeOpen} />,
  },
  {
    title: "Blog",
    path: "/blog",
    icon: <FontAwesomeIcon icon={faNewspaper} />,
  },
]
