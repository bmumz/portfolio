import React from "react"

import Fade from "react-reveal/Fade"
import AnchorLink from "react-anchor-link-smooth-scroll"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCanadianMapleLeaf } from "@fortawesome/free-brands-svg-icons"
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons"

const Intro = () => {
  return (
    <div className="intro">
      <div className="intro__container">
        <div className="intro__blurb">
          <h1>
            Hi, I'm <span className="intro__name">Brandi Mummery</span>—
            <br />
            a web developer with a passion for UX design.
            <br />
            <FontAwesomeIcon
              icon={faMapMarkerAlt}
              size="lg"
              className="intro__location"
            />
            Toronto, Ontario
            <FontAwesomeIcon
              icon={faCanadianMapleLeaf}
              size="lg"
              className="intro__mapleleaf"
            />
          </h1>
        </div>
      </div>
    </div>
  )
}

export default Intro
