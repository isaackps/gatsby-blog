import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ArticleTiles from "../components/templates/ArticleTiles"

const IndexPage = ({ data }) => {
  const { allMarkdownRemark } = data

  return (
    <Layout>
      <SEO title="Isaac Blog" />
      {allMarkdownRemark.edges.map((post, i) => (
        <ArticleTiles key={i} post={post.node.frontmatter} />
      ))}
    </Layout>
  )
}

export default IndexPage

export const AllBlogPostQuery = graphql`
  query AllBlogPost {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            title
            description
            tag
            path
            date
            thumbnail {
              childImageSharp {
                fixed(width: 300) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    }
  }
`
