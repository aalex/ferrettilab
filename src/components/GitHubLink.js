/**
 * @file The GitHubLink component.
 */
import React from 'react';
import { FaGithub } from 'react-icons/fa';
import '../style/style.scss';


/**
 * Component for showing a link a GitHub team.
 */
const GitHubLink = (props) => (
  <span>
    <a
      className="button is-info is-inverted"
      href={props.githubLink}
    >
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
  githubLink: PropTypes.string
};

export default GitHubLink;
