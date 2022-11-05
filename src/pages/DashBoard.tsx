import TotalStatus from 'components/dashBoard/TotalStatus';
import Layout from 'components/layout/Layout';
import styled from 'styled-components';

const DashBoardContainer = styled.div`
  height: 80px;
  padding: 25px 0;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const MainTitle = styled.h1`
  font-weight: 900;
  font-size: 2rem;
`;

const DateContainer = styled.div``;

const Date = styled.span``;

const DashBoard = () => {
  return (
    <Layout>
      <DashBoardContainer>
        <MainTitle>대시보드</MainTitle>
        <DateContainer>
          <Date>123:123</Date>
        </DateContainer>
      </DashBoardContainer>
      <TotalStatus />
    </Layout>
  );
};
export default DashBoard;
