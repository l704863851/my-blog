import React from "react"
import { Link } from "gatsby"
import {
  StyleFooter,
  StyleFixedFooter,
} from "./styles"

const Footer = () => (
    <StyleFooter id="footer" className="flex justify-between">
      <div>footer</div>
      <StyleFixedFooter>
        <Link to="#header">置顶</Link>
      </StyleFixedFooter>
    </StyleFooter>
)

export default Footer