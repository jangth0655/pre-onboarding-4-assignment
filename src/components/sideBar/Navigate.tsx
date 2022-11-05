import { Link, useMatch } from 'react-router-dom';
import { HiDesktopComputer, HiOutlineChartBar } from 'react-icons/hi';
import styled from 'styled-components';

const PageContainer = styled.div`
  padding: 0 0.5rem;
  height: 60px;
  border-radius: 10px;
  display: flex;
  align-items: center;
`;

const IconBox = styled.div`
  margin-right: 12px;
  color: rgb(2 132 199);
`;

const PageName = styled.span`
  color: rgb(2 132 199);
`;

const Navigate: React.FC = () => {
  const dashBoardPath = !!useMatch('/');
  const managementPath = !!useMatch('/management');

  return (
    <>
      <Link to="/">
        <PageContainer
          style={{ backgroundColor: dashBoardPath ? 'rgb(229 231 235)' : '' }}
        >
          <IconBox>
            <HiDesktopComputer />
          </IconBox>
          <PageName>대시보드</PageName>
        </PageContainer>
      </Link>
      <Link to="/management">
        <PageContainer
          style={{ backgroundColor: managementPath ? 'rgb(229 231 235)' : '' }}
        >
          <IconBox>
            <HiOutlineChartBar />
          </IconBox>
          <PageName>광고관리</PageName>
        </PageContainer>
      </Link>
    </>
  );
};
export default Navigate;
