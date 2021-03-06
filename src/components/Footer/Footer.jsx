import React from 'react';
import PropTypes from 'prop-types';

import Button from '../Common/Button/Button.jsx';

import './Footer.scss';

const Footer = ({firstGameTime, lastGameTime}) => {
  return (
    <div className="Footer--container">
      <Button value="Today" />
      <Button value="Print Timetable" />

      <div className="Footer--summary">
        First game starts at {firstGameTime}. Last game ends at {lastGameTime}.
      </div>
    </div>
  );
};

Footer.propTypes = {
  firstGameTime: PropTypes.string,
  lastGameTime: PropTypes.string
};

export default Footer;
