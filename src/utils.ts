import { DataTitle } from 'model/types';

export const formatData = (title: string, number: number) => {
  if (title === 'ROAS') {
    console.log(number);
    const formatter = Intl.NumberFormat('en-US', {
      style: 'percent',
      minimumFractionDigits: 0,
    });
    return formatter.format(number);
  }
  return;
};
