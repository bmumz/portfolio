import React from "react"
import { MenuData } from "./menuData"
import { Link } from "gatsby"

function Menu() {
  return (
    <div>
      <div>
        <ul className="menu__list layout">
          {MenuData.map((menuItem, index) => {
            return (
              <li key={index}>
                <Link to={menuItem.path}>
                  <h2 className="menu__icons">{menuItem.icon}</h2>
                  {menuItem.title}
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default Menu
