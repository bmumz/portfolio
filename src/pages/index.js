import React from "react"

import Menu from "../components/hamburgerMenu/menu"
import Intro from "../components/intro"
import Seo from "../components/seo"

import "normalize.css"
import "../styles/styles.scss"

const IndexPage = () => (
  <div>
    <Seo />
    <div className="landingPage">
      <Intro />
    </div>
  </div>
)

export default IndexPage
