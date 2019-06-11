/**
 * @file The Label component.
 */
import React from 'react';
import PropTypes from 'prop-types';
import '../style/style.scss';


/**
 * Component for showing a label.
 */
const Label = (props) => (
  <span className="tag" style={{
    margingRight: '10px',
    margingLeft: '10px',
  }}>
    { props.labelText }
  </span>
);

Label.propTypes = {
  /**
   * Prototype of prop "labelText"
   */
  labelText: PropTypes.string
};

export default Label;

