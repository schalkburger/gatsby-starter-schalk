const path = require(`path`);
const { createFilePath } = require('gatsby-source-filesystem');
const { fmImagesToRelative } = require('gatsby-remark-relative-images');

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const result = await graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              templateKey
              path
            }
          }
        }
      }
    }
  `)

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  const posts = result.data.allMarkdownRemark.edges

  posts.forEach(edge => {
    const id = edge.node.id
    createPage({
      path: edge.node.fields.slug,
      component: path.resolve(
        `src/templates/${String(edge.node.frontmatter.templateKey)}.tsx`
      ),
      // additional data can be passed via context
      context: {
        id,
      },
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  fmImagesToRelative(node);

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
