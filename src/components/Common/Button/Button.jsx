import React from 'react';
import PropTypes from 'prop-types';

import './Button.scss';

const Button = ({value}) => {
  return (
    <input type="button" value={value} />
  );
}

Button.propTypes = {
  value: PropTypes.string
}

export default Button;
