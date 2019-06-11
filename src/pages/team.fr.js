/**
 * @file Contents of the "team" page - in French.
 */
import React from 'react'
import Link from 'gatsby-link'
import Layout from "../layouts/fr"

const TeamPage = (props) => (
  <Layout location={props.location}>
    <div>
      <h1>Équipe</h1>
      <p>Notre équipe.</p>
    </div>
  </Layout>
)

export default TeamPage;

