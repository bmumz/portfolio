import React from "react"
import SocialProfile from "./socialProfile"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faLinkedin,
  faAngellist,
  faGithub,
} from "@fortawesome/free-brands-svg-icons"

const Footer = () => (
  <div>
    <footer className="footer">
      <div className="footer__copyright">
        © {new Date().getFullYear()} Brandi Mummery
      </div>

      <div className="footer__socials">
        <SocialProfile
          profileLink="https://www.github.com/bmumz"
          icon={<FontAwesomeIcon icon={faGithub} className="footer__social" />}
        />
        <SocialProfile
          profileLink="https://www.linkedin.com/in/brandimummery"
          icon={
            <FontAwesomeIcon icon={faLinkedin} className="footer__social" />
          }
        />
        <SocialProfile
          profileLink="https://angel.co/u/brandi-mummery"
          icon={
            <FontAwesomeIcon icon={faAngellist} className="footer__social" />
          }
        />
      </div>
    </footer>
  </div>
)

export default Footer
