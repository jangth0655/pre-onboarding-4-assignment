import { useQuery } from '@tanstack/react-query';
import { useTrendApi } from 'context/trendContext';
import { useState } from 'react';
import styled from 'styled-components';
import ApexChart from 'react-apexcharts';
import { Report } from 'model/interface';

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
  const [isLoading, setLoading] = useState(true);
  const trend = useTrendApi();
  const { data: trendData } = useQuery<Report>(
    ['trend'],
    async () => await trend?.getList()
  );

  setTimeout(() => {
    setLoading(false);
  }, 5000);

  return (
    <TotalStatusContainer>
      <StatusTitle>통합 광고 현황</StatusTitle>
      <StatusBoard>
        <ApexChart
          type="line"
          series={[
            {
              data: trendData?.report.daily.map((item) => item?.roas) || [],
            },
            {
              data: trendData?.report.daily.map((item) => item?.click) || [],
            },
          ]}
          options={{
            chart: {
              height: 200,
              width: 200,
            },
          }}
        />
      </StatusBoard>
    </TotalStatusContainer>
  );
};
export default TotalStatus;
