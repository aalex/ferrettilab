import React from 'react';
import { FaGithub } from 'react-icons/fa';
import '../style/style.scss';

const GitHubLink = () => (
  <span>
    <a
      className="button is-info is-inverted"
      href="https://github.com/cr-ste-justine/"
    >
      <span className="icon">
        <FaGithub size="fa-2x" />
      </span>
      <span>GitHub</span>
    </a>
  </span>
);

export default GitHubLink;
