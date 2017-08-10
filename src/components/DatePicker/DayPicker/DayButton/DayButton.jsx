import React from 'react';
import PropTypes from 'prop-types';

import './DayButton.scss';

const DayButton = ({name}) => {
  return (
    <div className="DayButton">
      {name}
    </div>
  );
};

DayButton.PropTypes = {
  name: PropTypes.string.isRequired
};

export default DayButton;
