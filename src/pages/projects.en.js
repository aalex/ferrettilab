/**
 * @file Contents of the "projects" page - in English.
 */
import React from 'react';
import { Link } from 'gatsby';
import Layout from '../layouts/en';

const ProjectsPage = (props) => (
  <Layout location={props.location}>
    <div>
      <h1>Projects</h1>
      <div>
        <h2>NIH Gabriella Miller Kids First Data Resource Center</h2>
        <p>
          The Kids First Data Resource Center (DRC) is a collaborative pediatric
          research effort created to accelerate data-driven discoveries and the
          development of novel precision-based approaches for children diagnosed
          with cancer or a structural birth defect using large genomic datasets.
        </p>
        <p>
          <Link href="https://kidsfirstdrc.org/">kidsfirstdrc.org</Link>
        </p>
      </div>

      <div>
        <h2>Centre québécois de données génomiques</h2>
        <p>
          Le centre québécois de données génomiques (CQDG) vise à offrir une
          infrastructure infonuagique robuste et sécuritaire pour l’hébergement
          et l’harmonisation des données génomiques générées par les activités
          cliniques et de recherche en génomique au Québec.
        </p>
      </div>

      <div>
        <h2>Centre québécois de génomique clinique</h2>
        <p>
          Le centre québécois de génomique clinique (CQGC) vise à offrir une
          infrastructure infonuagique robuste et sécuritaire pour l’hébergement
          et l’harmonisation des données génomiques générées par les activités
          de recherche en génomique au Québec.
        </p>
      </div>
    </div>
  </Layout>
);

export default ProjectsPage;
