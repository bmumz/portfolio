import React, { useState } from "react"
import Menu from "./hamburgerMenu/menu"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCanadianMapleLeaf } from "@fortawesome/free-brands-svg-icons"
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons"

const Intro = () => {
  const [navbar, setNavbar] = useState(false)

  const showNavbar = () => setNavbar(!navbar)
  return (
    <div className="landingPage">
      <div className="landingPage__nav">
        <div className="menu__button">
          <button onClick={showNavbar} className=" button">
            🍔
          </button>{" "}
        </div>
        <nav className={` menu__nav ${navbar ? "active" : "inactive"}`}>
          <Menu />
        </nav>
      </div>
      <div className="landingPage__intro">
        <h1 className="intro">
          <span>
            Hi, I'm <span className="intro__name">Brandi Mummery</span>—
            <br />
          </span>
          <span> a web developer with a passion for UX design.</span>

          <span className="intro__icons">
            <FontAwesomeIcon
              icon={faMapMarkerAlt}
              size="lg"
              className="intro__location"
            />
            <span className="intro__toronto">Toronto, Ontario</span>
            <FontAwesomeIcon
              icon={faCanadianMapleLeaf}
              size="lg"
              className="intro__mapleleaf"
            />
          </span>
        </h1>
      </div>
    </div>
  )
}

export default Intro
