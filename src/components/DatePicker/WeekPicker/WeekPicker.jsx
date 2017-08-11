import React from 'react';
import PropTypes from 'prop-types';

import {WEEKS} from './../../Common/Constants.jsx';
import DateButton from './../DateButton/DateButton.jsx';

import './WeekPicker.scss';

const WeekPicker = ({}) => {
  return (
    <div className="WeekPicker--container">
      <div className="WeekPicker--previousButton">previous</div>

      {WEEKS.map((day, index) => {
        return <DateButton name={day} key={index} />;
      })}

      <div className="WeekPicker--nextButton">next</div>
    </div>
  );
};

WeekPicker.PropTypes = {
};

export default WeekPicker;
