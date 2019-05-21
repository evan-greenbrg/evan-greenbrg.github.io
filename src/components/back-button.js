import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled" 

import "./back-button.css"

const ButtonText = styled.div`
	text-align: center;
    font-size: 30px;
    font-weight: bold;
	color: darkgray;
    margin-top: 3px;
    margin-left: 5.6px;
    position: absolute;
`
const Back = ({ dest }) => (
        <Link  
            className="back_hover"
            to={dest}
        >
            <ButtonText>&#10005;</ButtonText>
        </Link>
)

export default Back
