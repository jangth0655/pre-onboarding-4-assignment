import Chart from 'components/dashBoard/chart/Chart';
import { useCompareData } from 'hooks/useTrend';
import CompareBoard from '../compareBoard/CompareBoard';
import S from './styles';

const TotalStatus = () => {
  const compareData = useCompareData();

  return (
    <S.TotalStatusContainer>
      <S.StatusTitle>통합 광고 현황</S.StatusTitle>
      <S.StatusBoard>
        {compareData.map((item) => (
          <CompareBoard key={item.title} item={item} />
        ))}
        <Chart />
      </S.StatusBoard>
    </S.TotalStatusContainer>
  );
};
export default TotalStatus;
