import styled from 'styled-components';
import BoardRow from '../molecules/BoardRow';
import Status from '../atoms/Status';

const Board = ({ className, squares }) => {

  return (
    <div className={className}>
      <Status />
      <div className={`${className}__squares`}>
        {
          [...Array(squares/3).keys()].map(square => {
            return <BoardRow square={square} key={square} />
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
