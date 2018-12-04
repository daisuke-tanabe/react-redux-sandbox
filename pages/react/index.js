import React from 'react';

import Board from '../../components/organisms/Board'

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: [
        {
          id: 0,
          values: [
            {
              id: 0,
              value: false
            },
            {
              id: 1,
              value: false
            },
            {
              id: 2,
              value: false
            }
          ]
        },
        {
          id: 1,
          values: [
            {
              id: 3,
              value: false
            },
            {
              id: 4,
              value: false
            },
            {
              id: 5,
              value: false
            }]
        },
        {
          id: 2,
          values: [
            {
              id: 6,
              value: false
            },
            {
              id: 7,
              value: false
            },
            {
              id: 8,
              value: false
            }]
        }
      ]
    };
  }

  onButtonClick(event) {
    const parentDataKey = parseInt(event.currentTarget.parentNode.getAttribute('data-key'));
    const currentDataKey = parseInt(event.currentTarget.getAttribute('data-key'));

    this.setState(state => {
      state.squares[parentDataKey].values.find(data => data.id === currentDataKey).value = true;
      return state;
    })
  }

  componentDidUpdate() {
    console.log(this.state);
  }

  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board squares={this.state.squares} onButtonClick={this.onButtonClick.bind(this)} />
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

