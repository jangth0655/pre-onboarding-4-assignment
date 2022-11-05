import styled from 'styled-components';

const TotalStatusContainer = styled.div``;

const StatusTitle = styled.h1`
  margin-bottom: 20px;
`;

const StatusBoard = styled.div`
  background-color: white;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  width: 1039px;
  height: 654px;
  border-radius: 10px;
`;

const TotalStatus = () => {
  return (
    <TotalStatusContainer>
      <StatusTitle>통합 광고 현황</StatusTitle>
      <StatusBoard />
    </TotalStatusContainer>
  );
};
export default TotalStatus;
