import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const SEO = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          author
          keywords
          siteUrl
        }
      }
    }
  `)
  return (
    <Helmet>
      <html lang="en" />
      <title>{`${data.site.siteMetadata.title} `}</title>

      <meta property="og:title" content={`${data.site.siteMetadata.title}`} />
      <meta property="og:type" content="website" />
      <meta
        property="og:description"
        name="description"
        content={`${data.site.siteMetadata.description}`}
      />
      <meta name="keywords" content={`${data.site.siteMetadata.keywords}`} />
      <meta name="author" content={data.site.siteMetadata.author} />
      <meta
        property="og:url"
        name="url"
        content={data.site.siteMetadata.siteUrl}
      />
      <meta property="og:image" content="https://i.ibb.co/4Sq3yXS/devimg.png" />
    </Helmet>
  )
}

export default SEO
