import React from "react"

import Menu from "../components/hamburgerMenu/menu"
import Intro from "../components/intro"
import Footer from "../components/footer"
import About from "../components/about"
import Contact from "../components/contact"
import Projects from "../components/projects"
import Seo from "../components/seo"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import "normalize.css"
import "../styles/styles.scss"

const IndexPage = () => (
  <div>
    <Seo />
    <div className="landingPage">
      <div className="landingPage__intro">
        <Intro />
      </div>
      <div className="landingPage__nav">
        <Router>
          <Menu />
          <Switch>
            <Route path="/" />
          </Switch>
        </Router>
      </div>
    </div>

    {/* <About />

    <div className="layout">
      <Projects />
    </div>
    <Contact />
    <Footer /> */}
  </div>
)

export default IndexPage
