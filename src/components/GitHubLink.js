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
const GitHubLink = (props) => (
  <span>
    <a className="button is-inverted is-small" href={props.githubLink}>
      <span className="icon">
        <FaGithub size="fa-2x" />
      </span>
      <span>GitHub</span>
    </a>
  </span>
);

GitHubLink.propTypes = {
  /**
   * Prototype of prop "githubLink"
   */
  githubLink: PropTypes.string,
};

export default GitHubLink;
