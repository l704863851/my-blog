const path = require("path")
const _ = require("lodash")
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if(node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date]}
          limit: 1000
        ) {
          edges {
            node {
              frontmatter {
                tags
              }
              fields {
                slug
              }
            }
          }
        }
      }
    `).then(result => {
      if (result.errors) {
        return reject(result.errors)
      }
      const posts = result.data.allMarkdownRemark.edges
      const postsPerPage = 6
      const numPages = Math.ceil(posts.length / postsPerPage)

      Array.from({ length: numPages }).forEach((_, i) => {
        createPage({
          path: i === 0 ? `/blog` : `/blog/${i + 1}`,
          component: path.resolve("./src/templates/blog-list.js"),
          context: {
            limit: postsPerPage,
            skip: i * postsPerPage,
            numPages,
            currentPage: i + 1
          },
        })
      })

      posts.forEach(({ node }) => {
        createPage({
          path: node.fields.slug,
          component: path.resolve(`./src/templates/blog-post.js`),
          context: {
            slug: node.fields.slug,
          }
        })
      })

      let tags = []
      _.each(posts, edge => {
        if (_.get(edge, "node.frontmatter.tags")) {
          tags = tags.concat(edge.node.frontmatter.tags)
        }
      })
      tags = _.uniq(tags)

      tags.forEach(tag => {
        createPage({
          path: `/tags/${_.kebabCase(tag)}/`,
          component: path.resolve("src/templates/tags.js"),
          context: {
            tag
          }
        })
      })

      resolve()
    })
  })
}