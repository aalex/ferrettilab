/**
 * @file Contents of the home page - in French.
 */
import React from 'react'
import Layout from "../layouts/fr"
import Label from "../components/Label"

const IndexPage = (props) => (
  <Layout location={props.location}>
    <div>
      <p>Le Labo Ferretti est un groupe de recherche en infonuagique au service de la génétique.</p>
      <img src="/images/map_chusj.png" alt="map - CHU Ste-Justine" />
      <p>
        Nos activités de recherche sont axées sur le développement de méthodes et de logiciels d’analyse
        bioinformatique du génome visant à identifier et caractériser les variations génétiques responsables des
        maladies. Notre équipe de bioinformaticiens et d’ingénieurs logiciels applique des technologies de
        l’information moderne d’analyse des données massives à la recherche en génomique. Elle développe des outils
        logiciels avancés de traitement, recherche et visualisation à grande échelle des données génomiques dans des
        environnements de calcul info-nuagiques. Nous travaillons notamment sur la construction de plusieurs projets
        d’infrastructures de recherche et cliniques dont celles du NIH Gabriella Miller Kids First Data Resource
        Center, le Centre québécois de données génomiques et le Centre québécois de génomique clinique.
      </p>
    </div>
    <div>
      <Label labelText='données massives' />
      <Label labelText='bioinformatique' />
      <Label labelText='infonuagique' />
      <Label labelText='recherche appliquée' />
      <Label labelText='génomique' />
      <Label labelText='génie logiciel' />
      <Label labelText='infrastructure' />
      <Label labelText='développement logiciel' />
      <Label labelText='logiciel libre' />
    </div>
  </Layout>
)

export default IndexPage;

