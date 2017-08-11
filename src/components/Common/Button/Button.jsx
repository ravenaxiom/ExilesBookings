import React from 'react';
import PropTypes from 'prop-types';

import './Button.scss';

const Button = ({action, value}) => {
  function placeholder () {
    console.log('test');
  };

  return (
    <input className="Button" type="button" value={value} onClick={action || placeholder} />
  );
}

Button.propTypes = {
  action: PropTypes.func,
  value: PropTypes.string
}

export default Button;
