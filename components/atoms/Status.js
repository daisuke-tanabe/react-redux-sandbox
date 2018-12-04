import styled from 'styled-components';

const Status = ({ className, xIsNext }) => {
  const status = `Next player: ${xIsNext ? '☓' : '◯'}`;

  return (
    <div className={className}>{status}</div>
  );
};

const StyledStatus = styled(Status)`
  margin-bottom: 10px;
`;

export default StyledStatus;
