import React from "react"
import Seo from "../components/seo"
import Intro from "../components/intro"
import About from "../components/about"
import Projects from "../components/projects/projects"

import "normalize.css"
import "../styles/styles.scss"

const IndexPage = () => (
  <div>
    <Seo />
    <div className="landingPage">
      <Intro />
      <About />
      <Projects />
    </div>
  </div>
)

export default IndexPage
