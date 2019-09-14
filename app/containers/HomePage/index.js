/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React, { Component, PropTypes } from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import Game from './game.js'

const getUser = () => {
  return this.state.user
}

const startGame = () => {
  console.log("i was clicked!")
  
}

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "Carter Lack",
      game_name: "ucn"
    };
  }

  render() {



    return (
      <div>

  
          <h1>
            Hello World I am {this.state.user}
          {/* <FormattedMessage {...messages.header} /> */}
          </h1>

          <Game></Game>
          
          {/* <button type="button" onClick={startGame()}>start game</button> */}

      </div>
    )
  }
}

export default HomePage
