import React, { useState, useRef } from "react"
import { MenuData } from "./menuData"
import { Link } from "react-router-dom"

function Menu() {
  const [navbar, setNavbar] = useState(false)

  const showNavbar = () => setNavbar(!navbar)

  return (
    <div>
      <div className=" menu__button">
        <button onClick={showNavbar} className="button">
          LEARN MORE
        </button>{" "}
      </div>

      <nav className={` menu__nav ${navbar ? "active" : "inactive"}`}>
        <ul className="menu__list layout">
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
