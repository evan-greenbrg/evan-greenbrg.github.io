import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import ContentBox from "../components/content-box"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import getEducation from "../components/cv/education"
import getProfessional from "../components/cv/professional"
import getTheses from "../components/cv/theses"
import getSkills from "../components/cv/skills"
import getField from "../components/cv/field"
import getPresentations from "../components/cv/presentations"
import getTeaching from "../components/cv/teaching"
import TitleBar from "../components/title-bar"
import Back from "../components/back-button"

import "../components/cv/cv.css"



const IndexPage = ({ data }) => (
    <Layout>
    <ContentBox>
        <TitleBar dest="/" />
        <div className="grid-container">
            <div className="col-1">
                <sh>Education:</sh>
            </div>
            {getEducation(data.educationData)}
        </div>
        <div className="grid-container">
            <div className="col-1">
                <sh>Professional:</sh>
            </div>
            {getProfessional(data.professionalData)}
        </div>
        <div className="grid-container">
            <div className="col-1">
                <sh>Teaching:</sh>
            </div>
            {getTeaching(data.teachingData)}
        </div>
        <div className="grid-container">
            <div className="col-1">
                <sh>Technology:</sh>
            </div>
            <div className="col-2">
                <p>{getSkills(data.skillsData)}</p>
            </div>
        </div>
        <div className="grid-container">
            <div className="col-1">
                <sh>Field Work:</sh>
            </div>
            {getField(data.fieldData)}
        </div>
        <div className="grid-container">
            <div className="col-1">
                <sh>Presentations:</sh>
            </div>
            {getPresentations(data.presentationsData)}
        </div>
    </ContentBox>
    <SEO title="CV" keywords={[`gatsby`, `application`, `react`, 'geology', 'graduate', 'geography']} />
  </Layout>
)

export default IndexPage

export const query = graphql`
  query {
    coverImage: file(relativeDirectory: {eq: ""}, name: {eq: "delta1"}) {
      childImageSharp {
          fluid(
            maxWidth: 5000,
            maxHeight: 5000,
            cropFocus: SOUTH
          ) {
            ...GatsbyImageSharpFluid
        }
      }
    },
	educationData: allEducationJson {
		edges {
			node {
				School
				City
				State
				Degree
				Department
				GPA
                Thesis
			}
		}
	},
	professionalData: allProfessionalJson {
		edges {
			node {
				Title
				Department
				Company
				City
				State
				StartDate
				EndDate
				Descriptions
			}
		}
	},
	thesesData: allThesesJson {
		edges {
			node {
				Title
				Description
				Link
			}
		}
	},
	skillsData: allSkillsJson {
		edges {
			node {
                skills
			}
		}
	},
	fieldData: allFieldJson {
		edges {
			node {
                date
                datetext
                location
                description
			}
		}
	},
	presentationsData: allPresentationsJson {
		edges {
			node {
                author1
                author2
                year
                title
                where
			}
		}
	},
	teachingData: allTeachingJson {
		edges {
			node {
                Title
                Department
                Company
                City
                State
                StartDate
                EndDate
                Descriptions
			}
		}
	}
  }
`
