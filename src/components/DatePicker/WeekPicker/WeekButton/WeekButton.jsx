import React from 'react';
import PropTypes from 'prop-types';

import './WeekButton.scss';

const WeekButton = ({name}) => {
  return (
    <div className="WeekButton">
      Week {name}
    </div>
  );
};

WeekButton.PropTypes = {
  name: PropTypes.string.isRequired
};

export default WeekButton;
