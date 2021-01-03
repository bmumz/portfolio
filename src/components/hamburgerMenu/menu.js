import React, { useState } from "react"
import { MenuData } from "./menuData"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"

function Menu() {
  const [navbar, setNavbar] = useState(false)

  const showNavbar = () => setNavbar(!navbar)
  return (
    <div className="menu">
      <div className={`menu__buttonCont ${navbar ? "active" : "inactive"}`}>
        <div className="menu__button" onClick={showNavbar}>
          <FontAwesomeIcon icon={faBars} />
        </div>
      </div>

      <nav className={`menu__nav ${navbar ? "active" : "inactive"}`}>
        <ul className="menu__list">
          {MenuData.map((menuItem, index) => {
            return (
              <li key={index}>
                <Link to={menuItem.path}>{menuItem.title}</Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </div>
  )
}

export default Menu
