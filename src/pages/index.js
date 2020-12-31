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
    <div className="test">
      <div className="intro__test">
        <Intro />

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
