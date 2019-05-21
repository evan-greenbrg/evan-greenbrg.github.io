import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "@emotion/styled" 

import ContentBox from "../components/content-box"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Back from "../components/back-button"
import GetProject from "../components/project-button"
import TitleBar from "../components/title-bar"

import "./projects.css"

const Image = styled(Img)`
  z-index: -3;
`

const ButtonText = styled.div`
	text-align: left;
	height: 10px;
	margin-top: 10px;
	margin-left: 5%;
`

const IndexPage = ({ data }) => (
    <Layout>
    <ContentBox>
        <TitleBar dest="/" />
		<div className="grid-container">
            <div className="col-1">
                <div className="row">
                    <GetProject
                        path = {data.bighorn.frontmatter.path} 
                        title = {data.bighorn.frontmatter.title}
                        image = {data.brazosImage.childImageSharp.fluid}
                    />
                </div>
            </div>
            <div className="col-2">
                <div className="row">
                    <GetProject
                        path = {data.waterfalls.frontmatter.path} 
                        title = {data.waterfalls.frontmatter.title}
                        image = {data.waterfallImage.childImageSharp.fluid}
                    />
                </div>
            </div>
            <div className="col-3">
                <div className="row">
                    <GetProject
                        path = {data.arizona.frontmatter.path} 
                        title = {data.arizona.frontmatter.title}
                        image = {data.sandImage.childImageSharp.fluid}
                    />
                </div>
            </div>
		</div>
    </ContentBox>
    <SEO title="Research" keywords={[`gatsby`, `application`, `react`, 'geology', 'graduate', 'geography']} />
  </Layout>
)

export default IndexPage

export const query = graphql`
  query {
    brazosImage: file(relativeDirectory: {eq: "research/button_icons"}, name: {eq: "brazos"}) {
      childImageSharp {
          fluid(
            maxWidth: 50000,
            maxHeight: 50000,
            cropFocus: SOUTH
          ) {
            ...GatsbyImageSharpFluid
        }
      }
    },
    modelImage: file(relativeDirectory: {eq: "research/button_icons"}, name: {eq: "model_cell"}) {
      childImageSharp {
          fluid(
            maxWidth: 50000,
            maxHeight: 50000,
            cropFocus: SOUTH
          ) {
            ...GatsbyImageSharpFluid
        }
      }
    },
    sandImage: file(relativeDirectory: {eq: "research/button_icons"}, name: {eq: "sandbody"}) {
      childImageSharp {
          fluid(
            maxWidth: 50000,
            maxHeight: 50000,
            cropFocus: SOUTH
          ) {
            ...GatsbyImageSharpFluid
        }
      }
    },
    sfmImage: file(relativeDirectory: {eq: "research/button_icons"}, name: {eq: "sfm"}) {
      childImageSharp {
          fluid(
            maxWidth: 50000,
            maxHeight: 50000,
            cropFocus: SOUTH
          ) {
            ...GatsbyImageSharpFluid
        }
      }
    },
    waterfallImage: file(relativeDirectory: {eq: "research/button_icons"}, name: {eq: "waterfall"}) {
      childImageSharp {
          fluid(
            maxWidth: 50000,
            maxHeight: 50000,
            cropFocus: SOUTH
          ) {
            ...GatsbyImageSharpFluid
        }
      }
    },
    arizona: markdownRemark(frontmatter: { title: { eq: "Arizona Strip" } }) {
		frontmatter {
            path
            title
		}
	},
    bighorn: markdownRemark(frontmatter: { title: { eq: "Bighorn" } }) {
		frontmatter {
            path
            title
		}
	},
    waterfalls: markdownRemark(frontmatter: { title: { eq: "Waterfalls" } }) {
		frontmatter {
            path
            title
		}
	}
  }
`
