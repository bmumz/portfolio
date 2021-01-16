import React from "react"
import { ContactData } from "../../sections/contact/contactData"

const Footer = () => (
  <>
    <footer className="footer">
      <div className="footer__copyright">
        © {new Date().getFullYear()} Brandi Mummery
      </div>

      <div className="footer__socials">
        {ContactData.map((social, index) => (
          <span key={index}>
            <a href={social.url} className="footer__social">
              {social.icon}
            </a>
          </span>
        ))}
      </div>
    </footer>
  </>
)

export default Footer
