import styled from 'styled-components';
import ApexChart from 'react-apexcharts';
import { useState } from 'react';
import { DataTitle } from 'model/types';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { SelectedTitleAtom } from 'atoms/trendAtom';

const ChartContainer = styled.div`
  width: 100%;
`;

const ChartGraph = styled.div`
  border: 1px solid black;
  display: flex;
  align-items: flex-end;
  width: 100%;
`;

type DailyTitleObj = {
  title: DataTitle;
  id: 'roas' | 'convValue' | 'cost' | 'click' | 'imp';
};
const dailyTitleObj: DailyTitleObj[] = [
  { title: 'ROAS', id: 'roas' },
  { title: '광고비', id: 'cost' },
  { title: '클릭수', id: 'click' },
  { title: '전환 수', id: 'convValue' },
  { title: '노출 수', id: 'imp' },
];

const Chart = () => {
  const [firstSelect, setFirstSelect] = useState<string>('ROAS');
  const [optionalSelect, setOptionalSelect] = useState<string>('클릭수');
  const [active, setActive] = useState(true);
  const setSelectTitle = useSetRecoilState(SelectedTitleAtom);
  const selectedTittle = useRecoilValue(SelectedTitleAtom);
  console.log(selectedTittle);

  const handleFirstSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const {
      currentTarget: { value },
    } = e;
    if (optionalSelect === value) return;
    setFirstSelect(value);
    setSelectTitle(value as DataTitle);
    setActive(false);
  };

  const handleOptionalSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const {
      currentTarget: { value },
    } = e;
    if (firstSelect === value) return;
    setSelectTitle(value as DataTitle);
    setOptionalSelect(value);
  };

  return (
    <ChartContainer>
      <div>
        <select onChange={handleFirstSelect} value={firstSelect}>
          {dailyTitleObj.map((title) => (
            <option key={title.title} value={title.title}>
              {title.title}
            </option>
          ))}
        </select>
        <select
          disabled={active}
          onChange={handleOptionalSelect}
          value={optionalSelect}
        >
          {dailyTitleObj.map((title) => (
            <option value={title.title} key={title.title}>
              {title.title}
            </option>
          ))}
        </select>
      </div>
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
