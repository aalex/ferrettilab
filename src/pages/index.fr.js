/**
 * @file Contents of the home page - in French.
 */
import React from 'react'
import Layout from "../layouts/fr"

const IndexPage = (props) => (
  <Layout location={props.location}>
    <div>
      <h1>Bonjour</h1>
      <p>Bienvenue</p>
      <p>Faites un beau truc</p>
    </div>
  </Layout>
)

export default IndexPage;

