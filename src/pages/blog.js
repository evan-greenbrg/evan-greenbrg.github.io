import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "@emotion/styled" 
import MDXRenderer from "gatsby-mdx/mdx-renderer"

import ContentBox from "../components/content-box"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Back from "../components/back-button"
import TitleBar from "../components/title-bar"

import "./blog.css"

const Line = ({ title, date, path, excerpt }) => (
    <Link 
        to={path}
        className="blog_post"
    >
        <div style={{
            width: `70%`,
            height: `30px`,
            textAlign: `left`,
            paddingLeft: `2.5vw`,
            margin: `auto`,
            overflow: `hidden`,
            whiteSpace: `nowrap`,
            textOverflow: `ellipsis`,
        }}>
            <strong>{title.toUpperCase()} </strong>
            - <ex>{excerpt}</ex>
        </div>
        <div style={{
            width: `30%`,
            textAlign: `right`,
            paddingRight: `2.5vw`,
            margin: `auto`,
        }}>
            {date}
        </div>
    </Link>
)

function getBlogPosts(data) {
    const postArray = [];
    data.blogs.edges.forEach(item =>
        postArray.push(
            <Line 
                title = {item.node.frontmatter.title}
                date = {item.node.frontmatter.date}
                path = {item.node.frontmatter.path}
                excerpt = {item.node.excerpt}
            />
        )
    );
    return postArray
}

const BlogPage = ({ data }) => (
    <Layout>
        <ContentBox>
            <TitleBar title="Blog" dest="/" />
            <div style={{
                marginBottom: `5vh`,
                textAlign: `center`,
            }}>
                <name>Posts:</name>
            </div>
            <div style={{
                margin: `10px`,
            }}>
                {getBlogPosts(data)}
            </div>
        </ContentBox>
        <SEO title="Blog" keywords={[`gatsby`, `application`, `react`, 'geology', 'graduate', 'geography']} />
    </Layout>
)

export default BlogPage

export const query = graphql`
  query {
	blogs: allMarkdownRemark (
		filter: {
			frontmatter: {type: {eq: "blog"}}
		}
		sort: { order: DESC, fields: [frontmatter___date] }
	) {
		edges {
			node {
				frontmatter {
					title
					date(formatString: "MMMM DD, YYYY")
                    path
				}
                excerpt
			}
		}
	}
  }
`
