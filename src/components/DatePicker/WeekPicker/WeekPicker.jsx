import React from 'react';
import PropTypes from 'prop-types';

import {WEEKS} from './../../../constants/constants';

import Button from './../../Common/Button/Button.jsx';
import DateButton from './../DateButton/DateButton.jsx';

import './WeekPicker.scss';

const WeekPicker = ({}) => {
  return (
    <div className="WeekPicker--container">
      <Button value="<" />

      {WEEKS.map((day, index) => {
        return <DateButton name={day} key={index} />;
      })}

      <Button value=">" />
    </div>
  );
};

WeekPicker.propTypes = {
};

export default WeekPicker;
