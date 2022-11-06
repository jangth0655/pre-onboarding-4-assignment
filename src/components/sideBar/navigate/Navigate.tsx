import { isDashBoardAtom } from 'atoms/navigateAotm';
import { HiDesktopComputer, HiOutlineChartBar } from 'react-icons/hi';
import { useRecoilState } from 'recoil';
import S from './styles';

const backgroundColor = 'rgb(229 231 235)';
const Navigate: React.FC = () => {
  const [isDashBoard, setIsDashBoard] = useRecoilState(isDashBoardAtom);
  return (
    <>
      <S.PageContainer
        onClick={() => setIsDashBoard(true)}
        style={{ backgroundColor: isDashBoard ? backgroundColor : '' }}
      >
        <S.IconBox>
          <HiDesktopComputer />
        </S.IconBox>
        <S.PageName>대시보드</S.PageName>
      </S.PageContainer>
      <S.PageContainer
        onClick={() => setIsDashBoard(false)}
        style={{ backgroundColor: !isDashBoard ? backgroundColor : '' }}
      >
        <S.IconBox>
          <HiOutlineChartBar />
        </S.IconBox>
        <S.PageName>광고 현황</S.PageName>
      </S.PageContainer>
    </>
  );
};
export default Navigate;
