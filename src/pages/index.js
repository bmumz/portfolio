import React from "react"
import Seo from "../components/seo"
import Menu from "../components/menu"
import Intro from "../components/intro"
import About from "../components/about"
import Projects from "../components/projects/projects"
import Footer from "../components/footer/footer"
import { Link } from "gatsby"
import AnchorLink from "react-anchor-link-smooth-scroll"

import "normalize.css"
import "../styles/styles.scss"

const IndexPage = () => (
  <div>
    <Seo />
    <Menu
      about={<AnchorLink href="#about">About</AnchorLink>}
      projects={<AnchorLink href="#projects">Projects</AnchorLink>}
    />
    <Intro />
    <About />
    <Projects />
    <Footer />
  </div>
)

export default IndexPage
