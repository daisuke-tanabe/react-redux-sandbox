import styled from 'styled-components';

const Status = ({ className, calculateWinner, squares, xIsNext }) => {
  const player = xIsNext ? '☓' : '◯';
  const status = calculateWinner(squares) ? `Winner: ${calculateWinner(squares)}` : `Next player: ${player}`;

  return (
    <div className={className}>{status}</div>
  );
};

const StyledStatus = styled(Status)`
  margin-bottom: 10px;
`;

export default StyledStatus;
