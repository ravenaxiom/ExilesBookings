import React from 'react';

import {GAME_SPACES} from './../Common/Constants.jsx';

import GameSpace from './GameSpace/GameSpace.jsx';

import './FloorPlan.scss';

const FloorPlan = ({}) => {
  return (
    <div className="FloorPlan--container">
      {GAME_SPACES.map((space, index) => {
        return <GameSpace name={space.name} key={index} />;
      })}
    </div>
  );
};

FloorPlan.PropTypes = {
};

export default FloorPlan;
