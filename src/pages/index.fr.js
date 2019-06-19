/**
 * @file Contents of the home page - in French.
 */
import React from 'react';
import Layout from '../layouts/fr';
import Label from '../components/Label';

const IndexPage = (props) => (
  <Layout location={props.location}>
    <div>

      <div className="notification">
        <a href="/fr/careers" style={{ textDecoration: 'none' }}>
          Nous embauchons&nbsp;!
        </a>
      </div>

      <p>
        Le Labo Ferretti est un groupe de recherche en infonuagique au service
        de la génétique.
      </p>
      <p>
        Nous développons des logiciels pour l’analyse bioinformatique du génome visant à identifier
        et caractériser les variations génétiques responsables des maladies.
        Notre équipe de bioinformaticiens et d’ingénieurs logiciels applique des
        technologies de l’information moderne d’analyse des données massives à
        la recherche en génomique.
      </p>
    </div>

    <div>
      <div>
        <Label labelText="données massives" />
        <Label labelText="bioinformatique" />
        <Label labelText="infonuagique" />
        <Label labelText="recherche appliquée" />
        <Label labelText="génomique" />
        <Label labelText="génie logiciel" />
        <Label labelText="infrastructure" />
        <Label labelText="développement logiciel" />
        <Label labelText="logiciel libre" />
        <Label labelText="génomique clinique" />
        <Label labelText="intelligence articielle" />
        <Label labelText="apprentissage machine" />
      </div>

      <figure class="image">
        <img
          className="is-rounded"
          src="/images/map_chusj.png"
          alt="map - CHU Ste-Justine"
        />
      </figure>
    </div>
  </Layout>
);

export default IndexPage;

