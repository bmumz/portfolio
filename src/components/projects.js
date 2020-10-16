import React from "react"
import Project from "./project"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faNode, faJsSquare, faReact } from "@fortawesome/free-brands-svg-icons"

const Projects = () => (
  <div>
    <h1 className="title">Projects</h1>
    <Project
      projectName="Island Horizons"
      liveLink="https://www.islandhorizons.com"
      gif="https://i.ibb.co/SyQ6G6m/02.gif"
      gitLink="https://github.com/bmumz/island-horizons"
      stack={
        <div className="project__stack">
          <FontAwesomeIcon icon={faJsSquare} className="project__icon" />{" "}
          <span className="project__icon"> + </span>
          <FontAwesomeIcon icon={faReact} className="project__icon" />
        </div>
      }
      writeUp={
        <div>
          <ul>
            <li className="project__list">
              Animal Crossing: New Horizons blog— complete with game data
              (critters, villagers and fossils) fetched from a RESTful API.
            </li>
            <li className="project__list">
              Front-end: powered by Gatsby and Contentful as a CMS.
            </li>
            <li className="project__list">
              Designs: header and background images created in Adobe Photoshop
              and Illustrator.
            </li>
          </ul>
        </div>
      }
    />
    <hr />
    <Project
      projectName="Caswell Construction"
      liveLink="https://www.islandhorizons.com"
      gitLink="https://github.com/bmumz/caswellConstruction"
      gif="https://i.ibb.co/L1tgL32/whats-In-This.gif"
      stack={
        <div className="project__stack">
          <FontAwesomeIcon icon={faJsSquare} className="project__icon" />{" "}
          <span className="project__icon"> + </span>
          <FontAwesomeIcon icon={faReact} className="project__icon" />
          <FontAwesomeIcon icon={faNode} className="project__icon" />
        </div>
      }
      writeUp={
        <div>
          <ul>
            <li className="project__list">
              Landing page created for a renovation and small construction
              company, showcasing the services they provide.
            </li>
            <li className="project__list">
              Front-end: powered by Gatsby to ensure fast load times.
            </li>
            <li className="project__list">
              Back-end: server created using Node.js/Express to allow clients to
              reach out to the business directly using a contact form.
            </li>
          </ul>
        </div>
      }
    />
    <hr />
    <Project
      projectName="...What's In This?"
      liveLink="https://whats-in-this.herokuapp.com/"
      gif="https://i.ibb.co/L1tgL32/whats-In-This.gif"
      gitLink="https://github.com/bmumz/whats-in-this"
      stack={
        <div className="project__stack">
          <FontAwesomeIcon icon={faJsSquare} className="project__icon" />
          <span className="project__icon"> + </span>
          <FontAwesomeIcon icon={faReact} className="project__icon" />
          <FontAwesomeIcon icon={faNode} className="project__icon" />
          <p className="project__stackName">PostgreSQL</p>
        </div>
      }
      writeUp={
        <div>
          <ul>
            <li className="project__list">
              Single page application that uses machine learning (Clarafai API)
              to predict ingredients of food photographs submitted by users.
            </li>
            <li className="project__list">
              Users can sign up/sign in to their profile to submit images,
              utilizing the apps back-end.
            </li>
            <li className="project__list">
              Back-end: server created with Node.js/Express, database created
              with PostgreSQL.
            </li>
          </ul>
        </div>
      }
    />
  </div>
)

export default Projects
