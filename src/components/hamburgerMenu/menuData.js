import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faDesktop, faEnvelopeOpen } from "@fortawesome/free-solid-svg-icons"
import { faAddressCard, faNewspaper } from "@fortawesome/free-regular-svg-icons"

export const MenuData = [
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
    title: "Blog",
    path: "/blog",
    icon: <FontAwesomeIcon icon={faNewspaper} />,
  },
  {
    title: "Contact",
    path: "/contact",
    icon: <FontAwesomeIcon icon={faEnvelopeOpen} />,
  },
]
