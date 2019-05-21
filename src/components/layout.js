import React from "react"
import Helmet from 'react-helmet';
import PropTypes from "prop-types"
import { StaticQuery, graphql, Link } from "gatsby"
import styled from "@emotion/styled" 

import Header from "./header"
import Footer from "./footer"
import BackgroundImage from "./background-image"
import { rhythm } from "../utils/typography"
import "./layout.css"

const ButtonText = styled.div`
    text-align: center;
`
const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <div>
		<Helmet>
			<link 
				rel="stylesheet" 
				href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
			/>
		</Helmet>
        <div
            style={{
                height: `100vh`,
                width: `5%`,
                position: `fixed`,
            }}
        >
        </div>
        <div
            style={{
                height: `100vh`,
                width: `5%`,
                right: `0`,
                position: `fixed`,
            }}
        >
        </div>
        <div 
            style={{
                width: `90%`,
                height: `30px`,
                top: `4%`,
                left: `5%`,
                backgroundColor: `#FFFAFA`,
                position: `fixed`,
                borderBottom: `1px solid gray`,
            }}
        >
            <Header></Header>
        </div>
        <div
			style={{
				display: `inline-block`,
			}}
		>
            {children}
        </div>
        <div 
            style={{
                width: `100%`,
                height: `40px`,
                bottom: `0`,
                left: `5%`,
                backgroundColor: `#FFFAFA`,
                position: `fixed`,
            }}
        >
			<Footer></Footer>
		</div>
      </div>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
