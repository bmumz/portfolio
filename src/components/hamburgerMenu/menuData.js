import React from "react"
import AnchorLink from "react-anchor-link-smooth-scroll"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faDesktop } from "@fortawesome/free-solid-svg-icons"
import { faAddressCard, faNewspaper } from "@fortawesome/free-regular-svg-icons"

export const MenuData = [
  {
    title: "About",
    path: <AnchorLink href="#about">About</AnchorLink>,
    icon: <FontAwesomeIcon icon={faAddressCard} />,
  },
  {
    title: "Work",
    path: <AnchorLink href="#projects">Projects</AnchorLink>,
    icon: <FontAwesomeIcon icon={faDesktop} />,
  },
  {
    title: "Blog",
    path: <Link to="/blog/">Blog</Link>,
    icon: <FontAwesomeIcon icon={faNewspaper} />,
  },
]
