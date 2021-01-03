import React from "react"
import Layout from "../components/layout"
import { graphql, Link } from "gatsby"

const Blog = props => {
  const postList = props.data.allMarkdownRemark
  return (
    <div>
      <Layout />
      <div className=" blog">
        <div className="layout">
          <h3 className="blog__subtitle">RECENT POSTS</h3>{" "}
          {postList.edges.map(({ node }, index) => (
            <div key={index}>
              <Link to={node.frontmatter.path}>
                <h1 className="blog__title">{node.frontmatter.title}</h1>
              </Link>

              <span className="blog__date">{node.frontmatter.date}</span>
              <Link to={node.frontmatter.path}>
                <p className="blog__excerpt">{node.excerpt}</p>
              </Link>
              <hr />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Blog

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
