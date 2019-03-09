import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/SEO"
import {
  StyledMarkdownContainer,
  StyledMarkdownLeft,
  StyledMarkdownCenter,
  StyledMarkdownRight,
} from "./styles.js"

export default ({ data }) => {
  const { markdownRemark } = data
  const { frontmatter, html, fields, excerpt, tableOfContents } = markdownRemark
  return (
    <div>
      <SEO
        title={frontmatter.title}
        description={frontmatter.description || excerpt || "nothin’"}
        pathname={fields.slug}
        article
      />
      <StyledMarkdownContainer>
        <StyledMarkdownLeft>
        </StyledMarkdownLeft>
        <StyledMarkdownCenter>
          <h1>{frontmatter.title}</h1>
          <h2>{frontmatter.date}</h2>
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </StyledMarkdownCenter>
        <StyledMarkdownRight>
          <div dangerouslySetInnerHTML={{ __html: tableOfContents }} />
        </StyledMarkdownRight>
      </StyledMarkdownContainer>
    </div>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      tableOfContents
      excerpt
      frontmatter {
        title
        description
        date(formatString: "LL", locale: "zh-cn")
      }
      fields {
        slug
      }
    }
  }
`
