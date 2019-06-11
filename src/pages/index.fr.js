/**
 * @file Contents of the home page - in French.
 */
import React from 'react'
import Layout from "../layouts/fr"

const IndexPage = (props) => (
  <Layout location={props.location}>
    <div>
      <p>Labo Ferretti est un groupe de recherche en infonuagique au service de la génétique.</p>
    </div>
  </Layout>
)

export default IndexPage;

