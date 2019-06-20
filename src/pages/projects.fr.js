/**
 * @file Contents of the "projects" page - in French.
 */
import React from 'react';
import { Link } from 'gatsby';
import Layout from '../layouts/fr';
import '../style/style.scss';

const ProjectsPage = (props) => (
  <Layout location={props.location}>
    <div className="projectsPage">
      <h1>Sur quoi travaillons-nous&nbsp;?</h1>
      <h2>Projets en cours</h2>
      <div>
        <h3>NIH Gabriella Miller Kids First Data Resource Center</h3>
        <img src="/images/project_kidsfirst.png" width="320" />
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
        <img src="/images/project_CQDG.png" width="320" />
        <p>
          Le centre québécois de données génomiques (CQDG) vise à offrir une
          infrastructure infonuagique robuste et sécuritaire pour l’hébergement
          et l’harmonisation des données génomiques générées par les activités
          cliniques et de recherche en génomique au Québec.
        </p>
      </div>

      <div>
        <h3>Centre québécois de génomique clinique</h3>
        <img src="/images/project_clin.png" width="320" />
        <p>
          Le centre québécois de génomique clinique (CQGC) vise à offrir une
          infrastructure infonuagique robuste et sécuritaire pour l’hébergement
          et l’harmonisation des données génomiques générées par les activités
          de recherche en génomique au Québec.
        </p>
      </div>

      <hr />
      
      <h2>Anciens projets</h2>

      <div>
        <h3>The ICGC Data Portal</h3>
        <img src="/images/project_ICGC.png" width="320" />
        <p>
          <a href="https://dcc.icgc.org/">dcc.icgc.org</a>
        </p>
      </div>

      <div>
        <h3>The Cancer Genome Collaboratory</h3>
        <img src="/images/project_cancercollaboratory.png" width="320" />
        <p>
          <a href="https://cancercollaboratory.org/">cancercollaboratory.org</a>
        </p>
      </div>

      <div>
        <h3>Genomic Data Commons Data Portal</h3>
        <img src="/images/project_GDC.png" width="320" />
        <p>
          <a href="https://portal.gdc.cancer.gov/">portal.gdc.cancer.gov</a>
        </p>
      </div>

    </div>
  </Layout>
);

export default ProjectsPage;
