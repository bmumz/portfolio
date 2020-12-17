import React from "react"
import Project from "./project"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faNode, faJsSquare, faReact } from "@fortawesome/free-brands-svg-icons"

const Projects = () => (
  <div>
    <h1 className="title">Projects</h1>

    <Project
      projectName="You Go, Girl!"
      liveLink="https://www.you-go-girl.vercel.app"
      gitLink="https://github.com/bmumz/you-go-girl"
      image="https://i.ibb.co/RcLvrZG/ygg-portfolio.png"
      stack={
        <div className="project__stack">
          <FontAwesomeIcon icon={faJsSquare} className="project__icon" />
          <FontAwesomeIcon icon={faReact} className="project__icon" />
        </div>
      }
      writeUp={
        <div>
          <ul>
            <li className="project__list">
              An inspirational quote generator that returns a random quote at
              the press of a button!
            </li>
            <li className="project__list">Front-end: powered by Next.js.</li>
            <li className="project__list">
              Back-end: Created an{" "}
              <a href="https://www.github.com/bmumz/inspirational-quotes-api">
                open source API
              </a>
              , so anyone with a GitHub account can contribute their favourite
              inspirational quotes to the project!
            </li>
          </ul>
        </div>
      }
    />

    <Project
      projectName="Island Horizons"
      liveLink="https://www.islandhorizons.com"
      gitLink="https://github.com/bmumz/island-horizons"
      image="https://i.ibb.co/5K108xH/isl-Hor-portfolio.png"
      stack={
        <div className="project__stack">
          <FontAwesomeIcon icon={faJsSquare} className="project__icon" />
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
              Front-end: powered by Gatsby, while using Contentful as a CMS.
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
      liveLink="https://caswellconstruction.ca"
      gitLink="https://github.com/bmumz/caswellConstruction"
      image="https://i.ibb.co/PDfKmnD/cas-Con-portfolio.png"
      stack={
        <div className="project__stack">
          <FontAwesomeIcon icon={faJsSquare} className="project__icon" />
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
      image="https://i.ibb.co/4sd3QBb/wit-portfolio.png"
      gitLink="https://github.com/bmumz/whats-in-this"
      stack={
        <div className="project__stack">
          <FontAwesomeIcon icon={faJsSquare} className="project__icon" />
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
