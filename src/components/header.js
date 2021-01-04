import React from "react"
import Menu from "../components/hamburgerMenu/menu"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons"

const Header = () => {
  return (
    <div>
      <div>
        <Menu About="/" Projects="/" />
      </div>
      <div className="header">
        <div className="header__logo">
          <FontAwesomeIcon icon={faLaptopCode} className="header__laptop" />
          Brandi
          <br />
          Mummery.
        </div>
      </div>
    </div>
  )
}

export default Header
