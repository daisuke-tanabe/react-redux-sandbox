import styled from 'styled-components';

const Status = ({ className }) => {
  const status = 'Next player: X';

  return (
    <div className={className}>{status}</div>
  );
};

const StyledStatus = styled(Status)`
  margin-bottom: 10px;
`;

export default StyledStatus;
