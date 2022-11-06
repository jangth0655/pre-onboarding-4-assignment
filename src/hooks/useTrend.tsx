import { STANDARD_DAY, trendDateSelector } from 'atoms/trendAtom';
import { useRecoilValue } from 'recoil';

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
