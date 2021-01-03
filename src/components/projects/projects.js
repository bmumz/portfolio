import React from "react"
import { ProjectData } from "./projectData"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"

const Projects = () => (
  <div className="projects">
    <h1 className="title">Projects</h1>

    {ProjectData.map((project, index) => {
      return (
        <div className="project ">
          <div key={index} className="project__writeup">
            <p className="project__title">{project.title}</p>

            <p className="project__stack">{project.stack}</p>
            <p className="project__details">{project.details}</p>
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
