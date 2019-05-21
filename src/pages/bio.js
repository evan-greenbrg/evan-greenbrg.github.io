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

const Content = styled.div`
	display: flex;
`
const BioText = styled.div`
	width: 	55vw;
    visibility: visible;
	height: 85vh;
`

const BioImg = styled.div`
	height: 85vh;
	width: 	35vw;
`
const Image = styled(Img)`
	width: 25vw;
	height: 25vw;
	margin-left: 5vw;
`

const IndexPage = ({ data }) => (
    <Layout>
    <ContentBox>
        <TitleBar title="Bio" dest="/" />
		<Content>
			<BioImg>
				<div>
				  <Image
					fixed={data.bioImage.childImageSharp.fluid}
					objectFit="contain"
					title="Evan"
				  />
				</div>
				<p
					style={{
						fontWeight: `bold`,
						color: `lightgray`,
						textAlign: `left`,
						marginLeft: `5vw`
					}}
				>Last Updated - {data.markdownRemark.frontmatter.date}</p>
			</BioImg>
			<div>
				<BioText
                    dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
                >
				</BioText>
			</div>
		</Content>
    </ContentBox>
    <SEO title="Bio" keywords={[`gatsby`, `application`, `react`, 'geology', 'graduate', 'geography']} />
  </Layout>
)

export default IndexPage

export const query = graphql`
  query {
     markdownRemark(frontmatter: { title: { eq: "bio" } }) {
        html
		frontmatter {
			title 
			date
		}
	},
	bioImage: file(name: {eq: "evan_face"}) {
		childImageSharp {
			fluid(
				maxWidth: 550
				maxHeight: 550
			) {
				...GatsbyImageSharpFluid
			}
		}
	}
  }
`
