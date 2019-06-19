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
      margin: 'auto',
      width: '50%',
      marginTop: '1.45rem',
      maxWidth: 1280,
      padding: '1.45rem 1.0875rem',
    }}
  >
    <div className="columns">

      <div className="column">
        &copy; 2019 <FormattedMessage id="ferrettiLab" />
      </div>

      <div className="column">
        Dr. Vincent Ferretti
        <br />
        <a href="tel:514-345-4931,4926" style={{ verticalAlign: 'top' }}>514-345-4931 #4926</a>
      </div>

      <div className="column">
        <a href="https://recherche.chusj.org" target="blank">
         <FormattedMessage id="crsj" />
        </a>
        <br />
        <FormattedMessage id="addresseChuSteJustine" />
      </div>

    </div>

    <div className="columns">

      <div className="column">
      </div>

      <div className="column">
        <GitHubLink
          githubLink="https://github.com/cr-ste-justine/"
          style={{ lineHeight: '50px', verticalAlign: 'baseline' }}
        />
      </div>

      <div className="column">
        <img src="/images/email-image.png" />
      </div>
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

