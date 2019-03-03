import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/SEO"

export default ({ data }) => {
  const { markdownRemark } = data
  const { frontmatter, html, fields, excerpt } = markdownRemark
  return (
    <div>
      <SEO
        title={frontmatter.title}
        description={frontmatter.description || excerpt || 'nothin’'}
        pathname={fields.slug}
        article
      />
      <h1>{frontmatter.title}</h1>
      <h2>{frontmatter.date}</h2>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt
      frontmatter {
        title
        description
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
`
