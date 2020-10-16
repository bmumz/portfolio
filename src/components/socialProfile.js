import React, { Component } from "react"
import Slide from "react-reveal"

export default class SocialProfile extends Component {
  render() {
    let { profileLink, icon } = this.props
    return (
      <div>
        <Slide right>
          <a href={profileLink} target="_blank" rel="noreferrer">
            {icon}
          </a>
        </Slide>
      </div>
    )
  }
}
