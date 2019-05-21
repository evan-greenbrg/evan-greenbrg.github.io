import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled" 
import Img from "gatsby-image"

import colors from "../utils/colors"

const Box = styled.div`
    height: 85vh;
    width: 90vw;
    background-color: #FFFAFA;
    margin-top: 9vh;
    margin-left: 5vw;
    z-axis: 15;
    overflow-y: scroll;
    position: fixed;
`

const ContentBox = ({ children }) => (
    <Box>
        {children}
    </Box>
)

export default ContentBox
