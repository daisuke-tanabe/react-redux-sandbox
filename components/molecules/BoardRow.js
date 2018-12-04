import styled from 'styled-components';
import Button from '../atoms/Button';

const BoardRow = ({ className, squaresRow, key, onButtonClick }) => {
  return (
    <div className={className}>
      {
        squaresRow.map((value, index) => {
          return <Button value={value} key={index} onButtonClick={onButtonClick}  />
        })
      }
    </div>
  );
};

const StyledBoardRow = styled(BoardRow)`
  &:after {
    clear: both;
    content: "";
    display: table;
  }
`;

export default StyledBoardRow;
