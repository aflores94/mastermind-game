//jshint esversion:6 

import React from 'react';

const NewGameButton = (props) => (
  <button className='NewGame' onClick={props.handleNewGameClick}>
    New Game
  </button>
);

export default NewGameButton;