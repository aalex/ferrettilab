/**
 * @file Contents of the "team" page - in French.
 */
import React from 'react'
import Layout from "../layouts/fr"
import TeamMember from '../components/TeamMember';

const TeamPage = (props) => (
  <Layout location={props.location}>
    <div>
      <h1>Équipe</h1>
      <div>
        <TeamMember githubUser='vferretti' fullName='Vincent Ferretti' title='Chercheur principal' />
        <TeamMember githubUser='Emma-Drieux' fullName='Emma Drieux' title='Analyste de recherche' />
        <TeamMember githubUser='aalex' fullName='Alexandre Quessy' title='Analyste d&apos;affaires' />
        <TeamMember githubUser='nyanofthemoon' fullName='Paule Lepage' title='Développeur sénior' />
        <TeamMember githubUser='latch2112' fullName='Francois Lachance' title='Développeur sénior' />
        <TeamMember githubUser='jecos' fullName='Jeremy Costanza' title='Développeur sénior' />
        <TeamMember githubUser='jaouad-benassila' fullName='Jaouad Benassila' title='Développeur' />
        <TeamMember githubUser='Velythyl' fullName='Charlie Gauthier' title='Stagiaire' />
        <TeamMember githubUser='jberube' fullName='Julien Bérubé' title='Consultant' />
      </div>
    </div>
  </Layout>
)

export default TeamPage;

