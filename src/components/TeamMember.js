/**
 * @file The GitHubLink component.
 */
import React from 'react';
import PropTypes from 'prop-types';
import { FaGithub } from 'react-icons/fa';
import '../style/style.scss';

/**
 * Component for showing a link a GitHub team.
 *
 * @todo For some reason, there is no gap between each column.
 * Perhaps the SASS variables for Bulma are not used?
 */
const TeamMember = (props) => (
  <div className="box column is-half">
    <article className="media">
      <div className="media-left"></div>
      <div className="media-content">
        <div className="content">
          <p>
            <strong>{props.fullName}</strong> &nbsp;
          </p>
          <p>
            <a href={'https://github.com/' + props.githubUser}>
              <small>@{props.githubUser}</small>
            </a>
          </p>
          <p>{props.title}</p>
        </div>
        <nav className="level is-mobile">
          <div className="level-left">
            <a
              className="level-item"
              aria-label="reply"
              href={'https://github.com/' + props.githubUser}
            >
              <span className="icon is-small">
                <FaGithub size="fa-2x" />
              </span>
            </a>
          </div>
        </nav>
      </div>
    </article>
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
