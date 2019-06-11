/**
 * @file Contents of the "projects" page - in French.
 */
import React from 'react'
import Link from 'gatsby-link'
import Layout from "../layouts/fr"

const ProjectsPage = (props) => (
  <Layout location={props.location}>
    <div>
      <h1>Projets</h1>
      <p>Bienvenue page projets</p>
    </div>
  </Layout>
)

export default ProjectsPage;

