import React from "react"
import { graphql, Link } from "gatsby"
import MDXRenderer from "gatsby-mdx/mdx-renderer"

import Layout from "../components/layout"
import ContentBox from "../components/content-box"
import Back from "../components/back-button"
import TitleBar from "../components/title-bar"

export default function Template({
    data,
}) {
    const { markdownRemark } = data
    const { frontmatter, html } = markdownRemark 
    return (
        <Layout>
            <ContentBox>
                <TitleBar title={frontmatter.title} dest={frontmatter.dest} />
                <h2>{frontmatter.date}</h2>
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
