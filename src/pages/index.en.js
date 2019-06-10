/**
 * @file Contents of the home page - in English.
 */
import React from 'react'
import Layout from "../layouts/en"

const IndexPage = (props) => (
  <Layout location={props.location}>
    <div>
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
    </div>
  </Layout>
)

export default IndexPage;

