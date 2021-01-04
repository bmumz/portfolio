import React from "react"
import Header from "../components/header"

export default function Template({ data }) {
  const { markdownRemark: post } = data

  return (
    <div>
      <div>
        <Header />
      </div>

      <div className="layout">
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </div>
  )
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`
