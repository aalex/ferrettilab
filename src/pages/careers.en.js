/**
 * @file Contents of the "careers" page - in English.
 */
import React from 'react';
import { Link } from 'gatsby';
import Layout from '../layouts/en';
import Label from '../components/Label';

const CareersPage = (props) => (
  <Layout location={props.location}>
    <div className="section">
      <h1>We are hiring!</h1>
      <div className="container">
        <h2>Full-stack developers</h2>
        <p>
          As a Full Stack Developer, you will be participating in the
          development of a large scale open source cloud platform in genomics
          and bioinformatics for Quebec patients. You will use top of the line
          frameworks like React to build responsive data portals and
          visualizations and develop microservices that make up the foundational
          structure using technologies such as ElasticSearch and Spark.
        </p>

        <div className="columns">
          <div className="column">
            <a href="https://www.jobboom.com/en/job-description/digital-technology-and-media/developpeur-full-stack/montreal-region/centre-de-recherche-du-chu-ste-justine/2594983">
              See full job posting
            </a>
          </div>
          <div className="column">
            <a href="https://github.com/cr-ste-justine/coding-challenge-fullstack">
              Take coding challenge
            </a>
          </div>
        </div>

      </div>

      <hr style={{ marginTop: '20px',}} />

      <div className="container" style={{ marginTop: '10px' }}>
        <h2>Front-end developers</h2>
        <p>
          As a Front-end Developer, you will be participating in the development
          of a large scale open source cloud platform in genomics and
          bioinformatics for Quebec patients using top of the line frameworks to
          build responsive data portals and visualizations similar to{' '}
          <Link to="dcc.icgc.org">dcc.icgc.org</Link> and{' '}
          <Link to="portal.gdc.cancer.gov">portal.gdc.cancer.gov</Link>.
        </p>

        <div className="columns">
          <div className="column">
            <a href="https://www.jobboom.com/en/job-description/digital-technology-and-media/intermediate-senior-front-end-developer/montreal-region/centre-de-recherche-du-chu-ste-justine/2594994">
              See full job posting
            </a>
          </div>
          <div className="column">
            <a href="https://github.com/cr-ste-justine/coding-challenge-frontend">
              Take coding challenge
            </a>
          </div>
        </div>

      </div>

      <hr style={{ marginTop: '20px',}} />

      <div>
        <Label labelText="Docker" />
        <Label labelText="ElasticSearch" />
        <Label labelText="GraphQL" />
        <Label labelText="JWT" />
        <Label labelText="Java" />
        <Label labelText="NodeJS" />
        <Label labelText="PostgreSQL" />
        <Label labelText="REST" />
        <Label labelText="React" />
        <Label labelText="Scala" />
        <Label labelText="Scrum" />
        <Label labelText="Spring" />
        <Label labelText="Tesseract" />
        <Label labelText="TypeScript" />
        <Label labelText="npm" />
      </div>

    </div>

  </Layout>
);

export default CareersPage;
