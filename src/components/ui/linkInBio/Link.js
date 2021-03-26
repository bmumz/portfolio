import React from "react"

const Link = ({ path, title }) => (
  <div className="link-container">
    <a href={path} className="link">
      <h3>{title}</h3>
    </a>
  </div>
)

export default Link
