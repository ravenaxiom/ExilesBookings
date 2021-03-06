import React from 'react';

import './Overlay.scss';

const Overlay = ({overlayOpen}) => {
  return (
  
    <div className="Overlay--container">
      <div className="Overlay--close-button">X</div>
      <div className="Overlay--title">EDIT</div>

      <div className="Overlay--owner">Owner Name</div>
      <div className="Overlay--time">9 AM</div>
      <div className="Overlay--game-type">D&D</div>
      <div className="Overlay--game-name">CoS</div>
      <div className="Overlay--repeat">Repeat: no</div>

      <div className="Overlay--delete-booking">Delete booking</div>
    </div>
  );
};

Overlay.propTypes = {
  overlayOpen: PropTypes.boolean.isRequired
};

export default Overlay;
