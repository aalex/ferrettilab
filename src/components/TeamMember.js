/**
 * @file The GitHubLink component.
 */
import React from 'react';
import PropTypes from 'prop-types';
import { FaGithub } from 'react-icons/fa';
import '../style/style.scss';


/**
 * Component for showing a link a GitHub team.
 */
const TeamMember = (props) => (
  <div style={{ marginTop: '40px', borderBottom: 'solid 1px #ccc' }}>
    <h2>{props.fullName}</h2>
    <div>
      <span><em>{props.title}</em></span>
    </div>
    <div>
      <span>
        <a
          className="button is-info is-inverted"
          href={'https://github.com/' + props.githubUser}
        >
          <span className="icon">
            <FaGithub size="fa-2x" />
          </span>
          <span>{props.githubUser}</span>
        </a>
      </span>
    </div>
  </div>
);

TeamMember.propTypes = {
  /**
   * Prototype of prop "githubUser"
   */
  githubUser: PropTypes.string,
  fullName: PropTypes.string,
  title: PropTypes.string,
};

export default TeamMember;

