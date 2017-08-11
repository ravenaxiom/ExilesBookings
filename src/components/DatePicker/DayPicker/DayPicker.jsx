import React from 'react';
import PropTypes from 'prop-types';

import {DAYS} from './../../Common/Constants.jsx';
import DateButton from './../DateButton/DateButton.jsx';

import './DayPicker.scss';

const DayPicker = ({}) => {
  return (
    <div className="DayPicker--container">
      {DAYS.map((day, index) => {
        return <DateButton name={day} key={index} />;
      })}
    </div>
  );
};

DayPicker.PropTypes = {
};

export default DayPicker;
