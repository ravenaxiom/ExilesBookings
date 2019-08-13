import React from 'react';
import PropTypes from 'prop-types';

import './BookingListItem.scss';

const BookingListItem = ({time, owner, game}) => {
  return (
    <div className="BookingListItem--container">
      <span className="BookingListItem--time">{time}</span>
      <span className="BookingListItem--owner">{owner}</span>
      <span className="BookingListItem--game">{game}</span>
      <span className="BookingListItem--editButton">EDIT</span>
    </div>
  );
};

BookingListItem.propTypes = {
  time: PropTypes.string.isRequired,
  owner: PropTypes.string.isRequired,
  game: PropTypes.string.isRequired
};

export default BookingListItem;
