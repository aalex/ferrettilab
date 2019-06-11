/**
 * @file Contents of the "team" page - in English.
 */
import React from 'react'
import Link from 'gatsby-link'
import Layout from "../layouts/en"

const TeamPage = (props) => (
  <Layout location={props.location}>
    <div>
      <h1>Team</h1>
      <p>Our team.</p>
    </div>
  </Layout>
)

export default TeamPage;

