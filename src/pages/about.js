import React from "react"
import { graphql, StaticQuery } from "gatsby"
// import Img from "gatsby-image"

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
          <div className="post-content-body-content-container">
            <div className="post-content-body-content-header">
              <h5>Hi, I'm Victor.</h5>
            </div>

            {/* <figure className="kg-card kg-image-card">
              <Img
                fixed={data.smallPic.childImageSharp.fixed}
                className="kg-image"
              />
            </figure> */}

            <div className="post-content-body-content-content">
              <p>
                I'm a Design Engineer who uses code as a creative material to
                reveal novel, useful insights about how people work in order to
                converge on the right thing to build.
              </p>

              <p>
                Studying at Carnegie Mellon and UC Berkeley – as well as
                interning on Apple's Media Products Design team – helped me
                fully realize my passion for UX because I was able to bring my
                whole self into building products.
              </p>

              <p>
                Before continuing my education, I had the good fortune to work
                as a Product Manager at Graphiq and as a Knowledge Engineer on
                the Alexa team at Amazon by way of the Graphiq acquisition.
              </p>

              <p>
                Outside of work, in addition to being a musician, I love to
                surf, snowboard, road bike, and swim. I occasionally run.
                Slowly. So you won't find me signing up for an Ironman anytime
                soon!
              </p>
            </div>
          </div>
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
    smallPic: file(relativePath: { eq: "headshot.png" }) {
      childImageSharp {
        fixed(width: 300, quality: 100) {
          ...GatsbyImageSharpFixed
        }
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
