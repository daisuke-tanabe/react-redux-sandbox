import React from 'react';

import Board from '../../assets/react/components/organisms/Board'

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

    if (this.calculateWinner(this.state.squares) || event.currentTarget.textContent !== '') return;
    const mark = this.state.xIsNext ? '☓' : '◯';

    this.setState(state => {
      state.squares[parentDataKey].values.find(data => data.id === currentDataKey).value = mark;
      this.state.xIsNext = !this.state.xIsNext;
      return state;
    });
  }

  calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    const concatSquares = squares.reduce((result, { values }) => {
      return result.concat(values.reduce((result, { value }) => {
        result.push(value);
        return result;
      }, []));
    }, []);

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (concatSquares[a] && concatSquares[a] === concatSquares[b] && concatSquares[a] === concatSquares[c]) {
        return concatSquares[a];
      }
    }

    return null;
  }

  componentDidUpdate() {
    console.log(this.state);
  }

  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board
            {...this.state}
            calculateWinner={this.calculateWinner.bind(this)}
            onButtonClick={this.onButtonClick.bind(this)}
          />
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

