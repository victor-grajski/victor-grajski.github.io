import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <article
          className={`post-content ${post.frontmatter.thumbnail || `no-image`}`}
        >
          <header className="post-content-header">
            <h1 className="post-content-title">{post.frontmatter.title}</h1>
          </header>

          {post.frontmatter.description && (
            <p class="post-content-excerpt">{post.frontmatter.description}</p>
          )}

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
                  <p class="post-content-overview-stat">
                    {post.frontmatter.role}
                  </p>
                )}
              </div>
              <div className="post-content-overview-stat-container">
                <p className="post-content-overivew-stats-header">Duration</p>

                {post.frontmatter.duration && (
                  <p class="post-content-overview-stat">
                    {post.frontmatter.duration}
                  </p>
                )}
              </div>
              <div className="post-content-overview-stat-container">
                <p className="post-content-overivew-stats-header">Year</p>

                {post.frontmatter.year && (
                  <p class="post-content-overview-stat">
                    {post.frontmatter.year}
                  </p>
                )}
              </div>
              <div className="post-content-overview-stat-container">
                <p className="post-content-overivew-stats-header">Tools</p>

                {post.frontmatter.tools && (
                  <p class="post-content-overview-stat">
                    {post.frontmatter.tools}
                  </p>
                )}
              </div>
            </div>
            <div className="post-content-overview-text-container">
              {post.frontmatter.overview && (
                <p class="post-content-overview-text">
                  {post.frontmatter.overview}
                </p>
              )}

              <a
                className="project-link-button"
                href={post.frontmatter.link}
                target="_blank"
              >
                View Project on{" "}
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

          <footer className="post-content-footer">
            {/* There are two options for how we display the byline/author-info.
        If the post has more than one author, we load a specific template
        from includes/byline-multiple.hbs, otherwise, we just use the
        default byline. */}
          </footer>
        </article>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
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
