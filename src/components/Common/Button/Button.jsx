import React from 'react';
import PropTypes from 'prop-types';

import './Button.scss';

const Button = ({action, value}) => {
  console.log('Button action = ', action);
  return (
    <input className="Button" type="button" value={value} onClick={action(3)} />
  );
}

Button.propTypes = {
  action: PropTypes.func,
  value: PropTypes.string
}

export default Button;
