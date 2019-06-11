/**
 * @file The Footer component.
 */
import React from 'react'
import PropTypes from 'prop-types'
import GitHubLink from './GitHubLink';

/**
 * The Footer component - for the bottom part of every page of our Web site.
 */
const Footer = (props) => (
  <div
    style={{
      padding: '80px 0 0 0',
      marginTop: '1.45rem',
      background: '#53535',
    }} >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <span style={{ margin: 0, marginRight: '50px', verticalAlign: 'baseline', lineHeight: '50px' }}>
        (c) 2019 Ferretti Labs
      </span>
      <GitHubLink githubLink="https://github.com/cr-ste-justine/" style={{ lineHeight: '50px', verticalAlign: 'baseline' }}  />
    </div>
  </div>
)

Footer.propTypes = {
  /** Current selected language */
  currentLanguage: PropTypes.string,
};

Footer.defaultProps = {
  currentLanguage: 'en',
};

export default Footer;

