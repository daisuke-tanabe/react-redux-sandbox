import React from 'react';

import Board from '../../components/organisms/Board'

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: [
        [null, null, null],
        [null, null, null],
        [null, null, null],
      ]
    };
  }

  onButtonClick() {
    alert('click');
  }

  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board squares={this.state.squares} onButtonClick={this.onButtonClick} />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

export default Game;

