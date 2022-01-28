import React, { useState } from "react"
import { MenuData } from "./menuData"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import AnimatedButton from "./animatedButton"

function Menu() {
  const [navbar, setNavbar] = useState(false)

  const showNavbar = () => setNavbar(!navbar)

  return (
    <>
      <div className="menu">
        <div>
          <div className="button__hamburger">
            <div className={`menu__button ${navbar ? "clicked" : "unclicked"}`}>
              <AnimatedButton onClick={showNavbar} name="button__animation" />
            </div>
          </div>
        </div>

        <nav className={`menu__nav ${navbar ? "clicked" : "unclicked"}`}>
          <ul className="menu__list">
            {MenuData.map((item, index) => (
              <li key={index}>
                {item.title !== "Blog" ? (
                  <AnchorLink to={item.path} onAnchorLinkClick={showNavbar}>
                    <span className="menu__item">
                      <span className="menu__animation">{item.icon}</span>
                      {item.title}
                    </span>
                  </AnchorLink>
                ) : (
                  <a href={item.path} onClick={showNavbar}>
                    <span className="menu__item">
                      <span className="menu__animation">{item.icon}</span>
                      {item.title}
                    </span>
                  </a>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  )
}

export default Menu
