import { atom, selector } from 'recoil';
import { Daily } from '../model/types';

export const STANDARD_DAY = 3;

export const trendDate = atom({
  key: 'date',
  default: 0,
});

export const trendListAtom = atom<Daily[]>({
  key: 'trend',
  default: [],
});

export const trendDateSelector = selector({
  key: 'dateSelector',
  get: ({ get }) => {
    const list = get(trendListAtom);
    const filterDate = list.map((item) => item.date);
    return filterDate;
  },
});

export const trendListSelector = selector({
  key: 'trendSelector',
  get: ({ get }) => {
    const state = get(trendDate);
    const list = get(trendListAtom);
    return list.slice(
      state * STANDARD_DAY,
      state * STANDARD_DAY + STANDARD_DAY
    );
  },
});
