import React from "react"
import "./index.css"
import "prismjs/plugins/line-numbers/prism-line-numbers.css"
import Header from "../Header"
import Transition from "../Transition"
import Footer from "../Footer"
import {
  StyleLayout,
} from "./styles"

if (typeof window !== 'undefined') {
  require("smooth-scroll")('a[href*="#"]', { offset: 10 });
}

const Layout = ({ children, location }) => (
  <StyleLayout>
    <Header />
    <Transition location={location}>
      <div className="container mx-auto">
        <main>{children}</main>
      </div>
    </Transition>
    <Footer/>
  </StyleLayout>
)

export default Layout
