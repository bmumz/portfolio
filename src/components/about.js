import React from "react"
import Image from "./image"
import AboutList from "./aboutList"

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

          <ul className="about__ul">
            <AboutList
              listItem="#1 Research"
              listCaption={
                "What specific issues need to be addressed? What value will it provide?"
              }
            />
            <AboutList
              listItem="#2 Design"
              listCaption={
                "Create prototypes designs/wireframes, keeping research in mind."
              }
            />
            <AboutList
              listItem="#3 Develop"
              listCaption={
                "Utilize research and designs to produce a shiny new finished project!"
              }
            />
          </ul>

          {/* <div>
            When I'm AFK, I'm playing Animal Crossing, trying out a new recipe,
            or hanging out with my chonky cat, Reya.
          </div> */}
        </div>
      </div>
    </div>
  </div>
)

export default About
