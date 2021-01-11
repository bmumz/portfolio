import React, { Component } from "react"
import { Fade } from "react-reveal"

export default class AboutList extends Component {
  render() {
    let { listItem, listCaption } = this.props
    return (
      <Fade right cascade>
        <div className="about__steps">
          <p className="about__title">{listItem}—</p>

          <p className="about__caption">{listCaption}</p>
        </div>
      </Fade>
    )
  }
}
