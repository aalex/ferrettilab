/**
 * @file The Footer component.
 */
import React from 'react'
import PropTypes from 'prop-types'

/**
 * The Footer component - for the bottom part of every page of our Web site.
 */
const Footer = (props) => (
  <div
    style={{
      background: '#ffcc33',
      marginTop: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <span style={{ margin: 0 }}>
        (c) 2019 Ferretti Labs
      </span>
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

