import React from "react"
import Img from "gatsby-image"
import styled from "react-emotion"

import { rhythm, options } from "../../utils/typography"
import { mq, gutter } from "../../utils/presets"


const Image = styled(Img)`
    display: block;
    float: right;
    margin-bottom: ${rhythm(options.blockMarginBottom * 2) };
    margin-left: ${rhythm(options.blockMarginBottom * 2) };
    margin-right: -${gutter.default};
`

const bodyImage = ({
    image,
    title,
    backgroundcolor,
}) => (
    <react.fragment>
        <image
            fixed={image}
            backgroundcolor={backgroundcolor ? backgroundcolor : false}
            style={{ display: `inherit` }}
            title={title}
        />
    </react.fragment>
)

export default bodyImage 
