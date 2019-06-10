/**
 * @file Contents of the "careers" page - in English.
 */
import React from 'react'
import Link from 'gatsby-link'
import Layout from "../layouts/en"

const CareersPage = (props) => (
  <Layout location={props.location}>
    <div>
      <h1>Careers at Ferretti Labs</h1>
      <h2>Full-stack developers</h2>
      <p>
        As a Full Stack Developer, you will be participating in the development of a large scale open source cloud
        platform in genomics and bioinformatics for Quebec patients. You will use top of the line frameworks like
        React to build responsive data portals and visualizations and develop microservices that make up the
        foundational structure using technologies such as ElasticSearch and Spark.      
      </p>
      <span>
        <Link to="https://www.jobboom.com/en/job-description/digital-technology-and-media/developpeur-full-stack/montreal-region/centre-de-recherche-du-chu-ste-justine/2594983">
          See full job posting
        </Link>
      </span>
      <span>
        <Link to="https://github.com/cr-ste-justine/coding-challenge-fullstack">
          Take coding challenge
        </Link>
      </span>

      <h2>Front-end developers</h2>
      <p>
        As a Front-end Developer, you will be participating in the development of a large scale open source cloud platform in genomics and bioinformatics for Quebec patients using top of the line frameworks to build responsive data portals and visualizations similar to <Link to="dcc.icgc.org">dcc.icgc.org</Link> and <Link to="portal.gdc.cancer.gov">portal.gdc.cancer.gov</Link>.
      </p>
      <span>
        <Link to="https://www.jobboom.com/en/job-description/digital-technology-and-media/intermediate-senior-front-end-developer/montreal-region/centre-de-recherche-du-chu-ste-justine/2594994">
          See full job posting
        </Link>
      </span>
      <span>
        <Link to="https://github.com/cr-ste-justine/coding-challenge-frontend">
          Take coding challenge
        </Link>
      </span>
    </div>
  </Layout>
)

export default CareersPage;

