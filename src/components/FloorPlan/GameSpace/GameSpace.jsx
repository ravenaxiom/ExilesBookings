import React from 'react';
import PropTypes from 'prop-types';

import BookingList from './BookingList/BookingList.jsx';

import './GameSpace.scss';

const GameSpace = ({name}) => {
  return (
    <div className="GameSpace--container">
      <div className="GameSpace--header">
        <div className="GameSpace--name">{name}</div>
        <div className="GameSpace--addButton">+BOOK</div>
      </div>
      <BookingList />
    </div>
  );
};

GameSpace.PropTypes = {
  name: PropTypes.string.isRequired
};

export default GameSpace;
