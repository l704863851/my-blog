import React from "react"

import Search from "../Search"

const searchIndices = [
  { name: `Posts`, title: `Blog Posts`, hitComp: `PostHit` },
]

const Header = () => (
    <Search collapse indices={searchIndices} />
)

export default Header