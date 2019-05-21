import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import styled from "@emotion/styled" 
import Img from "gatsby-image"

import "../pages/projects.css"

const Image = styled(Img)`
  z-index: -3;
`

const ButtonText = styled.div`
	text-align: center;
	height: 10px;
	margin-top: 10px;
`


class GetProject extends React.Component {
    render() {
        return (
			<Link to={this.props.path} class="project_hover">
				<ButtonText>
					{this.props.title}
				</ButtonText>
				<Image
					fluid={this.props.image}
					objectFit="contain"
					style={{  
						marginTop: `25px`,
                        height: `27vw`,
                        width: `27vw`,
					}}
				/>
			</Link>
        )
    }
}

export default GetProject

