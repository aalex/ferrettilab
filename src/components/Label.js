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
    marginRight: '10px',
    marginLeft: '10px',
    marginBottom: '10px',
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

