import React from "react"
import {
  StyleFooter,
  StyleFixedFooter,
} from "./styles"

const Footer = () => (
    <StyleFooter id="footer" className="flex justify-between">
      <div>footer</div>
      <StyleFixedFooter>
        <a href="#header">置顶</a>
      </StyleFixedFooter>
    </StyleFooter>
)

export default Footer