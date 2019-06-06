import React from 'react'
import Link from 'gatsby-link'
import Layout from "../layouts/fr"

const SecondPage = (props) => (
  <Layout location={props.location}>
    <div>
      <h1>La page deux!</h1>
      <p>Bienvenue page 2</p>
      <Link to="/pt/">Retour</Link>
    </div>
  </Layout>
)

export default SecondPage
