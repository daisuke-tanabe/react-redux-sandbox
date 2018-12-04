import React from 'react';

import Board from '../../components/organisms/Board'

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      xIsNext: true,
      squares: [
        {
          id: 0,
          values: [
            {
              id: 0,
              value: null
            },
            {
              id: 1,
              value: null
            },
            {
              id: 2,
              value: null
            }
          ]
        },
        {
          id: 1,
          values: [
            {
              id: 3,
              value: null
            },
            {
              id: 4,
              value: null
            },
            {
              id: 5,
              value: null
            }]
        },
        {
          id: 2,
          values: [
            {
              id: 6,
              value: null
            },
            {
              id: 7,
              value: null
            },
            {
              id: 8,
              value: null
            }]
        }
      ]
    };
  }

  onButtonClick(event) {
    const parentDataKey = parseInt(event.currentTarget.parentNode.getAttribute('data-key'));
    const currentDataKey = parseInt(event.currentTarget.getAttribute('data-key'));



    this.setState(state => {
      const mark = this.state.xIsNext ? '☓' : '◯';
      state.squares[parentDataKey].values.find(data => data.id === currentDataKey).value = mark;
      this.state.xIsNext = !this.state.xIsNext;
      return state;
    });
  }

  componentDidUpdate() {
    console.log(this.state);
  }

  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board {...this.state} onButtonClick={this.onButtonClick.bind(this)} />
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

