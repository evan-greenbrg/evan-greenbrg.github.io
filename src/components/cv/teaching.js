import React from "react"
import Helmet from 'react-helmet';
import PropTypes from "prop-types"
import { StaticQuery, graphql, Link } from "gatsby"
import styled from "@emotion/styled" 

import { rhythm } from "../../utils/typography"
import "../layout.css"

function getDescription(data) {
    const descriptionItemsArray = [];
    data.node.Descriptions.forEach(item =>
        descriptionItemsArray.push(
            <li>{item}</li>
        )
    );
    return descriptionItemsArray;
}
function getTeaching(data) {
	const contentArray = [];
	data.edges.forEach(item =>
		contentArray.push(
            <div className="col-2">
                <p>
                    <strong>{ item.node.Title }</strong>
                    , { item.node.Department }
                    , { item.node.Company }
                    , { item.node.City }
                    , { item.node.State }
                    <br />
                    <i>{ item.node.StartDate } - { item.node.EndDate }</i>
                <ul>
                    {getDescription(item)} 
                </ul>
                </p>
            </div>
		)
	);
	return contentArray
}

export default getTeaching 
