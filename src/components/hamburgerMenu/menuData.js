import React from "react"
import AnchorLink from "react-anchor-link-smooth-scroll"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faDesktop } from "@fortawesome/free-solid-svg-icons"
import { faAddressCard, faNewspaper } from "@fortawesome/free-regular-svg-icons"

export const MenuData = [
  {
    title: "About",
    anchorPath: <AnchorLink href="#about">About</AnchorLink>,
    path: <Link to="/">About</Link>,
    icon: <FontAwesomeIcon icon={faAddressCard} />,
  },
  {
    title: "Projects",
    anchorPath: <AnchorLink href="#projects">Projects</AnchorLink>,
    path: <Link to="/">Projects</Link>,
    icon: <FontAwesomeIcon icon={faDesktop} />,
  },

  // {
  //   title: "Blog",
  //   path: <Link to="/blog/">Blog</Link>,
  //   icon: <FontAwesomeIcon icon={faNewspaper} />,
  // },
]
