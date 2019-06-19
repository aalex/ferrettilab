/**
 * @file Contents of the "careers" page - in French.
 */
import React from 'react';
import { Link } from 'gatsby';
import Layout from '../layouts/fr';
import Label from '../components/Label';

const CareersPage = (props) => (
  <Layout location={props.location}>
    <div className="section">
      <h1>Nous embauchons&nbsp;!</h1>
      <div className="container">
        <h2>Développeurs logiciels full-stack</h2>
        <p>
          En tant que développeur logiciel full-stack, vous participerez au
          développement d&apos;une plateforme <em>open source</em>
          de grande taille en génomique et en bioinformatique pour les patients
          du Québec et du monde entier. Vous utiliserez des librairies
          logicielles modernes, telles que React, afin de bâtir des portails de
          données massives et de visualisation de données. Vous développerez des
          micro-services qui constituent les fondations de ces infrastructures,
          en utilisant des technologies <em>big data</em> telles que
          ElasticSearch et Spark.
        </p>
        <span style={{ marginRight: '10px' }}>
          <Link to="https://www.jobboom.com/en/job-description/digital-technology-and-media/developpeur-full-stack/montreal-region/centre-de-recherche-du-chu-ste-justine/2594983">
            Voir l&apos;offre complète.
          </Link>
        </span>
        <span>
          <Link to="https://github.com/cr-ste-justine/coding-challenge-fullstack">
            Prendre le <em>coding challenge</em>
          </Link>
        </span>
      </div>

      <hr />

      <div className="container" style={{ marginTop: '10px' }}>
        <h2>Développeurs logiciels front-end</h2>
        <p>
          En tant que développeur logiciel front-end, vous participerez au
          développement de portails de données massives
          <em>open source</em>, et de visualisation de données semblables à{' '}
          <Link to="dcc.icgc.org">dcc.icgc.org</Link> et{' '}
          <Link to="portal.gdc.cancer.gov">portal.gdc.cancer.gov</Link>.
        </p>
        <span style={{ marginRight: '10px' }}>
          <Link to="https://www.jobboom.com/en/job-description/digital-technology-and-media/intermediate-senior-front-end-developer/montreal-region/centre-de-recherche-du-chu-ste-justine/2594994">
            Voir l&apos;offre complète.
          </Link>
        </span>
        <span>
          <Link to="https://github.com/cr-ste-justine/coding-challenge-frontend">
            Prendre le <em>coding challenge</em>
          </Link>
        </span>
      </div>
    </div>

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


  </Layout>
);

export default CareersPage;
