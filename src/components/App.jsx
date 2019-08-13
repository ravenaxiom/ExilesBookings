import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import Button from './Common/Button/Button.jsx';
import DatePicker from './DatePicker/DatePicker.jsx';
import FloorPlan from './FloorPlan/FloorPlan.jsx';
import Footer from './Footer/Footer.jsx';
import Overlay from './Overlay/Overlay.jsx';
import {openOverlay, myAction} from './../store/actions';

import './App.scss';

const App = (props) => {
  function openOverlay () {
    console.log('open');
    props.openOverlay();
  }

  return (
    <div className="App">
      <Button value={`testCounter = ${ props.testCounter}`} action={props.myAction} />
      <DatePicker />
      <FloorPlan gameSpaceClickHandler={openOverlay} />
      <Overlay overlayOpen={props.overlayOpen} />
      <Footer firstGameTime="9AM" lastGameTime="10PM" />
    </div>
  )
}

App.propTypes = {
  openOverlay: PropTypes.func,
  myAction: PropTypes.func
};

const mapStateToProps = state => {
  return {
    overlayOpen: state.baseReducer.overlayOpen,
    testCounter: state.baseReducer.testCounter
  };
};

const mapDispatchToProps = dispatch => {
  return {
    openOverlay: () => dispatch(openOverlay()),
    myAction: () => dispatch(myAction())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
