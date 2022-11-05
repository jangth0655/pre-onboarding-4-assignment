import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { Report } from 'model/interface';
import Chart from 'components/dashBoard/chart/Chart';
import S from './styles';

const TotalStatus = () => {
  const [isLoading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 5000);

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
