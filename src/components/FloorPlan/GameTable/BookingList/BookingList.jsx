import React from 'react';

import BookingListItem from './BookingListItem/BookingListItem.jsx';

import './BookingList.scss';

const BookingList = ({}) => {
  return (
    <div className="BookingList">
      <BookingListItem time="9am" owner="Me" game="D&D" />
      <BookingListItem time="9am" owner="Me" game="D&D" />
      <BookingListItem time="9am" owner="Me" game="D&D" />
    </div>
  );
};

BookingList.PropTypes = {
};

export default BookingList;
