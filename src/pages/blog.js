import React, { useState } from "react"
import Layout from "../components/ui/layout"
import Search from "../components/ui/search"
import { Link } from "gatsby"
import { graphql } from "gatsby"

const BlogPage = props => {
  let emptyQuery = ""

  const [searchFilter, setSearchFilter] = useState({
    filteredData: [],
    query: emptyQuery,
  })

  const { data } = props
  const allPosts = data.allMarkdownRemark.edges || []

  const handleSearchQuery = event => {
    const query = event.target.value

    const filteredData = allPosts.filter(post => {
      const { title, description, tags } = post.node.frontmatter

      const searchValue = query.toLowerCase()
      const titleValue = title.toLowerCase()
      const descriptionValue = description.toLowerCase()

      return (
        titleValue.includes(searchValue) ||
        descriptionValue.includes(searchValue) ||
        (tags && tags.join(" ").toLowerCase().includes(searchValue))
      )
    })

    setSearchFilter({
      query,
      filteredData,
    })
  }

  const { filteredData, query } = searchFilter
  const hasSearchResults = (filteredData && query !== emptyQuery) || null
  const posts = hasSearchResults ? filteredData : allPosts

  return (
    <Layout>
      <div className="blog">
        <Search onChange={handleSearchQuery} />
        <div className="blog__list">
          {posts.map(({ node }) => {
            const { timeToRead } = node
            const { slug } = node.fields
            const { tags, title, date, description } = node.frontmatter

            return (
              <div key={slug}>
                <Link to={slug}>
                  <h1 className="blog__title">{title}</h1>
                </Link>
                <span className="blog__date">{date}</span> ·{" "}
                <span>{timeToRead} min read</span>
                <Link to={slug}>
                  <h3 className="blog__excerpt">{description}</h3>
                </Link>
                <div className="blog__tags">
                  {tags.map((tag, index) => {
                    return (
                      <span className="blog__tag" key={index}>
                        {tag}
                      </span>
                    )
                  })}
                </div>
                <hr />
              </div>
            )
          })}
        </div>
      </div>
    </Layout>
  )
}

export default BlogPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: frontmatter___date }) {
      edges {
        node {
          frontmatter {
            title
            date(fromNow: true)
            description
            tags
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
`
