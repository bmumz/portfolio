import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export const query = graphql`
  query BlogPost($slug: String) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date(fromNow: true)
        tags
      }
      html
      timeToRead
    }
  }
`

const Blog = ({ data }) => {
  const post = data.markdownRemark
  return (
    <>
      <Layout>
        <div className="blog blog__post">
          <h1 className="blog__title">{post.frontmatter.title}</h1>
          <div className="blog__tags">
            {post.frontmatter.tags.map((tag, index) => (
              <div key={index} className="blog__tag">
                {tag}
              </div>
            ))}
          </div>
          <span className="blog__date">{post.frontmatter.date}</span> ·{" "}
          <span>{post.timeToRead} min read</span>
          <div
            className="blog__body"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </div>
      </Layout>
    </>
  )
}

export default Blog
