import styled from 'styled-components';
import ApexChart from 'react-apexcharts';

const ChartContainer = styled.div`
  width: 100%;
`;

const ChartDataContainer = styled.div`
  height: 40%;
  margin-bottom: 100px;
`;

const ChartData = styled.div`
  border: 1px solid rgb(229 231 235);
  border-radius: 8px;
  width: 300px;
  height: 79px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 1rem;
`;

const NameBox = styled.div`
  width: 100%;
  margin-bottom: 0.5rem;
  font-size: 0.8rem;
  & span {
    color: rgb(107 114 128);
  }
`;
const DataBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Data = styled.span``;
const Indicator = styled.span`
  font-size: 0.7rem;
`;

const ChartGraph = styled.div`
  border: 1px solid black;
  display: flex;
  align-items: flex-end;
  width: 100%;
`;

const Chart = () => {
  return (
    <ChartContainer>
      <ChartGraph>
        {/*  <ApexChart
          type="line"
          series={[
            {
              data:
                trendData?.report.daily
                  .slice(0, 10)
                  .map((item) => item?.roas) || [],
            },
            {
              data:
                trendData?.report.daily
                  .slice(0, 10)
                  .map((item) => item?.click) || [],
            },
          ]}
          options={{
            chart: {
              width: 500,
            },
          }}
        /> */}
      </ChartGraph>
    </ChartContainer>
  );
};
export default Chart;
