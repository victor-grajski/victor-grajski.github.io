import React from "react"
import { Link } from "gatsby"

export default props => (
  <article
    className={`post-card ${props.postClass} ${
      props.node.frontmatter.thumbnail ? `with-image` : `no-image`
    }`}
    style={
      props.node.frontmatter.thumbnail && {
        backgroundImage: `url(${props.node.frontmatter.thumbnail.childImageSharp.fluid.src})`,
      }
    }
  >
    <Link to={props.node.fields.slug} className="post-card-link">
      <div className="post-card-content">
        <h2 className="post-card-title">
          {props.node.frontmatter.title || props.node.fields.slug}
        </h2>
        <h3 className="post-card-subtitle">
          {props.node.frontmatter.category}
        </h3>
        <h3 className="post-card-date">{props.node.frontmatter.date}</h3>
      </div>
    </Link>
  </article>
)
