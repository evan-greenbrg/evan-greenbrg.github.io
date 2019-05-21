import PropTypes from "prop-types"
import React from "react"
import styled from "@emotion/styled" 
import Img from "gatsby-image"
import ReactDOM from 'react-dom'
import ReactModal from 'react-modal'

import colors from "../utils/colors"

const Image = styled(Img)`
    z-index: -10;
`

const ButtonDiv = styled.div`
	display: inline-block;
	padding: 0;
    margin: 2% 0 0 2%;
	width: calc( 100% / 3 );
	height: 70px;
	overflow: hidden;
	background: none;
`

class ModalApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false
        };

        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
    }

    handleOpenModal () {
        this.setState({ showModal: true });
    }

    handleCloseModal () {
        this.setState({ showModal: false });
    }

    render () {
        return (
            <ButtonDiv>
                <button 
                  onClick={this.handleOpenModal}
                  style={{
                    display: `inline-block`,
                    padding: `0`,
                    margin: `auto`,
                    width: `95%`,
                    height: `95%`,
                    overflow: `hidden`,
                    background: `none`,
                    border: `2px solid black`,
                  }}
                  >
                  <Image
                      fluid={this.props.image}
                      objectFit="cover"
                      style={{
                          zAxis: `3`,
                      }}
                  >
                  </Image>
                </button>
                <ReactModal
                    isOpen={this.state.showModal}
                    contentLabel="Modal!"
                >
                    <button
                      onClick={this.handleCloseModal}
                      style={{
                        display: `inline-block`,
                        padding: `0`,
                        margin: `2% 0 0 2%`,
                        width: `10vmin`,
                        height: `70px`,
                        overflow: `hidden`,
                        background: `none`,
                        border: `2px solid black`,
                      }}
                    >
                      <Image
                          fluid={this.props.image}
                          objectFit="cover"
                          style={{
                              zAxis: `3`,
                          }}
                      >
                      </Image>
                    </button>
                </ReactModal>
            </ButtonDiv>
        );
    }
}

export default ModalApp
