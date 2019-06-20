/**
 * @file Contents of the "projects" page - in English.
 */
import React from 'react';
import { Link } from 'gatsby';
import Layout from '../layouts/en';

const ProjectsPage = (props) => (
  <Layout location={props.location}>
    <div>
      <h1>What do we do?</h1>
      <h2>Current projects</h2>
      <div>
        <h3>NIH Gabriella Miller Kids First Data Resource Center</h3>
        <img src="/images/project_kidsfirst.png" />
        <p>
          The Kids First Data Resource Center (DRC) is a collaborative pediatric
          research effort created to accelerate data-driven discoveries and the
          development of novel precision-based approaches for children diagnosed
          with cancer or a structural birth defect using large genomic datasets.
        </p>
        
        <p>
          <a href="https://kidsfirstdrc.org/">kidsfirstdrc.org</a>
        </p>
      </div>

      <div>
        <h3>Centre québécois de données génomiques</h3>
        <p>
          Le centre québécois de données génomiques (CQDG) vise à offrir une
          infrastructure infonuagique robuste et sécuritaire pour l’hébergement
          et l’harmonisation des données génomiques générées par les activités
          cliniques et de recherche en génomique au Québec.
        </p>
      </div>

      <div>
        <h3>Centre québécois de génomique clinique</h3>
        <p>
          Le centre québécois de génomique clinique (CQGC) vise à offrir une
          infrastructure infonuagique robuste et sécuritaire pour l’hébergement
          et l’harmonisation des données génomiques générées par les activités
          de recherche en génomique au Québec.
        </p>
      </div>
      
      <hr />
      
      <h2>Former projects</h2>
      <ul>
        <li><a href="https://dcc.icgc.org/">The ICGC Data Portal</a></li>
        <li><a href="https://cancercollaboratory.org/">The Cancer Genome Collaboratory</a></li>
      </ul>
        
    </div>
  </Layout>
);

export default ProjectsPage;
