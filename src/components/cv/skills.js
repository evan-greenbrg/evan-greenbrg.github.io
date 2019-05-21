import React from "react"
import Helmet from 'react-helmet';
import PropTypes from "prop-types"
import { StaticQuery, graphql, Link } from "gatsby"
import styled from "@emotion/styled" 

import { rhythm } from "../../utils/typography"
import "../layout.css"

function getSkills(data) {
	const contentArray = [];
	data.edges.forEach(item =>
		contentArray.push(
            <p>{ item.node.skills }</p>
		)
	);
	return contentArray
}

export default getSkills
