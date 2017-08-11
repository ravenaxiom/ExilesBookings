import React from 'react';
import PropTypes from 'prop-types';

import './DateButton.scss';

const DateButton = ({name}) => {
  return (
    <div className="DateButton--container">
      {name}
    </div>
  );
};

DateButton.PropTypes = {
  name: PropTypes.string.isRequired
};

export default DateButton;
