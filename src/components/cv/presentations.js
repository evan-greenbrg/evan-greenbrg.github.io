import React from "react"
import Helmet from 'react-helmet';
import PropTypes from "prop-types"
import { StaticQuery, graphql, Link } from "gatsby"
import styled from "@emotion/styled" 

import { rhythm } from "../../utils/typography"
import "../layout.css"

function getPresentations(data) {
	const contentArray = [];
	data.edges.forEach(item =>
		contentArray.push(
            <div className="col-2">
                <p>
                    <strong>{ item.node.author1 }</strong>
                    &#x2c;&nbsp;{ item.node.author2 }
                    &nbsp;({ item.node.year })
                    &nbsp;{ item.node.title }.
                    &nbsp;Paper presented at { item.node.where }
                </p>
            </div>
		)
	);
	return contentArray
}

export default getPresentations 
