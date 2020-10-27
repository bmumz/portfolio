import React from "react"
import Image from "./image"
import Fade from "react-reveal/Fade"

const About = () => (
  <div id="about">
    <div className="about">
      <h1 className="title">About</h1>
      <div className="layout about__container">
        <div className="about__image">
          <Image />
        </div>

        <div className="about__writeup">
          <div className="about__paragraph">
            I am a <b>self-taught</b> developer with a keen eye for design—
            thanks to my creative background in photography. With every line of
            code, I strive to make the web a more beautiful place.
          </div>

          <div className="about__headline">
            I enjoy identifying and solving problems to build clean, creative,
            and user-friendly experiences with a 3 step process:
          </div>

          <ul className="about__ul ">
            <Fade right cascade>
              <li className="about__li">#1 Research—</li>
              What specific issues need to be addressed? What value will it
              provide?
              <li className="about__li">#2 Design—</li>
              Create prototypes designs/wireframes, keeping research in mind.
              <li className="about__li">#3 Develop—</li>
              Utilize research and designs to produce a shiny new finished
              project!
            </Fade>
          </ul>
        </div>
      </div>
    </div>
  </div>
)

export default About
