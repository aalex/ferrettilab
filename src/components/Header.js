/**
 * @file The Header component.
 */
import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import LanguageSwitcher from './LanguageSwitcher';
import { FormattedMessage } from 'react-intl';

/**
 * The Header component - for the top part of every page of our Web site.
 */
const Header = (props) => (
  <header>
    <section className="hero">
      <div className="hero-body">
        <div className="container">
          <div className="columns">
            <div className="column">
              {props.currentLanguage === 'en' ? (
                <div>
                  <Link to="/">
                    {/*style={{ color: '#101010', textDecoration: 'none', }}>
 className    ="title" className="subtitle"
                */}
                    <h1>
                      <FormattedMessage id="ferrettiLab" />
                    </h1>
                  </Link>
                  <h2><FormattedMessage id="crsj" /></h2>
                  <em>Big data for genomics research</em>
                </div>
              ) : (
                <div>
                  <Link to="/">
                    {/*style={{ color: '#101010', textDecoration: 'none', }}>
 className    ="title"
className=    "subtitle"
                */}
                    <h1>
                      <FormattedMessage id="ferrettiLab" />
                    </h1>
                  </Link>
                  <h2><FormattedMessage id="crsj" /></h2>
                  <em>
                    L&apos;infonuagique au service de la recherche en génétique
                  </em>
                </div>
              )}
              {/*<SelectLanguage langs={props.langs} />*/}
              <LanguageSwitcher currentLanguage={props.currentLanguage} />
            </div>
            <div className="column">
              <img
                src="/images/logo-chu-ste-justine.svg"
                width="345" height="170"
                />
            </div>
          </div>
        </div>
      </div>
    </section>
    <div>
      <nav className="navbar" color="#ffffff" active="false" transparent="true">
        <div className="navbar-brand">
          {props.currentLanguage === 'en' ? (
            <a className="navbar-item" href="/">
              <img src="/images/logo.svg" alt="Logo" width="60" height="60" />
            </a>
          ) : (
            <a className="navbar-item" href="/fr/">
              <img src="/images/logo.svg" alt="Logo" width="60" height="60" />
            </a>
          )}
          {/* TODO
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
        <div className="navbar-menu">
          {props.currentLanguage === 'en' ? (
            <a className="navbar-item" href="/projects/">
              What do we do?
            </a>
          ) : (
            <a className="navbar-item" href="/fr/projects/">
              Que faisons-nous&nbsp;?
            </a>
          )}
          {props.currentLanguage === 'en' ? (
            <a className="navbar-item" href="/team/">
              Our Team
            </a>
          ) : (
            <a className="navbar-item" href="/fr/team/">
              Notre équipe
            </a>
          )}
          {props.currentLanguage === 'en' ? (
            <a className="navbar-item" href="/careers/">
              Join us!
            </a>
          ) : (
            <a className="navbar-item" href="/fr/careers/">
              Joignez-vous à nous&nbsp;!
            </a>
          )}
          {props.currentLanguage === 'en' ? (
            <a className="navbar-item" href="/publications/">
              Publications
            </a>
          ) : (
            <a className="navbar-item" href="/fr/publications/">
              Publications
            </a>
          )}
          <a
            role="button"
            class="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            href="#"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
      </nav>
    </div>
  </header>
);

Header.propTypes = {
  /** List of languages available for this site. */
  langs: PropTypes.array,
  /** Current selected language */
  currentLanguage: PropTypes.string,
};

Header.state = {
  isOpen: false,
};

Header.defaultProps = {
  currentLanguage: 'en',
};

export default Header;
