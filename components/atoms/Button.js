import styled from 'styled-components';

const Button = ({ className, value, onButtonClick }) => {
  return (
    <button className={className} onClick={onButtonClick}>{value}</button>
  );
};

const StyledButton = styled(Button)`
  background: #fff;
  border: 1px solid #999;
  float: left;
  font-size: 24px;
  font-weight: bold;
  line-height: 34px;
  height: 34px;
  margin-right: -1px;
  margin-top: -1px;
  padding: 0;
  text-align: center;
  width: 34px;
`;

export default StyledButton;
