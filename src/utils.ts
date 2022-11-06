import { STANDARD_DAY } from 'atoms/trendAtom';
import { CompareData, DataTitle } from 'model/types';

export const formatData = (title: string, number: number) => {
  if (title === 'ROAS') {
    const formatter = Intl.NumberFormat('en-US', {
      style: 'percent',
      minimumFractionDigits: 0,
    });
    return formatter.format(number);
  }
  return;
};

export const compareData = (
  previewData: number[],
  currentData: number[],
  title: DataTitle
): CompareData => {
  const previewSum = previewData?.reduce(
    (prev, current) => prev + current,
    previewData[0]
  );
  const currentSum = currentData?.reduce(
    (prev, current) => prev + current,
    currentData[0]
  );

  const gap = currentSum / STANDARD_DAY - previewSum / STANDARD_DAY;
  return {
    gap: +gap.toFixed(0),
    isIncrease: !(gap < 0),
    currentSum: +currentSum.toFixed(0),
    title,
  };
};
