import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelopeOpen } from "@fortawesome/free-regular-svg-icons"
import { faMobileAlt } from "@fortawesome/free-solid-svg-icons"
import { ContactData } from "./contactData"

const Contact = () => (
  <>
    <div className="contact" id="contact">
      <h1 className="title">Let's get in touch!</h1>
      <div className="contact__socials">
        {ContactData.map((social, index) => (
          <span key={index}>
            <a href={social.url} className="contact__icon">
              {social.icon}
            </a>
          </span>
        ))}
      </div>

      <h3>
        <div className="contact__container">
          <span className="contact__method">
            <FontAwesomeIcon icon={faEnvelopeOpen} />
          </span>

          <span>brandimummery@gmail.com</span>
        </div>
      </h3>
    </div>
  </>
)

export default Contact
