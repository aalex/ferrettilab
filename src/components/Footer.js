/**
 * @file The Footer component.
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import GitHubLink from './GitHubLink';
import { FormattedMessage } from 'react-intl';

/**
 * The Footer component - for the bottom part of every page of our Web site.
 */
const Footer = (props) => (
  <div
    style={{
      padding: '80px 0 0 0',
      marginTop: '1.45rem',
      background: '#53535',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <span
        style={{
          marginLeft: '10px',
          marginRight: '10px',
          verticalAlign: 'baseline',
          lineHeight: '50px',
        }}
      >
        (c) 2019 <FormattedMessage id="ferrettiLab" />
      </span>
      <span>
        <span style={{ marginLeft: '10px', marginRight: '10px' }}>
          Dr. Vincent Ferretti &nbsp;
          <a href="https://recherche.chusj.org" target="blank">
           <FormattedMessage id="crsj" />
          </a>
          <br />
          <span style={{ marginLeft: '10px', marginRight: '10px' }}>
           <FormattedMessage id="addresseChuSteJustine" />
          </span>
        </span>
      </span>
      <GitHubLink
        githubLink="https://github.com/cr-ste-justine/"
        style={{ lineHeight: '50px', verticalAlign: 'baseline' }}
      />
      &nbsp;
      <Link href="tel:514-345-4931,4926">514-345-4931 #4926</Link>
    </div>
  </div>
);

Footer.propTypes = {
  /** Current selected language */
  currentLanguage: PropTypes.string,
};

Footer.defaultProps = {
  currentLanguage: 'en',
};

export default Footer;

