import React from "react"
import { Link } from "gatsby"
// import useSiteMetadata from '../hooks/use-site-metadata';

const Layout = props => {
  const { title, children, location } = props
  const [toggleNav, setToggleNav] = React.useState(false)
  // const { url } = useSiteMetadata();
  // console.log(url)

  return (
    <div className={`site-wrapper ${toggleNav ? `site-head-open` : ``}`}>
      <header className="site-head">
        <div className="site-head-container">
          <a
            className="nav-burger"
            href={`#`}
            onClick={() => setToggleNav(!toggleNav)}
          >
            <div
              className="hamburger hamburger--collapse"
              aria-label="Menu"
              role="button"
              aria-controls="navigation"
            >
              <div className="hamburger-box">
                <div className="hamburger-inner" />
              </div>
            </div>
          </a>

          <div className="site-head-left">
            <Link className="site-head-logo" to={`/`}>
              {title}
            </Link>
          </div>
          <nav id="swup" className="site-head-right">
            <ul className="nav" role="menu">
              <li
                className={`nav-home ${
                  location && location.pathname === "/" ? `nav-current` : ``
                }`}
                role="menuitem"
              >
                <Link to={`/`}>Work</Link>
              </li>
              <li className="nav-about" role="menuitem">
                <Link to={`/about`}>About</Link>
              </li>
              <li className="nav-elements" role="menuitem">
                <a
                  href="https://github.com/victor-grajski"
                  title="GitHub"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </li>
              <li className="nav-elements" role="menuitem">
                <a
                  id="last-nav-element"
                  href="https://drive.google.com/file/d/1o7P6sPWuRYm1AmDkpq3dlovlq4A25XXK/view?usp=sharing"
                  title="Resume"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>

          {/* <nav id="swup" class="site-head-left">
            <ul className="nav" role="menu">
              <li className="nav-home nav-current" role="menuitem">
                <Link to={`/`}>Work</Link>
              </li>
              <li className="nav-about" role="menuitem">
                <Link to={`/about`}>About</Link>
              </li>
              <li className="nav-elements" role="menuitem">
                <a
                  href="https://drive.google.com/file/d/1UMUI6LrbNCM7ONI3cm1CvtenSWgWlCod/view?usp=sharing"
                  title="Resume"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav> */}

          {/* <div className="site-head-center">
            <Link className="site-head-logo" to={`/`}>
              {title}
            </Link>
          </div> */}

          {/* <div className="site-head-right">
            <div className="social-links">
              <a
                href="https://www.linkedin.com/in/victor-grajski/"
                title="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/victor-grajski"
                title="GitHub"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <a
                href="https://soundcloud.com/animistttt"
                title="SoundCloud"
                target="_blank"
                rel="noopener noreferrer"
              >
                SoundCloud
              </a>
            </div>
          </div> */}
        </div>
      </header>
      <main id="site-main" className="site-main">
        <div id="swup" className="transition-fade">
          {children}
        </div>
      </main>
      <footer className="site-foot">
        &copy; {new Date().getFullYear()} <Link to={`/`}>{title}</Link> &mdash;
        Built with{" "}
        <a
          href="https://gatsbyjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Gatsby
        </a>
      </footer>
    </div>
  )
}

export default Layout
