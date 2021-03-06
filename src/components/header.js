import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import './header.css'

const Header = ({ siteTitle }) => (
  <header className="Header">
    <div className="HeaderGroup">
      <Link to="/">
      <img src={require('../images/logo-designcode.svg')} alt="" width="30" /></Link>
      <Link to="/courses">Courses</Link>
      <Link to="/download">Download</Link>
      <Link to="/workshops">Workshops</Link>
      <Link to="/buy"> <button>Buy</button> </Link>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
