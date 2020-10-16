import React, { Component } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"

export default class Project extends Component {
  render() {
    let { projectName, liveLink, gif, gitLink, stack, writeUp } = this.props
    return (
      <div>
        <div className="project ">
          <div className="project__writeup">
            <div className="project__name">{projectName}</div>
            <div className="project__stack">{stack}</div>
            <div className="project__details">{writeUp}</div>

            <a href={liveLink} target="_blank" rel="noreferrer">
              {" "}
              <button className="button project--link">See Live</button>
            </a>
            <a href={gitLink} target="_blank" rel="noreferrer">
              <button className="button project--link">
                {" "}
                <FontAwesomeIcon icon={faGithub} /> Source Code
              </button>
            </a>
          </div>
          <div>
            <img src={gif} alt={projectName} className="project__image" />
          </div>
        </div>
      </div>
    )
  }
}
