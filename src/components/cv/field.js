import React from "react"
import Helmet from 'react-helmet';
import PropTypes from "prop-types"
import { StaticQuery, graphql, Link } from "gatsby"
import styled from "@emotion/styled" 

import { rhythm } from "../../utils/typography"
import "../layout.css"

function getField(data) {
	const contentArray = [];
	data.edges.forEach(item =>
		contentArray.push(
            <div className="col-2">
                <p_s>
                <strong>{ item.node.datetext }</strong> - { item.node.location } - { item.node.description }
                </p_s>
            </div>
		)
	);
	return contentArray
}

export default getField
