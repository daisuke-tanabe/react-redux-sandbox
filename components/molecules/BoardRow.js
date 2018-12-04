import styled from 'styled-components';
import Button from '../atoms/Button';

const BoardRow = ({ className, square }) => {
  const values = Array.from(new Array(3)).map((v, i)=> (i + square) + (square * 2));
  return (
    <div className={className}>
      {
        values.map(value => {
          return <Button value={value} key={value} />
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
