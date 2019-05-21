import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "@emotion/styled" 
import Img from "gatsby-image"

import "./layout.css"
import colors from "../utils/colors"
import { mq, elevation, offset, offsetXxl, gutter } from "../utils/presets"

const ButtonDiv = styled.div`
    margin: 0;
    overflow: hidden;
    z-axis: 10;
`

const ButtonBar = styled.div`
    ${mq.mobile} {
        flex-direction: row;
        display: flex;
        overflow: hidden;
        bottom: ${gutter.vertical};
        left: ${gutter.horizontal};
        right: ${gutter.horizontal};
        top: ${gutter.vertical};
    }
    ${mq.phablet} {
        flex-direction: row;
        display: flex;
        overflow: hidden;
        bottom: ${gutter.vertical};
        left: ${gutter.horizontal};
        right: ${gutter.horizontal};
        top: ${gutter.vertical};
    }
    ${mq.tablet} {
        flex-direction: row;
        display: flex;
        overflow: hidden;
        bottom: ${gutter.vertical};
        left: ${gutter.horizontal};
        right: ${gutter.horizontal};
        top: ${gutter.vertical};
    }
`
const ButtonText = styled.div`
    text-align: center;
    color: black;
`

const Header = ({ siteTitle }) => (
    <div>
        <div
            style={{
                marginLeft: `2%`,
                width: `66vw`,
            }}
        >
            <ButtonBar>
                <ButtonText><b>Evan Greenberg</b></ButtonText> 
                <Link 
					to="/bio" 
					className="link_hover" 
					style={{width: `18%`, marginLeft: `2%`}}>
                    <ButtonText>
                      <p>Bio</p>
                    </ButtonText>
                </Link>
                </ButtonBar>
        </div>
        <div
            style={{
                top: `4%`,
                right: `3%`,
                zIndex: `10`,
                position: `fixed`,
                width: `33vw`,
            }}
        >
            <ButtonDiv>
            <ButtonBar>
                <Link
                    to="/cv"
                    className="link_hover"
                >
                    <ButtonText>
                        <p>CV</p>
                    </ButtonText>
                </Link>
                <Link
                    to="/research"
                    class="link_hover"
                >
                    <ButtonText>
                        <p>Research</p>
                    </ButtonText>
                </Link>
                <Link
                    to="/blog"
                    class="link_hover"
                >
                    <ButtonText>
                        <p>Blog</p>
                    </ButtonText>
                </Link>
                </ButtonBar>
            </ButtonDiv>
        </div>
    </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
