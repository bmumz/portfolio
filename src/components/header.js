import React from "react"
import { MenuData } from "../components/hamburgerMenu/menuData"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons"

const Header = () => {
  return (
    <div className="header">
      <div className="header__nav">
        {MenuData.map((menuItem, index) => {
          return (
            <div key={index}>
              <Link to={menuItem.path}>
                <h2 className="header__page">{menuItem.title}</h2>
              </Link>
            </div>
          )
        })}
        {/* <Link to="/about">
          <h2 className="header__page">ABOUT</h2>
        </Link>
        <Link to="/work">
          <h2>WORK</h2>
        </Link>
        <Link to="/blog">
          <h2>BLOG</h2>
        </Link> */}
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
