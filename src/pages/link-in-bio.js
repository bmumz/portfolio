import React from "react"
import Layout from "../components/ui/layout"
import MiniProfile from "../components/ui/linkInBio/MiniProfile"
import Link from "../components/ui/linkInBio/Link"
import {
  Resources,
  OpenSource,
  BlogPosts,
} from "../components/ui/linkInBio/data"

const LinkInBio = () => {
  return (
    <>
      <Layout>
        <div className="link-in-bio">
          <MiniProfile />
          <hr />
          <h3 className="link-type">Learn to code for free!</h3>
          {Resources.map((link, index) => (
            <span key={index}>
              <Link path={link.path} title={link.title} />
            </span>
          ))}
          <h3 className="link-type">Beginner-friendly open source projects</h3>
          {OpenSource.map((link, index) => (
            <span key={index}>
              <Link path={link.path} title={link.title} />
            </span>
          ))}
          <h3 className="link-type">Helpful Reading</h3>
          {BlogPosts.map((link, index) => (
            <span key={index}>
              <Link path={link.path} title={link.title} />
            </span>
          ))}
        </div>
      </Layout>
    </>
  )
}

export default LinkInBio
