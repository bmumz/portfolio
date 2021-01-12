import React from "react"
import HeadshotImage from "../ui/imageQueries/headshot"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCanadianMapleLeaf } from "@fortawesome/free-brands-svg-icons"
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons"

const Intro = () => {
  return (
    <div className="intro">
      <div className="intro__container">
        <div className="intro__img">
          <HeadshotImage />
        </div>
        <div className="intro__blurb">
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
        </div>
      </div>
    </div>
  )
}

export default Intro
