import React from "react"
import Layout from "../components/layout"

export default function Template({ data }) {
  const { markdownRemark: post } = data

  return (
    <div>
      <Layout />
      <div className="blogPost layout">
        <h1 className="blogPost__title">{post.frontmatter.title}</h1>
        <span className="blogPost__author">Written by Brandi Mummery</span>
        <br />
        <span className="blogPost__date">{post.frontmatter.date}</span>
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
