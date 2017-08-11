import React from 'react';
import PropTypes from 'prop-types';

import DatePicker from './DatePicker/DatePicker.jsx';
import FloorPlan from './FloorPlan/FloorPlan.jsx';
import Footer from './Footer/Footer.jsx';
import Overlay from './Overlay/Overlay.jsx';

import './App.scss';

const App = ({}) => {
  return (
    <div className="App">
      <DatePicker />
      <FloorPlan />
      <Overlay />
      <Footer firstGameTime="9AM" lastGameTime="10PM" />
    </div>
  )
}

App.PropTypes = {
}

export default App;
