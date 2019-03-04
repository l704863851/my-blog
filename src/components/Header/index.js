import React from "react"
import { Link } from "gatsby";

import Search from "../Search"

const searchIndices = [
  { name: `Posts`, title: `Blog Posts`, hitComp: `PostHit` },
]

const Header = () => (
    <div className="flex justify-between">
      <div>
        <Link to="/blog">博客</Link>
        |
        <Link to="/tags">标签</Link>
      </div>
      <Search collapse indices={searchIndices} />
    </div>
)

export default Header