import React from "react"
import Fade from "react-reveal"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelopeOpen } from "@fortawesome/free-regular-svg-icons"
import { faMobileAlt } from "@fortawesome/free-solid-svg-icons"

const Contact = () => (
  <div>
    <div className="contact">
      <Fade top>
        <h2 className="title">Let's connect!</h2>
      </Fade>
      <Fade left>
        <div className="contact__info">
          <div className="contact__method">
            <FontAwesomeIcon icon={faEnvelopeOpen} className="contact__icon" />{" "}
            <h3>brandimummery@gmail.com</h3>
          </div>
          <div className="contact__method">
            <FontAwesomeIcon icon={faMobileAlt} className="contact__icon" />{" "}
            <h3>647-308-1536</h3>
          </div>
        </div>
      </Fade>
    </div>
  </div>
)

export default Contact
