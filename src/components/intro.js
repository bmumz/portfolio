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
              className="intro__location"
            />{" "}
            Toronto, Ontario{" "}
            <FontAwesomeIcon
              icon={faCanadianMapleLeaf}
              className="intro__mapleleaf"
            />
          </p>{" "}
          <p>
            <AnchorLink href="#about">
              <button className="intro__button">Learn More</button>
            </AnchorLink>
          </p>
        </div>{" "}
      </Fade>
    </div>
  )
}

export default Intro
