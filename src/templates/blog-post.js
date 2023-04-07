import React, { useState } from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import CryptoJS from "crypto-js"
import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogPostTemplate = props => {
  const post = props.data.markdownRemark
  const siteTitle = props.data.site.siteMetadata.title
  const next = props.pageContext.next
  const prev = props.pageContext.previous

  if (post.frontmatter.noIndex) {
    const crypted = CryptoJS.AES.encrypt(
      JSON.stringify(post),
      `${process.env.GATSBY_PORTFOLIO_PIECE_PASSWORD}`
    ).toString()
  }
  // the decrypted content
  const [decrypted, setDecrypted] = useState("")
  // save user input
  const [password, setPassword] = useState("")

  return (
    <Layout location={props.location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
        noIndex={post.frontmatter.noIndex}
      />
      <article
        className={`post-content ${post.frontmatter.thumbnail || `no-image`}`}
      >
        <header className="post-content-header">
          <h1 className="post-content-title">{post.frontmatter.title}</h1>
        </header>

        {post.frontmatter.description && (
          <p className="post-content-excerpt">
            {!post.frontmatter.noIndex || decrypted
              ? post.frontmatter.description
              : "Please enter password to view this piece"}
          </p>
        )}

        {!post.frontmatter.noIndex || decrypted ? (
          <div>
            {post.frontmatter.thumbnail && (
              <div className="post-content-image">
                <Img
                  className="kg-image"
                  fluid={post.frontmatter.thumbnail.childImageSharp.fluid}
                  alt={post.frontmatter.title}
                />
              </div>
            )}

            <div className="post-content-overview-container">
              <div className="post-content-overview-stats-container">
                <div className="post-content-overview-stat-container">
                  <p className="post-content-overivew-stats-header">Role</p>

                  {post.frontmatter.role && (
                    <p className="post-content-overview-stat">
                      {post.frontmatter.role}
                    </p>
                  )}
                </div>
                <div className="post-content-overview-stat-container">
                  <p className="post-content-overivew-stats-header">Duration</p>

                  {post.frontmatter.duration && (
                    <p className="post-content-overview-stat">
                      {post.frontmatter.duration}
                    </p>
                  )}
                </div>
                <div className="post-content-overview-stat-container">
                  <p className="post-content-overivew-stats-header">Year</p>

                  {post.frontmatter.year && (
                    <p className="post-content-overview-stat">
                      {post.frontmatter.year}
                    </p>
                  )}
                </div>
                <div className="post-content-overview-stat-container">
                  <p className="post-content-overivew-stats-header">Tools</p>

                  {post.frontmatter.tools && (
                    <p className="post-content-overview-stat">
                      {post.frontmatter.tools}
                    </p>
                  )}
                </div>
              </div>
              <div className="post-content-overview-text-container">
                {post.frontmatter.overview && (
                  <p className="post-content-overview-text">
                    {post.frontmatter.overview}
                  </p>
                )}

                <a
                  className="project-link-button"
                  href={post.frontmatter.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  {post.frontmatter.linkSource && (
                    <span>{post.frontmatter.linkSource}</span>
                  )}
                </a>
              </div>
            </div>

            <div
              className="post-content-body"
              dangerouslySetInnerHTML={{ __html: post.html }}
            />
          </div>
        ) : (
          <div
            style={{ display: "flex", gap: "16px", flexDirection: "column" }}
          >
            <input
              type="password"
              value={password}
              placeholder="Password"
              style={{ width: "50%" }}
              onChange={e => setPassword(e.target.value)}
              onKeyUp={e => {
                if (e.key === "Enter") {
                  try {
                    setDecrypted(
                      CryptoJS.AES.decrypt(
                        JSON.stringify(post),
                        password
                      ).toString()
                    )
                  } catch (e) {
                    alert("password error")
                  }
                }
              }}
            />
            <ul className="actions">
              <li>
                <div
                  className="button primary"
                  onClick={() => {
                    try {
                      setDecrypted(
                        CryptoJS.AES.decrypt(
                          JSON.stringify(post),
                          password
                        ).toString()
                      )
                    } catch (e) {
                      alert("password error")
                    }
                  }}
                >
                  Submit
                </div>
              </li>
            </ul>
          </div>
        )}

        <footer className="post-content-footer">
          <div className="post-content-footer-prev">
            {prev && (
              <Link to={prev.fields.slug} style={{ maxWidth: "25%" }}>
                <strong>Previous Project</strong> <br />
                {prev.frontmatter.title}
              </Link>
            )}
          </div>

          <div className="post-content-footer-next">
            {next && (
              <Link to={next.fields.slug} style={{ maxWidth: "25%" }}>
                <strong>Next Project</strong> <br />
                {next.frontmatter.title}
              </Link>
            )}
          </div>
        </footer>
      </article>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
        siteUrl
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        overview
        role
        duration
        year
        tools
        link
        linkSource
        noIndex
        thumbnail {
          childImageSharp {
            fluid(maxWidth: 1360) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
