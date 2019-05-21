import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "@emotion/styled" 
import Img from "gatsby-image"

import "./layout.css"
import colors from "../utils/colors"
import { mq, elevation, offset, offsetXxl, gutter } from "../utils/presets"

const Footer = ({}) => (
    <div>
        <a href="https://github.com/evan-greenbrg" className="fa fa-github"></a>
		<a href="/" className="fa fa-linkedin"></a>
		<a href="mailto:ev.ben.green@gmail.com" className="fa">ev.ben.green@gmail.com</a>
    </div>
)

export default Footer

