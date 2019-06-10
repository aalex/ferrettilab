/**
 * @file The Header component.
 */
import React from 'react'
import Link from 'gatsby-link'
import PropTypes from 'prop-types'
import SelectLanguage from './SelectLanguage';
import GitHubLink from './GitHubLink';

/**
 * The Header component - for the top part of every page of our Web site.
 */
const Header = (props) => (
  <div
    style={{
      background: '#ffcc33',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: '#101010',
            textDecoration: 'none',
          }}
        >
          Ferretti Labs
        </Link>
      </h1>
      <SelectLanguage langs={props.langs} />
    </div>
    <GitHubLink githubLink="https://github.com/cr-ste-justine/" />

    {props.currentLanguage === 'en' ? (
      <Link to="/page-2/">Go to page 2</Link>
    ) : (
      <Link to="/fr/page-2/">Aller vers la page 2</Link>
    )}
  </div>
)

Header.propTypes = {
  /** List of languages available for this site. */
  langs: PropTypes.string,
  /** Current selected language */
  currentLanguage: PropTypes.string,
};

Header.defaultProps = {
  currentLanguage: 'en',
};

export default Header;

