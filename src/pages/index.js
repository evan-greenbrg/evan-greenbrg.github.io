import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/header"
import BackgroundImage from "../components/background-image"

import { mq, elevation, offset, offsetXxl, gutter } from "../utils/presets"

const IndexPage = ({ data }) => (
	<Layout>
		<BackgroundImage
			image={data.coverImage.childImageSharp.fluid}
			imageTitle="Delta"
		>
		</BackgroundImage>
		<SEO title="Home" keywords={[`gatsby`, `application`, `react`, 'geology', 'graduate', 'geography']} />
    </Layout>
)

export default IndexPage

export const query = graphql`
  query {
    coverImage: file(relativeDirectory: {eq: ""}, name: {eq: "delta1"}) {
      childImageSharp {
          fluid(
            maxWidth: 5000,
            maxHeight: 5000,
            cropFocus: SOUTH
          ) {
            ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
