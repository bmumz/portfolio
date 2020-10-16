import React from "react"
import Fade from "react-reveal/Fade"
import AnchorLink from "react-anchor-link-smooth-scroll"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCanadianMapleLeaf } from "@fortawesome/free-brands-svg-icons"
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons"

const Intro = () => {
  return (
    <div>
      <Fade left>
        <section className="intro layout">
          <div>
            <h1>
              Hi, I'm <span className="intro__name">Brandi Mummery</span>—
            </h1>
            <h1>a web developer with a passion for UX design.</h1>
            <h1>
              <FontAwesomeIcon
                icon={faMapMarkerAlt}
                className="intro__location"
              />{" "}
              Toronto, Ontario{" "}
              <FontAwesomeIcon
                icon={faCanadianMapleLeaf}
                className="intro__mapleleaf"
              />
            </h1>
            <AnchorLink href="#about">
              <button className="button slide">Learn More</button>
            </AnchorLink>
          </div>
        </section>
      </Fade>
    </div>
  )
}

export default Intro
