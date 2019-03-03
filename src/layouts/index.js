import React from "react"
import PropTypes from "prop-types"
import "./index.css"
import "prismjs/plugins/line-numbers/prism-line-numbers.css"
import Header from "../components/Header"

const Layout = ({ children }) => (
  <>
    <Header />
    <div className="container mx-auto">
      <main>{children}</main>
    </div>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
