import React from "react"
import { ProjectData } from "./projectData"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"

const Projects = () => (
  <div className="projects">
    <h1 className="title">Projects</h1>

    {ProjectData.map((project, index) => {
      return (
        <div key={index} className="project ">
          <div className="project__writeup">
            <div className="project__title">{project.title}</div>

            <div className="project__stack">{project.stack}</div>
            <div className="project__details">{project.details}</div>
            <a
              href={project.link}
              className="button project--link"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              See Live
            </a>

            <a
              href={project.github}
              className="button project--link"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} /> Source Code
            </a>
          </div>
          <div>
            <img
              src={project.image}
              alt={project.title}
              className="project__image"
            />
          </div>
        </div>
      )
    })}
  </div>
)

export default Projects
