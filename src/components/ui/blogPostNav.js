import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faLongArrowAltLeft,
  faLongArrowAltRight,
} from "@fortawesome/free-solid-svg-icons"

export default function BlogNav() {
  return (
    <div>
      <FontAwesomeIcon icon={faLongArrowAltLeft} />
      <div>
        Previous: <h3>Blog Post Title</h3>
      </div>
    </div>
  )
}
