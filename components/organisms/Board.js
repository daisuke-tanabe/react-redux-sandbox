import styled from 'styled-components';
import BoardRow from '../molecules/BoardRow';
import Status from '../atoms/Status';

const Board = ({ className, calculateWinner, squares, xIsNext, onButtonClick }) => {
  return (
    <div className={className}>
      <Status calculateWinner={calculateWinner} squares={squares} xIsNext={xIsNext} />
      <div className={`${className}__squares`}>
        {
          squares.map(square => {
            return <BoardRow
              row={square.values}
              key={square.id}
              dataKey={square.id}
              onButtonClick={onButtonClick}
            />
          })
        }
      </div>
    </div>
  );
};

const StyledBoard = styled(Board)`
  &:after {
    clear: both;
    content: "";
    display: table;
  }
`;

export default StyledBoard;
