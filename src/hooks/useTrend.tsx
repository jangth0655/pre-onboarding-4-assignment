import {
  STANDARD_DAY,
  trendDateSelector,
  trendListSelector,
} from 'atoms/trendAtom';
import { useRecoilValue } from 'recoil';
import { compareData } from 'utils';

export const useFilterDate = () => {
  const totalDate = useRecoilValue(trendDateSelector);
  const totalDateLength = totalDate.length;
  const offset = Math.floor(totalDateLength / STANDARD_DAY);

  let filterDate = [];
  let initialIndex = 0;
  for (initialIndex; initialIndex <= offset; initialIndex += STANDARD_DAY) {
    const date = totalDate.slice(initialIndex, STANDARD_DAY + initialIndex);
    filterDate.push({ date, id: initialIndex });
  }

  return filterDate;
};

export const useCompareData = () => {
  const { currentFilteredList, previewFilteredList } =
    useRecoilValue(trendListSelector);

  const clickResponse = compareData(
    previewFilteredList.map((item) => item.click),
    currentFilteredList.map((item) => item.click),
    '클릭수'
  );

  const roasResponse = compareData(
    previewFilteredList.map((item) => item.roas),
    currentFilteredList.map((item) => item.roas),
    'ROAS'
  );

  const costResponse = compareData(
    previewFilteredList.map((item) => item.cost),
    currentFilteredList.map((item) => item.cost),
    '광고비'
  );

  const impResponse = compareData(
    previewFilteredList.map((item) => item.imp),
    currentFilteredList.map((item) => item.imp),
    '노출 수'
  );

  const cvResponse = compareData(
    previewFilteredList.map((item) => item.convValue),
    currentFilteredList.map((item) => item.convValue),
    '전환 수'
  );

  const convValueResponse = compareData(
    previewFilteredList.map((item) => item.cost),
    currentFilteredList.map((item) => item.cost),
    '매출'
  );

  return [
    roasResponse,
    costResponse,
    impResponse,
    clickResponse,
    cvResponse,
    convValueResponse,
  ];
};
