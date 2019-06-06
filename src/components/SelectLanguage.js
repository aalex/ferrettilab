import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import { FormattedMessage } from 'react-intl';

const SelectLanguage = (props) => {
  const links = props.langs.map(lang =>
    <Link to={lang.link} key={lang.langKey} style={{
      color: '#101010',
      textDecoration: 'none'
    }}>
      <li selected={lang.selected} style={{
        display: 'inline-block',
        paddingLeft: '2em',
        paddingRight: '2em',
        fontWeight: lang.selected ? 'bold' : 'normal'
      }}>
        {lang.langKey}
      </li>
    </Link>
  );

  return (
    <section>
      <header style={{
        color: '#101010'
      }}>
        <FormattedMessage id="selectLanguage" />
      </header>
      <ul>
        {links}
      </ul>
    </section>
  );
};

SelectLanguage.propTypes = {
  langs: PropTypes.array
};

export default SelectLanguage;
