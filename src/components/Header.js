/**
 * @file The Header component.
 */
import React from 'react'
import Link from 'gatsby-link'
import PropTypes from 'prop-types'
import SelectLanguage from './SelectLanguage';

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
      <nav className='navbar'
        color="#ffffff"
        active='false'
        transparent='true'
      >
        <div className='navbar-brand'>
          <a className='navbar-item' href="/">
            <img
              src="/images/logo.svg"
              alt="Logo"
              width="60"
              height="60"
            />
          </a>
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
        </div>
        <div className='navbar-menu'>
          {props.currentLanguage === 'en' ? (
            <div className='container'>
              <a className='navbar-item' href="/projects/">Projects</a>
              <a className='navbar-item' href="/team/">Team</a>
              <a className='navbar-item' href="/careers/">Careers</a>
            </div>
          ) : (
            <div className='container'>
              <a className='navbar-item' href="/fr/projects/">Projets</a>
              <a className='navbar-item' href="/fr/team/">Équipe</a>
              <a className='navbar-item' href="/fr/careers/">Carrière</a>
            </div>
          )}
          <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" href='#'>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
      </nav>
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

