import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "headshot.png" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  if (!data?.placeholderImage?.childImageSharp?.fluid) {
    return <div>Image not found</div>
  }

  return (
    <Img
      fluid={data.placeholderImage.childImageSharp.fluid}
      imgStyle={{ borderRadius: "100%" }}
      style={{ width: "250px", height: "250px" }}
    />
  )
}

export default Image
