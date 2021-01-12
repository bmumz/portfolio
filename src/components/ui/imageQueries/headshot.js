import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const HeadshotImage = () => {
  const data = useStaticQuery(graphql`
    query {
      headshot: file(relativePath: { eq: "headshot.jpg" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  if (!data?.headshot?.childImageSharp?.fluid) {
    return <div>Image not found</div>
  }

  return (
    <Img
      fluid={data.headshot.childImageSharp.fluid}
      imgStyle={{
        borderRadius: "100%",
      }}
    />
  )
}

export default HeadshotImage
