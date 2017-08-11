import React from 'react';

import DayPicker from './DayPicker/DayPicker.jsx';
import WeekPicker from './WeekPicker/WeekPicker.jsx';

import './DatePicker.scss';

const DatePicker = ({}) => {
  return (
    <div className="DatePicker--container">
      <WeekPicker />
      <DayPicker />
    </div>
  );
};

DatePicker.PropTypes = {
};

export default DatePicker;
