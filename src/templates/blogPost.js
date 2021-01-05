import React from "react"
import Layout from "../components/layout"
import Header from "../components/header"
import Footer from "../components/footer/footer"

export default function Template({ data }) {
  const { markdownRemark: post } = data

  return (
    <div>
      <div className="blog">
        <div>
          <Layout />
          {/* <Header /> */}
        </div>

        <div className="blog__post layout">
          <h1 className="blog__title">{post.frontmatter.title}</h1>
          <div>
            <span className="blog__subtitle">👩‍💻 Brandi Mummery</span>
            <span>{post.timeToRead}</span>
          </div>
          <br />
          <span className="blog__date">{post.frontmatter.date}</span>
          <div
            className="blog__body"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </div>
      </div>

      <Footer />
    </div>
  )
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      timeToRead
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`
