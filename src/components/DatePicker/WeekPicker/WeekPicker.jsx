import React from 'react';
import PropTypes from 'prop-types';

import WeekButton from './WeekButton/WeekButton.jsx';

import './WeekPicker.scss';

const WeekPicker = ({}) => {
  return (
    <div className="WeekPicker">
      <div className="WeekPicker--previous-button">previous</div>
      <WeekButton name="A" />
      <WeekButton name="B" />
      <div className="WeekPicker--next-button">next</div>
    </div>
  );
};

WeekPicker.PropTypes = {
};

export default WeekPicker;
