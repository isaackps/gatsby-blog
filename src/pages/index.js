import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ArticleTiles from "../components/templates/ArticleTiles"
import ContactInfo from "../components/templates/ContactInfo"
import gitHubLogo from "../images/github-logo.png"
import linkedinLogo from "../images/linkedin-logo.svg"

const contactInfos = [
  {
    logo: gitHubLogo,
    title: "GitHub",
    description: "My github repositories",
    link: "https://github.com/isaackps",
  },
  {
    logo: linkedinLogo,
    title: "LinkedIn",
    description: "Connect with me via Linkedin",
    link: "https://www.linkedin.com/in/isaackoh89/",
  },
]

const IndexPage = ({ data }) => {
  const { allMarkdownRemark } = data

  return (
    <Layout>
      <SEO title="Isaac Blog" />
      <div className="flex">
        <div className="w-full lg:w-2/3">
          {allMarkdownRemark.edges.map((post, i) => (
            <ArticleTiles key={i} post={post.node.frontmatter} />
          ))}
        </div>
        <div className="relative w-1/3 pl-24 hidden lg:block">
          <div className="w-full bg-gray-100 rounded h-auto p-4">
            <div className="font-bold text-gray-800 uppercase mb-4">
              About Me
            </div>
            {contactInfos.map(info => (
              <ContactInfo info={info} />
            ))}
          </div>
        </div>
      </div>
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
