import React, { Component } from "react"
import { Fade } from "react-reveal"

export default class AboutList extends Component {
  render() {
    let { listItem, listCaption } = this.props
    return (
      <div className="about__steps">
        <Fade right>
          <div>
            <li className="about__li">{listItem}—</li>
          </div>
          <div>{listCaption}</div>
        </Fade>
      </div>
    )
  }
}
