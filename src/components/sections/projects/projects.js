import React from "react"
import { ProjectData } from "./projectData"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"

const Projects = () => (
  <>
    <div>
      <div className="projects" id="projects">
        <h1 className="title">Projects</h1>

        {ProjectData.map((project, index) => {
          return (
            <div key={index} className="project">
              <div className="project__writeup">
                <span className="project__title">{project.title}</span>
                <span className="project__stack">{project.stack}</span>
                <span className="project__details">{project.details}</span>
                <span className="project__links">
                  <a
                    href={project.link}
                    className="button"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {" "}
                    See Live
                  </a>

                  <a
                    href={project.github}
                    className="button"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faGithub}
                      className="project__github"
                    />{" "}
                    Source Code
                  </a>
                </span>
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
    </div>
  </>
)

export default Projects
