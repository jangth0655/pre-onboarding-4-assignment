import { HiDesktopComputer, HiOutlineChartBar } from 'react-icons/hi';
import { Link, useMatch } from 'react-router-dom';

import S from './styles';

const backgroundColor = 'rgb(229 231 235)';
const Navigate: React.FC = () => {
  const dashBoardPath = !!useMatch('/');
  const adManagement = !!useMatch('/management');
  return (
    <>
      <Link to="/">
        <S.PageContainer
          style={{ backgroundColor: dashBoardPath ? backgroundColor : '' }}
        >
          <S.IconBox>
            <HiDesktopComputer />
          </S.IconBox>
          <S.PageName>대시보드</S.PageName>
        </S.PageContainer>
      </Link>
      <Link to="/management">
        <S.PageContainer
          style={{ backgroundColor: adManagement ? backgroundColor : '' }}
        >
          <S.IconBox>
            <HiOutlineChartBar />
          </S.IconBox>
          <S.PageName>광고 현황</S.PageName>
        </S.PageContainer>
      </Link>
    </>
  );
};
export default Navigate;
