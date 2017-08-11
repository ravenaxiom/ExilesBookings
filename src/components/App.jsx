import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import Button from './Common/Button/Button.jsx';
import DatePicker from './DatePicker/DatePicker.jsx';
import FloorPlan from './FloorPlan/FloorPlan.jsx';
import Footer from './Footer/Footer.jsx';
import Overlay from './Overlay/Overlay.jsx';
import {myAction} from './../store/actions';

import './App.scss';

const App = (props) => {
  console.log('props.myAction = ', props.myAction, props)
  return (
    <div className="App">
      <Button value={`testCounter = ${ props.testCounter}`} action={props.myAction} />
      <DatePicker />
      <FloorPlan />
      <Overlay />
      <Footer firstGameTime="9AM" lastGameTime="10PM" />
    </div>
  )
}

App.propTypes = {
  myAction: PropTypes.func
};

const mapStateToProps = state => {
  return {
    testCounter: state.baseReducer.testCounter
  };
};

const mapDispatchToProps = dispatch => {
  return {
    myAction: (value) => dispatch(myAction(value))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
