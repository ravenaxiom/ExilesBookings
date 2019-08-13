import React from 'react';
import PropTypes from 'prop-types';

import BookingList from './BookingList/BookingList.jsx';

import './GameSpace.scss';

const GameSpace = ({clickHandler, name}) => {
  return (
    <div className="GameSpace--container">
      <div className="GameSpace--header">
        <div className="GameSpace--name">{name}</div>
        <div className="GameSpace--addButton" onClick={clickHandler} >+BOOK</div>
      </div>
      <BookingList />
    </div>
  );
};

GameSpace.propTypes = {
  clickHandler: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired
};

export default GameSpace;
