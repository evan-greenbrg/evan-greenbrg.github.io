import React from "react"
import ContentBox from "../components/content-box"

import Layout from "../components/layout"
import SEO from "../components/seo"
import TitleBar from "../components/title-bar"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <ContentBox>
        <h1>NOT FOUND</h1>
        <p>That page doesn&#39;t exist...</p>
    </ContentBox>
  </Layout>
)

export default NotFoundPage
