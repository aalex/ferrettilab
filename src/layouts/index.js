/**
 * @file Layout for the common part of all pages for this site.
 */
import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Helmet from 'react-helmet';
import { getCurrentLangKey, getLangs, getUrlForLang } from 'ptz-i18n';
import { StaticQuery, graphql } from 'gatsby';
import { IntlProvider } from 'react-intl';
import 'intl';
import './index.css';

const Layout = ({ children, location, i18nMessages }) => {
  return (
    <StaticQuery
      query={graphql`
        query LayoutQuery {
          site {
            siteMetadata {
              languages {
                defaultLangKey
                langs
              }
            }
          }
        }
      `}
      render={(data) => {
        const url = location.pathname;
        const { langs, defaultLangKey } = data.site.siteMetadata.languages;
        const langKey = getCurrentLangKey(langs, defaultLangKey, url);
        const homeLink = `/${langKey}`.replace(`/${defaultLangKey}/`, '/');
        /* FIXME: The links for the language switcher should preserve the current page
         */
        const languagesForMenu = getLangs(
          langs,
          langKey,
          getUrlForLang(homeLink, url)
        ).map((item) => ({
          ...item,
          link: item.link.replace(`/${defaultLangKey}/`, '/'),
        }));
        return (
          <IntlProvider locale={langKey} messages={i18nMessages}>
            <div>
              <Helmet
                title="Ferretti Lab"
                meta={[
                  {
                    name: 'description',
                    content:
                      'Ferretti Lab - Groupe de recherche du docteur Vincent Ferretti',
                  },
                  {
                    name: 'keywords',
                    content: 'genomics, big data, cancer, infrastructure',
                  },
                ]}
              />

              <Header langs={languagesForMenu} currentLanguage={langKey} />

              <div
                style={{
                  margin: '0 auto',
                  maxWidth: 960,
                  padding: '0px 1.0875rem 1.45rem',
                  paddingTop: 0,
                }}
              >
                {children}
              </div>
              <Footer currentLanguage={langKey} />
            </div>
          </IntlProvider>
        );
      }}
    />
  );
};

Layout.propTypes = {
  children: PropTypes.func,
};

export default Layout;

