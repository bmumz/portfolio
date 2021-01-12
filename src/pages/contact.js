import React from "react"
import Layout from "../components/ui/layout"
import Twitter from "../components/ui/twitter"

export default function Contact() {
  return (
    <>
      <Layout>
        <div className="contact">
          {" "}
          <div className="contact__twitter">
            <Twitter />
          </div>
        </div>
      </Layout>
    </>
  )
}
