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
            <button className="button project--link">
              <a href={liveLink} target="_blank" rel="noreferrer">
                {" "}
                See Live
              </a>
            </button>

            <button className="button project--link">
              {" "}
              <a href={gitLink} target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faGithub} /> Source Code
              </a>
            </button>
          </div>
          <div>
            <img src={gif} alt={projectName} className="project__image" />
          </div>
        </div>
      </div>
    )
  }
}
