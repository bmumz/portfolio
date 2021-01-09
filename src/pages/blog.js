import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date(fromNow: true)
            }
            fields {
              slug
            }
            id
            excerpt(pruneLength: 250)
            timeToRead
          }
        }
      }
    }
  `)

  return (
    <>
      <div>
        <div className="blog">
          <Layout>
            <div className="blog__list">
              <h3 className="blog__subtitle">RECENT POSTS</h3>{" "}
              {data.allMarkdownRemark.edges.map((edge, index) => {
                return (
                  <div key={index}>
                    <Link to={edge.node.fields.slug}>
                      <h1 className="blog__title">
                        {edge.node.frontmatter.title}
                      </h1>
                    </Link>
                    <span className="blog__date">
                      {edge.node.frontmatter.date}
                    </span>{" "}
                    · <span>{edge.node.timeToRead} min read</span>
                    <Link to={edge.node.fields.slug}>
                      <p className="blog__excerpt">{edge.node.excerpt}</p>
                    </Link>
                    <hr />
                  </div>
                )
              })}
            </div>
          </Layout>
        </div>
      </div>
    </>
  )
}

export default BlogPage
