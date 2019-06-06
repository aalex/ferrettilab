import React from 'react'
import Link from 'gatsby-link'
import Layout from "../layouts/fr"

const IndexPage = (props) => (
  <Layout location={props.location}>
    <div>
      <h1>Bonjour</h1>
      <p>Bienvenue</p>
      <p>Faites un beau truc</p>
      <Link to="/pt/page-2/">Aller vers la page 2</Link>
    </div>
  </Layout>
)

export default IndexPage
