import React from "react"
import { Link } from "gatsby"

export default props => (
  <article
    className={`post-card ${props.postClass} ${
      props.node.frontmatter.thumbnail ? `with-image` : `no-image`
    }`}
  >
    <Link to={props.node.fields.slug} className="post-card-link">
      <div className="post-card-content">
        <div
          className="post-card-text"
          style={{
            background: props.node.frontmatter.color,
          }}
        >
          <h2 className="post-card-title">
            {props.node.frontmatter.title || props.node.fields.slug}
          </h2>
          <h3 className="post-card-subtitle">
            {props.node.frontmatter.shortDescription}
          </h3>
          <div className="post-card-cta">
            View Project{" "}
            {props.node.frontmatter.noIndex && "(Password Protected)"}
          </div>
        </div>
        <div className="post-card-image-container">
          <img
            className="post-card-image"
            alt="main project"
            src={
              props.node.frontmatter.thumbnailTransparent.childImageSharp.fluid
                .src
            }
          />
        </div>
      </div>
    </Link>
  </article>
)
