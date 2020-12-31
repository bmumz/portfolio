import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons"

const Header = () => {
  return (
    <div className="header">
      <FontAwesomeIcon icon={faLaptopCode} className="header__laptop" />
      Brandi
      <br />
      Mummery.
    </div>
  )
}

export default Header
