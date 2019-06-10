/**
 * @file The Header component.
 */
import React from 'react'
import Link from 'gatsby-link'
import PropTypes from 'prop-types'
import SelectLanguage from './SelectLanguage';
import GitHubLink from './GitHubLink';
/* import { Button } from "react-bulma-components/full";
 */
import { Navbar } from "react-bulma-components/full";

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

    {
    /* TODO: Use gatsby-transformer-yaml to load the list of pages from a YAML file
     */
    }
    {props.currentLanguage === 'en' ? (
      <Link to="/page-2/">Go to page 2</Link>
    ) : (
      <Link to="/fr/page-2/">Aller vers la page 2</Link>
    )}

    { /*
    fixed='top'
    */ }
    <Navbar
      color="#ffffff"
      active='false'
      transparent='true'
    >
      <Navbar.Brand>
        <Navbar.Item renderAs="a" href="/">
          <img
            src="/images/logo.svg"
            alt="Logo"
            width="60"
            height="60"
          />
        </Navbar.Item>
        { /* TODO
        <Navbar.Burger
          active={this.state.isOpen}
          onClick={() =>
            this.setState(this.state) => {
              isOpen: ! this.state.isOpen;
            })
          }
        />
        TODO */}
      </Navbar.Brand>
      <Navbar.Menu active={true}>
        <Navbar.Container>
          <Navbar.Item href="#">first</Navbar.Item>
          <Navbar.Item href="#">Second</Navbar.Item>
        </Navbar.Container>
        { /*
        <Navbar.Container position="end">
          <Navbar.Item href="#">At the end</Navbar.Item>
        </Navbar.Container>
        */ }
      </Navbar.Menu>
    </Navbar>

  </div>
)

Header.propTypes = {
  /** List of languages available for this site. */
  langs: PropTypes.string,
  /** Current selected language */
  currentLanguage: PropTypes.string,
};

Header.state = {
  isOpen: false
};

Header.defaultProps = {
  currentLanguage: 'en',
};

export default Header;

