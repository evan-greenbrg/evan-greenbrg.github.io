import React from "react"
import Helmet from 'react-helmet';
import PropTypes from "prop-types"
import { StaticQuery, graphql, Link } from "gatsby"
import styled from "@emotion/styled" 

import { rhythm } from "../../utils/typography"
import "../layout.css"

function getTheses(data) {
	const contentArray = [];
	data.edges.forEach(item =>
		contentArray.push(
            <div className="col-2">
                <a
					href="https://www.google.com"
				>
				{ item.node.Title }
				</a>
                <p>{ item.node.Description }</p>
            </div>
		)
	);
	return contentArray
}

export default getTheses
