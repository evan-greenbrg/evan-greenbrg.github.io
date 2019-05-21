import React from "react"
import Helmet from 'react-helmet';
import { Link } from "gatsby"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import ContentBox from "../components/content-box"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import GoogleMap from "../components/maps/first-map"

const IndexPage = ({ data }) => (
    <Layout>
    <ContentBox>
        <Link to="/">Back</Link>
		<GoogleMap></GoogleMap>
    </ContentBox>
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
    },
	headerImage: file(relativeDirectory: {eq: ""}, name: {eq: "river_fingers"}) {
	  relativePath
	  childImageSharp {
		fluid(
			maxWidth: 3000,
			maxHeight: 3000,
            cropFocus: SOUTHEAST 
		) {
		  ...GatsbyImageSharpFluid
		}
	  }
	}
  }
`
