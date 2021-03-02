import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Logo from "../images/isaac-logo.png"

const Header = ({ siteTitle }) => (
  <header className="mb-6">
    <div className="py-4 px-12 max-w-screen-xl my-0 mx-auto">
      <h1 className="m-0">
        <div className="flex items-center">
          <Link to="/" className="text-black no-underline">
            <img
              src={Logo}
              className="h-8 w-8 rounded bg-black opacity-20 p-1 mr-4 my-auto"
              alt="logo"
            />
            {/* <div className="font-mono">{siteTitle}</div> */}
          </Link>
        </div>
      </h1>
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
