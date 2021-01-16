import React from "react"
import { AboutList } from "./aboutList"
import Contact from "../contact/contact"

const About = () => (
  <>
    <div className="about" id="about">
      <h1 className="title">About</h1>

      <div className="about__container layout">
        <div className="about__writeup">
          <h3>
            I am a <b>self-taught</b> developer with a keen eye for design—
            thanks to my background in photography{" "}
            <span role="img" aria-label="Camera with flash.">
              📸.
            </span>
          </h3>
          <h3>
            I enjoy identifying and solving problems creatively to deliver
            clean, creative and user-friendly experience with a 3 step process—
            research, design, and <i>then</i> develop. I believe it is best to
            have a thorough plan <i>before</i> I open VSCode{" "}
            <span role="img" aria-label="girl crossing arms">
              🙅‍♀️
            </span>
            ! You'll usually find me dabbling around in Adobe XD and Photoshop
            before I start the coding process.
          </h3>
          <h3>
            {" "}
            My first memory of coding was in the days of Myspace. I'd code my
            layout to make the music player on my page untouchable, so people
            were forced to listen to my favorite music (if you can even call it
            that...)
          </h3>
          <h3>
            <b>Now</b>, I understand this is not a good practice. I focus on
            ensuring web applications I deliver are built around accessibility,
            scalability and reusability.
          </h3>

          <h3>I am fluent in:</h3>
          <div className="about__tags">
            {AboutList.map((item, index) => (
              <span key={index} className="about__tag">
                {item.icon && <span className="about__icon">{item.icon}</span>}
                <span className="about__item">{item.item}</span>
              </span>
            ))}
          </div>
        </div>
        <Contact />
      </div>
    </div>{" "}
  </>
)

export default About
