const { createFilePath } = require(`gatsby-source-filesystem`)
const path = require("path")
const fs = require("fs")
const mkdirp = require("mkdirp")

/**
 * Remove the / from the beginning and the end of the sent path
 *
 * @param {String} path
 * @returns String return the path with / at the beginning
 */
const organizeSlash = (path) => {
  return path ? `/${path.replace(/^\/|\/$/g, "")}` : ""
}

// Initializing required directories
exports.onPreBootstrap = ({ store, reporter }) => {
  const { program } = store.getState()
  const dirs = [
    path.join(program.directory, "src/experience"),
    path.join(program.directory, "src/projects"),
    path.join(program.directory, "src/public"),
    path.join(program.directory, "src/images"),
    path.join(program.directory, "src/utils"),
  ]
  dirs.forEach((dir) => {
    if (!fs.existsSync(dir)) {
      reporter.log(`creating the ${dir} directory`)
      mkdirp.sync(dir)
    }
  })
}

// Add the basePath to each theme page
exports.onCreatePage = ({ page, actions }, themeOptions) => {
  let { basePath } = themeOptions
  const components = [
    "ComponentAboutMe",
    "ComponentExperience",
    "ComponentIndex",
    "ComponentProjects",
    "ComponentPublic",
  ]

  if (
    basePath &&
    /\/src\/pages/g.test(page.componentPath) &&
    components.includes(page.internalComponentName)
  ) {
    const { createPage, deletePage } = actions
    deletePage(page)

    basePath = organizeSlash(basePath)
    page.path = `${basePath}${page.path}`

    createPage({
      ...page,
    })
  }
}

let created403 = false
exports.onCreateNode = ({ node, getNode, actions }, themeOptions) => {
  if (!created403 && node.path === `/403/`) {
    actions.createPage({
      ...node,
      path: `/403.html`,
    })
    created403 = true
  }

  const { createNodeField } = actions
  let { basePath } = themeOptions
  basePath = organizeSlash(basePath)
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({
      node,
      getNode,
      basePath: `pages`,
    })
    createNodeField({
      node,
      name: `slug`,
      value: `${basePath}${slug}`,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: require.resolve(`./src/templates/job.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.fields.slug,
      },
    })
  })
}
