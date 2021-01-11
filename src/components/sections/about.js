import React from "react"
import AboutList from "./aboutList"

const About = () => (
  <>
    <div className="about" id="about">
      <h1 className="title">About</h1>
      <div className="about__container layout">
        <div className="about__image">
          <img
            src="https://loremflickr.com/400/300"
            style={{ width: "400px" }}
            alt="Brandi clickity clackiting."
          />
          <img
            src="https://loremflickr.com/400/300"
            style={{ width: "400px" }}
            alt="Brandi clickity clackiting."
          />
          <img
            src="https://loremflickr.com/400/300"
            style={{ width: "400px" }}
            alt="Brandi clickity clackiting."
          />
        </div>
        <div className="about__writeup">
          <h3>
            I am a <b>self-taught</b> developer with a keen eye for design—
            thanks to my creative background in photography.
          </h3>
          <p>
            My first memory of coding was in the days of Myspace. I'd code my
            layout to make the music player on my page untouchable, so people
            were forced to listen to my favorite music (if you can even call it
            that...)
            <br />
          </p>
          <p>
            Now, I understand this is not a good practice. I focus on ensuring
            web applications I deliver are built around accessibility,
            scalability and reusability.
          </p>
          <h3 className="about__headline">
            I enjoy identifying and solving problems to build clean, creative,
            and user-friendly experiences with a 3 step process:
          </h3>{" "}
          <div className="about__list">
            <AboutList
              listItem="#1 Research"
              listCaption="What specific issues need to be addressed? What value will it
              provide?"
            />
            <AboutList
              listItem="#2 Design"
              listCaption="Create prototypes designs/wireframes, keeping research in mind."
            />
            <AboutList
              listItem="#3 Develop"
              listCaption=" Utilize research and designs to produce a shiny new finished
              project!"
            />
          </div>
        </div>
      </div>
    </div>
    <div className="about__socials">TEST</div>
  </>
)

export default About
