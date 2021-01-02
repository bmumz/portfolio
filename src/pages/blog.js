import React from "react"
import Layout from "../components/layout"
import { graphql, Link } from "gatsby"

const BlogHome = props => {
  const postList = props.data.allMarkdownRemark
  return (
    <div>
      <Layout />
      <div className=" blog">
        {postList.edges.map(({ node }, index) => (
          <div key={index} className="layout">
            <Link to={`/blog${node.frontmatter.path}`}>
              <h1>{node.frontmatter.title}</h1>
            </Link>
            <hr />
            <span>{node.frontmatter.date}</span>
            <Link to={node.frontmatter.path}>
              <p>{node.excerpt}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default BlogHome

export const blogList = graphql`
  query BlogPost {
    allMarkdownRemark {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            path
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`
