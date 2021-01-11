import React from "react"
import Menu from "././hamburgerMenu/menu"

import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons"

const Header = () => {
  return (
    <div>
      <div className="header__menu">
        {" "}
        <Menu />
      </div>
      <div className="header">
        <Link to="/">
          <div className="header__logo">
            <FontAwesomeIcon icon={faLaptopCode} className="header__laptop" />
            Brandi
            <br />
            Mummery.
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Header
