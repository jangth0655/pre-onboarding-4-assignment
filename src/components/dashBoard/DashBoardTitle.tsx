import {
  STANDARD_DAY,
  trendDateSelector,
  trendListAtom,
  trendListSelector,
} from 'atoms/trendAtom';
import { useFilterDate } from 'hooks/useTrend';
import { useCallback, useEffect, useState } from 'react';
import { constSelector, useRecoilValue } from 'recoil';
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
  dashboard?: boolean;
}

interface Props {
  totalDataLength?: number;
}

const DashBoardTitle: React.FC<Props> = ({ totalDataLength }) => {
  const filterDate = useFilterDate();
  const [dateState, setDateState] = useState(0);

  const handleDateState = () => {
    setDateState((prev) => +prev);
  };

  return (
    <DashBoardContainer>
      <MainTitle>대시보드</MainTitle>
      {totalDataLength && (
        <DateContainer>
          <select name="select" id="select">
            {filterDate?.map((item, i) => (
              <option
                value={dateState}
                onChange={handleDateState}
                key={item.id}
              >{`${item.date[0]}~${item.date[item.date.length - 1]}`}</option>
            ))}
          </select>
        </DateContainer>
      )}
    </DashBoardContainer>
  );
};
export default DashBoardTitle;
