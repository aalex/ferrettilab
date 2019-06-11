/**
 * @file The SelectLanguage component.
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { FormattedMessage } from 'react-intl';

/**
 * Language switcher component.
 */
const SelectLanguage = (props) => {
  const links = props.langs.map(lang =>
    <Link to={lang.link} key={lang.langKey} style={{
      color: '#ffffff',
      textDecoration: 'none'
    }}>
      <li selected={lang.selected} style={{
        display: 'inline-block',
        paddingLeft: '2em',
        paddingRight: '2em',
        fontWeight: lang.selected ? 'bold' : 'normal',
        textDecoration: lang.selected ? 'none' : 'underline'
      }}>
        {lang.langKey}
      </li>
    </Link>
  );

  return (
    <section>
      <div style={{
        color: '#ffffff'
      }}>
        <span><FormattedMessage id="selectLanguage" />:</span>
        <ul style={{ display: 'inline-block' }}>
          {links}
        </ul>
      </div>
    </section>
  );
};

SelectLanguage.propTypes = {
  /**
   * Prototype of prop "langs"
   */
  langs: PropTypes.array
};

export default SelectLanguage;

