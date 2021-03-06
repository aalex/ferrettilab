/**
 * @file The LanguageSwitcher component.
 */
import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

/**
 * LanguageSwitcher switcher component.
 */
const LanguageSwitcher = (props) => (
  <div>
    {props.currentLanguage === 'fr' ? (
      <strong className="langSwitcher">
        Français
      </strong>
    ) : (
      <a href="/fr" className="langSwitcher">
        Français
      </a>
    )}
    &nbsp; | &nbsp;
    {props.currentLanguage === 'en' ? (
      <strong className="langSwitcher">
        English
      </strong>
    ) : (
      <a href="/" className="langSwitcher">
        English
      </a>
    )}
  </div>
);

LanguageSwitcher.propTypes = {
  /**
   * Prototype of prop "langs"
   */
  currentLanguage: PropTypes.string,
  langs: PropTypes.array,
};

export default LanguageSwitcher;

