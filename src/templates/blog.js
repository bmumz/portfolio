import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/ui/layout"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faLongArrowAltLeft,
  faLongArrowAltRight,
} from "@fortawesome/free-solid-svg-icons"
import { faClock } from "@fortawesome/free-regular-svg-icons"

export const query = graphql`
  query BlogPost($slug: String) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date(fromNow: true)
        description
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
          icon: <FontAwesomeIcon icon={faLongArrowAltRight} />,
        }
      : ""

  const prevData =
    prev !== null
      ? {
          url: `/blog/${prev.fields.slug}`,
          title: prev.frontmatter.title,
          icon: <FontAwesomeIcon icon={faLongArrowAltLeft} />,
        }
      : ""

  return (
    <>
      <Layout>
        <div className="blog">
          <div className="blog__post">
            <h1>{blogData.title}</h1>

            <div>
              {" "}
              <span className="blog__date">{blogData.date}</span> ·{" "}
              <span>
                <FontAwesomeIcon icon={faClock} /> {post.timeToRead} min read
              </span>
            </div>
            <div className="blog__tags">
              {blogData.tags.map((tag, index) => (
                <div key={index} className="blog__tag">
                  {tag}
                </div>
              ))}
            </div>

            {blogData.featuredImage && (
              <Img
                fluid={blogData.featuredImage.childImageSharp.fluid}
                imgStyle={{ borderRadius: "5px" }}
              />
            )}

            <div
              className="blog__body"
              dangerouslySetInnerHTML={{ __html: post.html }}
            />
            <div className="blog__nav">
              {prevData && (
                <div className="blog__prev">
                  <span>
                    <p>Previous Post:</p>
                    <Link to={prevData.url}>
                      <h3>
                        {prevData.icon} {prevData.title}
                      </h3>
                    </Link>
                  </span>
                </div>
              )}

              {nextData && (
                <div className="blog__next">
                  <span>
                    <p>Next Post:</p>
                    <Link to={nextData.url}>
                      <h3>
                        {nextData.icon} {nextData.title}
                      </h3>
                    </Link>
                  </span>
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
