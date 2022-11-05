import { Link, useMatch } from 'react-router-dom';
import { HiDesktopComputer, HiOutlineChartBar } from 'react-icons/hi';
import S from './styles';

const Navigate: React.FC = () => {
  const dashBoardPath = !!useMatch('/');
  const managementPath = !!useMatch('/management');

  return (
    <>
      <Link to="/">
        <S.PageContainer
          style={{ backgroundColor: dashBoardPath ? 'rgb(229 231 235)' : '' }}
        >
          <S.IconBox>
            <HiDesktopComputer />
          </S.IconBox>
          <S.PageName>대시보드</S.PageName>
        </S.PageContainer>
      </Link>
      <Link to="/management">
        <S.PageContainer
          style={{ backgroundColor: managementPath ? 'rgb(229 231 235)' : '' }}
        >
          <S.IconBox>
            <HiOutlineChartBar />
          </S.IconBox>
          <S.PageName>광고관리</S.PageName>
        </S.PageContainer>
      </Link>
    </>
  );
};
export default Navigate;
