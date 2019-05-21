import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "@emotion/styled" 

import Header from "./header"
import { rhythm } from "../utils/typography"
import { mq, elevation, offset, offsetXxl, gutter } from "../utils/presets"
import "./layout.css"

const Image = styled(Img)`
  z-index: -99;

  ${mq.mobile} {
    visibility: visible;
	bottom: 14%;
	left: 25%;
	right: 25%;
	top: 20%;
  }
  ${mq.phablet} {
    visibility: visible;
	bottom: 14%;
	left: 25%;
	right: 25%;
	top: 19%;
  }
  ${mq.tablet} {
    visibility: visible;
	bottom: 14%;
	left: 25%;
	right: 25%;
	top: 14%;
  }
`

const BackgroundImage = ({ children, image, imageTitle, imageBackgroundColor  }) => (
      <>
        <div
          style={{
            margin: `0`,
            zAxis: `-99`,
          }}
        >
          {image && (
            <Image
                fluid={image}
                objectFit="contain"
                style={{ position: `fixed`, width: `50%`, height: `auto`}}
                backgroundColor={imageBackgroundColor ? imageBackgroundColor: false}
                title={imageTitle}
            />
        )}
        </div>
      </>
)

export default BackgroundImage 
