import React from "react"
import HeadshotImage from "../../ui/imageQueries/headshot"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faInstagramSquare,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons"

const MiniProfile = () => (
  <>
    <div className="mini-profile">
      <div className="mini-profile-img">
        <HeadshotImage />
      </div>
      <span className="mini-profile-link">
        <FontAwesomeIcon
          icon={faInstagramSquare}
          className="mini-profile-icon"
        />{" "}
        <a href="https://www.instagram.com/brandicodes"> @brandicodes</a>
      </span>
      <span className="mini-profile-link">
        <FontAwesomeIcon icon={faTwitterSquare} className="mini-profile-icon" />{" "}
        <a href="https://www.twitter.com/brandiCodes"> @brandiCodes</a>
      </span>
      <h3>Lover of coffee, coding, and my cat.</h3>
    </div>
  </>
)

export default MiniProfile
