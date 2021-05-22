import React from "react"
import { graphql, StaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PostCard from "../components/postCard"

// import "../utils/global.scss"
import "../utils/normalize.css"
import "../utils/css/screen.css"
// TODO: hero description margin
const BlogIndex = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges
  let postCounter = 0

  return (
    <Layout title={siteTitle}>
      <SEO
        title="Portfolio"
        keywords={[`blog`, `gatsby`, `javascript`, `react`]}
      />
      {/* <Bio /> */}
      {data.site.siteMetadata.description && (
        <header className="page-head">
          {/* <h1 className="page-head-title">Hi, I'm Victor Grajski.</h1> */}
          <h6>
            I'm a{" "}
            <a
              className="hero-link"
              target="_blank"
              rel="noreferrer"
              href="https://github.com/victor-grajski"
            >
              Design Technologist
            </a>
            , Product Designer, HCI Master's student at Carnegie Mellon, and{" "}
            <a
              className="hero-link"
              target="_blank"
              rel="noreferrer"
              href="https://soundcloud.com/animistttt"
            >
              musician
            </a>
            . At the risk of sounding cliché, I create technologies that put
            people first.
          </h6>
          {/* <h6>{data.site.siteMetadata.description}</h6> */}
          {/* <h7>Fall 2020 portfolio pieces forthcoming!</h7> */}
        </header>
      )}
      <div className="post-feed">
        {posts.map(({ node }) => {
          postCounter++
          return (
            <PostCard
              key={node.fields.slug}
              count={postCounter}
              node={node}
              postclassName={`post`}
            />
          )
        })}
      </div>
    </Layout>
  )
}

const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___order], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM YYYY")
            title
            description
            category
            color
            overview
            shortDescription
            thumbnail {
              childImageSharp {
                fluid(maxWidth: 1360) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            thumbnailTransparent {
              childImageSharp {
                fluid(maxWidth: 1360) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`

export default props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <BlogIndex location={props.location} props data={data} {...props} />
    )}
  />
)
