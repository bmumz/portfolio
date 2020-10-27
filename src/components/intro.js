import React from "react"
import Fade from "react-reveal/Fade"
import AnchorLink from "react-anchor-link-smooth-scroll"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCanadianMapleLeaf } from "@fortawesome/free-brands-svg-icons"
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons"

const Intro = () => {
  return (
    <div className="intro layout">
      <Fade left>
        <div className="intro__blurb">
          <p>
            Hi, I'm <span className="intro__name">Brandi Mummery</span>—
          </p>
          <p>a web developer with a passion for UX design.</p>
          <p>
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
          </p>{" "}
          <p>
            <button className="intro__button">
              <AnchorLink href="#about">Learn More</AnchorLink>
            </button>
          </p>
        </div>{" "}
      </Fade>
    </div>
  )
}

export default Intro
