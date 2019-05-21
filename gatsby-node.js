const path = require("path")

exports.createPages = ({ actions, graphql }) => {
    const { createPage } = actions

    const projectTemplate = path.resolve(`src/templates/projectTemplate.js`)
    const blogTemplate = path.resolve(`src/templates/blogTemplate.js`)

    return graphql(`
        {
            projects: allMarkdownRemark (
                filter: {
                    frontmatter: {type: {eq: "project"}}
                }
            ) {
                edges {
                    node {
                        frontmatter {
                            path
                        }
                    }
                }
            },
            blogs: allMarkdownRemark (
                filter: {
                    frontmatter: {type: {eq: "blog"}}
                }
            ) {
                edges {
                    node {
                        frontmatter {
                            path
                        }
                    }
                }
            }
        }
    `).then(result => {
        if (result.errors) {
            return Promise.reject(result.errors)
        }

        result.data.projects.edges.forEach(({ node }) => {
            createPage({
                path: node.frontmatter.path,
                component: projectTemplate,
                context: {},
            })
        })
        result.data.blogs.edges.forEach(({ node }) => {
            createPage({
                path: node.frontmatter.path,
                component: blogTemplate,
                context: {},
            })
        })
    })
}
