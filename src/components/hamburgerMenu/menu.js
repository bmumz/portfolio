import React, { useState } from "react"
import { MenuData } from "./menuData"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons"

const HamburgerIcon = () => <FontAwesomeIcon icon={faBars} />

const ExitIcon = () => <FontAwesomeIcon icon={faTimes} />

function Menu() {
  const [navbar, setNavbar] = useState(false)

  const showNavbar = () => setNavbar(!navbar)

  let button
  if (!navbar) {
    button = <HamburgerIcon />
  } else {
    button = <ExitIcon />
  }

  return (
    <div className="menu">
      <div className={`menu__buttonCont ${navbar ? "active" : "inactive"}`}>
        <button className="menu__button" onClick={showNavbar}>
          {button}
        </button>
      </div>

      <nav className={`menu__nav ${navbar ? "active" : "inactive"}`}>
        <ul className="menu__list">
          {MenuData.map((menuItem, index) => {
            return (
              <li key={index} className="menu__item">
                {menuItem.path}
              </li>
            )
          })}
        </ul>
      </nav>
    </div>
  )
}

export default Menu
