import React from "react"
import Seo from "../components/ui/seo"
import Menu from "../components/ui/hamburgerMenu/menu"
import Intro from "../components/sections/intro"
import About from "../components/sections/about/about"
import Projects from "../components/sections/projects/projects"
import Footer from "../components/ui/footer/footer"

import "normalize.css"
import "../styles/styles.scss"

const IndexPage = () => (
  <div>
    <Seo />
    <Menu />
    <Intro />
    <About />
    <Projects />
    <Footer />
  </div>
)

export default IndexPage
