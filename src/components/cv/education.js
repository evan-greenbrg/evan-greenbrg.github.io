import React from "react"
import Helmet from 'react-helmet';
import PropTypes from "prop-types"
import { StaticQuery, graphql, Link } from "gatsby"
import styled from "@emotion/styled" 

import { rhythm } from "../../utils/typography"

function getEducation(data) {
	const contentArray = [];
	data.edges.forEach(item =>
		contentArray.push(
            <div className="col-2">
                <p>
                    <strong>{ item.node.School }</strong>
                    , { item.node.City }
                    , { item.node.State }.
                    <br />{ item.node.Degree } in { item.node.Department } 
                    <br />GPA: { item.node.GPA }
                    <br />Thesis Ttitle: <i>{ item.node.Thesis }</i>
                </p>
            </div>
		)
	);
	return contentArray
}

export default getEducation 
