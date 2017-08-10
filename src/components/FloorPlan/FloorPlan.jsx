import React from 'react';

import GameTable from './GameTable/GameTable.jsx';

import './FloorPlan.scss';

const FloorPlan = ({}) => {
  return (
    <div className="FloorPlan">
      <GameTable name="Table A" />
      <GameTable name="Table B" />
      <GameTable name="Table C" />
    </div>
  );
};

FloorPlan.PropTypes = {
};

export default FloorPlan;
