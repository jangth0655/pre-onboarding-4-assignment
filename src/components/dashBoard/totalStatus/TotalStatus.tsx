import Chart from 'components/dashBoard/chart/Chart';
import S from './styles';

const TotalStatus = () => {
  return (
    <S.TotalStatusContainer>
      <S.StatusTitle>통합 광고 현황</S.StatusTitle>
      <S.StatusBoard>
        <Chart />
      </S.StatusBoard>
    </S.TotalStatusContainer>
  );
};
export default TotalStatus;
