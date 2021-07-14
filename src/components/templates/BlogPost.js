import { graphql } from "gatsby"
import Img from "gatsby-image"
import React from "react"
import Layout from "../layout"
import SEO from "../seo"

const BlogPost = ({ data }) => {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark

  console.log(html)

  return (
    <Layout>
      <SEO title={`${frontmatter.title}`} />
      <div className="flex flex-col items-center">
        <div className="max-w-screen-sm">
          <h2 className="font-serif text-4xl capitalize font-medium">
            {frontmatter.title}
          </h2>
          <div className="font-sans text-gray-500 text-xl">
            {frontmatter.description}
          </div>
        </div>
        <Img
          className="my-8 w-full"
          fixed={frontmatter.banner.childImageSharp.fixed}
        />
        <div
          // className="max-w-screen-sm"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </Layout>
  )
}

export default BlogPost

export const BlogPostTemplateQuery = graphql`
  query BlogPostTemplateQuery($slug: String) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      fields {
        slug
      }
      html
      frontmatter {
        title
        description
        tag
        banner {
          childImageSharp {
            fixed(width: 1280) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }
`
