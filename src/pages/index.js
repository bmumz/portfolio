import React from "react"
import Intro from "../components/intro"
import Footer from "../components/footer"
import About from "../components/about"
import Contact from "../components/contact"
import Projects from "../components/projects"
import "normalize.css"
import "../styles/styles.scss"

const IndexPage = () => (
  <div>
    <Intro />
    <About />

    <div className="layout">
      <Projects />
    </div>
    <Contact />
    <Footer />
  </div>
)

export default IndexPage
