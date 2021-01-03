import React from "react"
import Seo from "../components/seo"
import Menu from "../components/hamburgerMenu/menu"
import Intro from "../components/intro"
import About from "../components/about"
import Projects from "../components/projects/projects"

import "normalize.css"
import "../styles/styles.scss"

const IndexPage = () => (
  <div>
    <Seo />
    <Menu />
    <Intro />
    <About />
    <Projects />
  </div>
)

export default IndexPage
