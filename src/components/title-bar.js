import React from "react"
import styled from "@emotion/styled" 

import Back from "./back-button"
import "./cv/cv.css"

const TitleBox = styled.div`
    width: 100%;
    height: 35px;
    text-align: right;
    padding-right: 2.5vw;
`

const TitleBar = ({ dest }) => (
    <TitleBox>
        <Back  dest={dest} />
    </TitleBox>
)

export default TitleBar
