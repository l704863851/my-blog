import React from "react"
import { graphql, Link } from "gatsby"

export default ({ pageContext, data }) => {
  const { currentPage, numPages } = pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage =
    currentPage - 1 === 1 ? `/blog/` : `/blog/` + (currentPage - 1).toString()
  const nextPage = `/blog/` + (currentPage + 1).toString()
  return (
    <div className="flex flex-col">
      <div className="flex-auto">
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <Link to={node.fields.slug}>
              <h3>
                {node.frontmatter.title}
                <span>— {node.frontmatter.date}</span>
              </h3>
              <p>{node.excerpt}</p>
            </Link>
          </div>
        ))}
      </div>
      <div className="flex justify-between text-2xl">
        {isFirst ? (
          <span className="text-grey">第一页</span>
        ) : (
          <Link to={prevPage} rel="prev">
            上一页
          </Link>
        )}
        {isLast ? (
          <span className="text-grey">最后一页</span>
        ) : (
          <Link to={nextPage} rel="next">
            下一页
          </Link>
        )}
      </div>
    </div>
  )
}

export const query = graphql`
  query blogPageQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          id
          excerpt
          frontmatter {
            title
            date(
              formatString: "LL",
              locale: "zh-cn"
            )
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
