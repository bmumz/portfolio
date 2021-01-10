import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faChevronCircleRight,
  faChevronCircleLeft,
} from "@fortawesome/free-solid-svg-icons"

export const query = graphql`
  query BlogPost($slug: String) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date(fromNow: true)
        tags
        featuredImage {
          childImageSharp {
            fluid(quality: 100, maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      html
      timeToRead
    }
  }
`

const Blog = ({ data, pageContext }) => {
  const post = data.markdownRemark
  const blogData = post.frontmatter

  // next/prev pagination
  const next = pageContext.next
  const prev = pageContext.prev

  const nextData =
    next !== null
      ? {
          url: `/blog/${next.fields.slug}`,
          title: next.frontmatter.title,
        }
      : ""

  const prevData =
    prev !== null
      ? {
          url: `/blog/${prev.fields.slug}`,
          title: prev.frontmatter.title,
        }
      : ""

  console.log("next", nextData.url)
  console.log("prev", prevData.url)

  return (
    <>
      <Layout>
        <div className="blog">
          <div className="blog__post">
            <h1 className="blog__title">{blogData.title}</h1>
            {blogData.featuredImage && (
              <Img fluid={blogData.featuredImage.childImageSharp.fluid} />
            )}
            <div className="blog__tags">
              {blogData.tags.map((tag, index) => (
                <div key={index} className="blog__tag">
                  {tag}
                </div>
              ))}
            </div>
            <div>
              {" "}
              <span className="blog__date">{blogData.date}</span> ·{" "}
              <span>{post.timeToRead} min read</span>
            </div>

            <div
              className="blog__body"
              dangerouslySetInnerHTML={{ __html: post.html }}
            />
            <div className="blog__nav">
              {prevData && (
                <div className="blog__prev">
                  <Link to={prevData.url}>
                    <FontAwesomeIcon
                      icon={faChevronCircleLeft}
                      className="blog__icon"
                    />
                  </Link>
                  Previous:
                  <Link to={prevData.url}>
                    <h3>{prevData.title}</h3>
                  </Link>
                </div>
              )}

              {nextData && (
                <div className="blog__next">
                  <span>Next:</span>

                  <Link to={nextData.url}>
                    <FontAwesomeIcon
                      icon={faChevronCircleRight}
                      className="blog__icon"
                    />
                    <h3>{nextData.title}</h3>{" "}
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default Blog
