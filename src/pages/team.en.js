/**
 * @file Contents of the "team" page - in English.
 */
import React from 'react';
import Layout from '../layouts/en';
import TeamMember from '../components/TeamMember';

const TeamPage = (props) => (
  <Layout location={props.location}>
    <div>
      <h1>Team</h1>
      <div className="columns is-multiline is-3">
        <TeamMember
          githubUser="vferretti"
          fullName="Vincent Ferretti"
          title="Principal investigator"
        />
        <TeamMember
          githubUser="Emma-Drieux"
          fullName="Emma Drieux"
          title="Research analyst"
        />
        <TeamMember
          githubUser="aalex"
          fullName="Alexandre Quessy"
          title="Business analyst"
        />
        <TeamMember
          githubUser="nyanofthemoon"
          fullName="Paule Lepage"
          title="Senior developer"
        />
        <TeamMember
          githubUser="latch2112"
          fullName="Francois Lachance"
          title="Senior developer"
        />
        <TeamMember
          githubUser="jecos"
          fullName="Jeremy Costanza"
          title="Senior developer"
        />
        <TeamMember
          githubUser="jaouad-benassila"
          fullName="Jaouad Benassila"
          title="Developer"
        />
        <TeamMember
          githubUser="Velythyl"
          fullName="Charlie Gauthier"
          title="Intern"
        />
        <TeamMember
          githubUser="jberube"
          fullName="Julien Bérubé"
          title="Consultant"
        />
      </div>
    </div>
  </Layout>
);

export default TeamPage;
