import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faNode, faJsSquare, faReact } from "@fortawesome/free-brands-svg-icons"

export const ProjectData = [
  {
    title: "You Go, Girl!",
    stack: (
      <div className="project__stack">
        <FontAwesomeIcon icon={faJsSquare} className="project__icon" />
        <FontAwesomeIcon icon={faReact} className="project__icon" />
        <FontAwesomeIcon icon={faNode} className="project__icon" />
      </div>
    ),
    image: "https://i.ibb.co/RcLvrZG/ygg-portfolio.png",
    details: (
      <div className="project__details">
        <ul>
          <li>
            An inspirational quote generator that returns a random quote at the
            press of a button!
          </li>
          <li>Front-end: powered by Next.js.</li>
          <li>
            Back-end: Created an{" "}
            <a href="https://www.github.com/bmumz/inspirational-quotes-api">
              open source API
            </a>
            , so anyone with a GitHub account can contribute their favourite
            inspirational quotes to the project!
          </li>
        </ul>
      </div>
    ),
    link: "https://you-go-girl.vercel.app/",
    github: "https://github.com/bmumz/you-go-girl",
  },
  {
    title: "Island Horizons",
    stack: (
      <div className="project__stack">
        <FontAwesomeIcon icon={faJsSquare} className="project__icon" />
        <FontAwesomeIcon icon={faReact} className="project__icon" />
      </div>
    ),
    image: "https://i.ibb.co/5K108xH/isl-Hor-portfolio.png",
    details: (
      <div className="project__details">
        <ul>
          <li>
            Animal Crossing: New Horizons blog— complete with game data
            (critters, villagers and fossils) fetched from a RESTful API.
          </li>
          <li>
            Front-end: powered by Gatsby, while using Contentful as a CMS.
          </li>
          <li>
            Design: header and background images created in Adobe Photoshop and
            Illustrator.
          </li>
        </ul>
      </div>
    ),
    link: "https://www.islandhorizons.com",
    github: "https://www.github.com/bmumz/island-horizons",
  },
  {
    title: "Caswell Construction",
    stack: (
      <div className="project__stack">
        <FontAwesomeIcon icon={faJsSquare} className="project__icon" />
        <FontAwesomeIcon icon={faReact} className="project__icon" />
        <FontAwesomeIcon icon={faNode} className="project__icon" />
      </div>
    ),
    image: "https://i.ibb.co/PDfKmnD/cas-Con-portfolio.png",
    details: (
      <div className="project__details">
        <ul>
          <li>
            Landing page created for a renovation and small construction
            company, showcasing the services they provide.
          </li>
          <li>Front-end: powered by Gatsby to ensure fast load times.</li>
          <li>
            Back-end: server created using Node.js/Express to allow clients to
            reach out to the business directly using a contact form.
          </li>
        </ul>
      </div>
    ),
    link: "https://caswellconstruction.ca",
    github: "https://github.com/bmumz/caswellConstruction",
  },
  {
    title: "...What's In This?",
    stack: (
      <div className="project__stack">
        <FontAwesomeIcon icon={faJsSquare} className="project__icon" />
        <FontAwesomeIcon icon={faReact} className="project__icon" />
        <FontAwesomeIcon icon={faNode} className="project__icon" />
        <p className="project__stackName">PostgreSQL</p>
      </div>
    ),
    image: "https://i.ibb.co/4sd3QBb/wit-portfolio.png",
    details: (
      <div className="project__details">
        <ul>
          <li>
            Single page application that uses machine learning (Clarafai API) to
            predict ingredients of food photographs submitted by users.
          </li>
          <li>
            Users can sign up/sign in to their profile to submit images,
            utilizing the apps back-end.
          </li>
          <li>
            Back-end: server created with Node.js/Express, database created with
            PostgreSQL.
          </li>
        </ul>
      </div>
    ),
    link: "https://whats-in-this.herokuapp.com/",
    github: "https://github.com/bmumz/whats-in-this",
  },
]
