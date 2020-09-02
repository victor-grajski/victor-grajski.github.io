import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../utils/normalize.css"
import "../utils/css/screen.css"

const AboutPage = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle}>
      <SEO title="About" keywords={[`blog`, `gatsby`, `javascript`, `react`]} />

      <article className="post-content page-template no-image">
        <div className="post-content-body">
          <h2>Hi, I'm Victor Grajski.</h2>
          <p>
            I'm a developer, designer, Human-Computer Interaction Master's
            student at Carnegie Mellon, and musician.
          </p>

          <p>
            Through studying at Carnegie Mellon and interning at Apple as a
            software engineer on a product design team, I have fully realized my
            desire to be a Design Technologist because I can bring my whole self
            into the product development process, from listening and empathizing
            with users to building polished, beautiful products that address
            their pain points while maintaining feasibility and are mindful of
            business needs.
          </p>

          <p>
            Before transitioning to Carnegie Mellon, I had the good fortune to
            work as a Product Manager at Graphiq and as a Knowledge Engineer on
            the Alexa team at Amazon by way of the Graphiq acquisition.
          </p>

          <p>
            Outside of work, in addition to being a musician, I love to surf,
            snowboard, road bike, and swim. I occasionally run. Slowly. So you
            won't find me signing up for an Ironman anytime soon!
          </p>
        </div>
      </article>
    </Layout>
  )
}

const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    benchAccounting: file(
      relativePath: { eq: "bench-accounting-49909-unsplash.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <AboutPage location={props.location} data={data} {...props} />
    )}
  />
)
