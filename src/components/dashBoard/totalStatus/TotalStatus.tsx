import Chart from 'components/dashBoard/chart/Chart';
import { useCompareData } from 'hooks/useTrend';
import styled from 'styled-components';
import CompareBoard from '../compareBoard/CompareBoard';
import S from './styles';

const ComparedBoardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
`;

const TotalStatus = () => {
  const compareData = useCompareData();

  return (
    <S.TotalStatusContainer>
      <S.StatusTitle>통합 광고 현황</S.StatusTitle>
      <S.StatusBoard>
        <ComparedBoardContainer>
          {compareData.map((item) => (
            <CompareBoard key={item.title} item={item} />
          ))}
        </ComparedBoardContainer>
        <Chart />
      </S.StatusBoard>
    </S.TotalStatusContainer>
  );
};
export default TotalStatus;
