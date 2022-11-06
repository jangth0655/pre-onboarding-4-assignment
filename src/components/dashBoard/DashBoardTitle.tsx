import { trendDateAtom } from 'atoms/trendAtom';
import { useFilterDate } from 'hooks/useTrend';
import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import styled from 'styled-components';

const DashBoardContainer = styled.div`
  height: 80px;
  padding: 25px 0;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const MainTitle = styled.h1`
  font-weight: 900;
  font-size: 2rem;
`;

const DateContainer = styled.div``;

interface Props {
  totalDataLength?: number;
  dashboard?: boolean;
}

const DashBoardTitle: React.FC<Props> = ({ totalDataLength, dashboard }) => {
  const filterDate = useFilterDate();

  const setTrendDate = useSetRecoilState(trendDateAtom);
  const [dateState, setDateState] = useState(0);

  const handleDateState = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const {
      currentTarget: { value },
    } = e;
    setDateState(+value);
    setTrendDate(+value);
  };

  return (
    <DashBoardContainer>
      <MainTitle>대시보드</MainTitle>
      {totalDataLength && (
        <DateContainer>
          <select
            itemType="number"
            value={dateState}
            onChange={handleDateState}
            name="select"
            id="select"
          >
            {filterDate?.map((item, i) => (
              <option value={i} key={item.id}>{`${item.date[0]}~${
                item.date[item.date.length - 1]
              }`}</option>
            ))}
          </select>
        </DateContainer>
      )}
    </DashBoardContainer>
  );
};
export default DashBoardTitle;
