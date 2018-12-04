import styled from 'styled-components';
import BoardRow from '../molecules/BoardRow';
import Status from '../atoms/Status';

const Board = ({ className, squares, onButtonClick }) => {
  return (
    <div className={className}>
      <Status />
      <div className={`${className}__squares`}>
        {
          [...Array(squares.length).keys()].map((square, index) => {
            return <BoardRow squaresRow={squares[index]} key={index} onButtonClick={onButtonClick} />
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
