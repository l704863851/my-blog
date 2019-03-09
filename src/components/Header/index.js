import React from "react"
import { Link } from "gatsby";
import {
  StyleHeader
} from "./styles"

import Search from "../Search"

const searchIndices = [
  { name: `Posts`, title: `Blog Posts`, hitComp: `PostHit` },
]

const Header = () => (
    <StyleHeader id="header" className="flex justify-between">
      <div>
        <Link to="/">首页</Link>
        |
        <Link to="/blog">博客</Link>
        |
        <Link to="/tags">标签</Link>
      </div>
      <Search collapse indices={searchIndices} />
    </StyleHeader>
)

export default Header