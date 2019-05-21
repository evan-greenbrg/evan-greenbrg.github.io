import React from "react"
import { graphql, Link } from "gatsby"
import MDXRenderer from "gatsby-mdx/mdx-renderer"

import Layout from "../components/layout"
import ContentBox from "../components/content-box"
import Back from "../components/back-button"
import TitleBar from "../components/title-bar"

import "../pages/blog.css"

export default function Template({
    data,
}) {
    const { markdownRemark } = data
    const { frontmatter, html } = markdownRemark 
    return (
        <Layout>
            <ContentBox>
                <TitleBar title={frontmatter.title} dest={frontmatter.dest} />
                <div style={{
                    margin: `auto`,
                    textAlign: `left`,
                    paddingLeft: `2.5vw`,
                    width: `100%`,
                    marginTop: `-2vh`, 
                    marginBottom: `6vh`,
                }}>
                    <d>{frontmatter.date}</d>
                </div>
                <div
                    dangerouslySetInnerHTML={{ __html: html }}
                >
                </div>
            </ContentBox>
        </Layout>
    )
}

export const pageQuery = graphql`
    query($path: String!) {
        markdownRemark(frontmatter: { path: {eq: $path } }) {
            html
            frontmatter {
                date
                path
                title
                dest
            }
        }
    }
`
