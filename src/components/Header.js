/**
 * @file The Header component.
 */
import React from 'react'
import Link from 'gatsby-link'
import PropTypes from 'prop-types'
import SelectLanguage from './SelectLanguage';
/* import { Button } from "react-bulma-components/full";
 */
import { Navbar } from "react-bulma-components/full";

/**
 * The Header component - for the top part of every page of our Web site.
 */
const Header = (props) => (
  <header>
  <section className="hero">
    <div className="hero-body">
      <div className="container">
          {props.currentLanguage === 'en' ? (
            <div>
              <Link to="/">
            {/*style={{ color: '#101010', textDecoration: 'none', }}>
 className="title" className="subtitle"
            */}
                <h1>Ferretti Labs</h1>
              </Link>
              <h2>Big data for genomics research</h2>
            </div>
          ) : (
            <div>
              <Link to="/">
            {/*style={{ color: '#101010', textDecoration: 'none', }}>
 className="title"
className="subtitle"
            */}
                <h1>Labo Ferretti</h1>
              </Link>
              <h2>L&apos;infonuagique au service de la recherche en génétique</h2>
            </div>
          )}
        <SelectLanguage langs={props.langs} />
      </div>
    </div>
  </section>
    <div>
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
          {props.currentLanguage === 'en' ? (
            <Navbar.Container>
              <Navbar.Item href="/page-2/">page 2</Navbar.Item>
              <Navbar.Item href="#">Second</Navbar.Item>
            </Navbar.Container>
          ) : (
            <Navbar.Container>
              <Navbar.Item href="/fr/page-2/">page 2</Navbar.Item>
              <Navbar.Item href="#">Second</Navbar.Item>
            </Navbar.Container>
          )}

          { /*
          <Navbar.Container position="end">
            <Navbar.Item href="#">At the end</Navbar.Item>
          </Navbar.Container>
          */ }
        </Navbar.Menu>
      </Navbar>
    </div>
  </header>
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

