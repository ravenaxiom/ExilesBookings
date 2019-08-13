import React from 'react';
import PropTypes from 'prop-types';

import {GAME_SPACES} from './../../constants/constants';

import GameSpace from './GameSpace/GameSpace.jsx';

import './FloorPlan.scss';

const FloorPlan = ({gameSpaceClickHandler}) => {
  return (
    <div className="FloorPlan--container">
      {GAME_SPACES.map((space, index) => {
        return <GameSpace name={space.name} clickHandler={gameSpaceClickHandler} key={index} />;
      })}
    </div>
  );
};

FloorPlan.propTypes = {
  gameSpaceClickHandler: PropTypes.func.isRequired
};

export default FloorPlan;
