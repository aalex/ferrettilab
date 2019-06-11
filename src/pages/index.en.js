/**
 * @file Contents of the home page - in English.
 */
import React from 'react'
import Layout from "../layouts/en"

const IndexPage = (props) => (
  <Layout location={props.location}>
    <div>
      <p>Ferretti Labs is a research group in big data for genetics research.</p>
    </div>
  </Layout>
)

export default IndexPage;

