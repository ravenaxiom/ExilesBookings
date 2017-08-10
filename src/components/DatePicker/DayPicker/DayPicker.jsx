import React from 'react';
import PropTypes from 'prop-types';

import DayButton from './DayButton/DayButton.jsx';

import './DayPicker.scss';

const DayPicker = ({}) => {
  return (
    <div className="DayPicker">
      <DayButton name="Mon" />
      <DayButton name="Tue" />
      <DayButton name="Wed" />
    </div>
  );
};

DayPicker.PropTypes = {
};

export default DayPicker;
