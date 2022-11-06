import { atom, selector } from 'recoil';
import { Daily, DataTitle } from '../model/types';

export const STANDARD_DAY = 3;

export const trendDateAtom = atom({
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
    const state = get(trendDateAtom);
    const previewDate = state === 0 ? 0 : state - 1;
    const list = get(trendListAtom);
    const previewFilteredList = list.slice(
      previewDate * STANDARD_DAY,
      previewDate * STANDARD_DAY + STANDARD_DAY
    );
    const currentFilteredList = list.slice(
      state * STANDARD_DAY,
      state * STANDARD_DAY + STANDARD_DAY
    );
    return {
      previewFilteredList,
      currentFilteredList,
    };
  },
});

export const SelectedTitleAtom = atom<DataTitle>({
  key: 'selectedTitle',
  default: 'ROAS',
});
