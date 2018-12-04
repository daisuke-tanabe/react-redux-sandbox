import styled from 'styled-components';
import Button from '../atoms/Button';

const BoardRow = ({ className, row, dataKey, onButtonClick }) => {
  return (
    <div className={className} data-key={dataKey}>
      {
        row.map(values => {
          return <Button
            value={values.value}
            key={values.id}
            dataKey={values.id}
            onButtonClick={onButtonClick}
          />
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
