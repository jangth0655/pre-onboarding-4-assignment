import { atom, selector } from 'recoil';
import { Daily } from '../model/tyeps';

export const trendListAtom = atom<Daily[]>({
  key: 'trend',
  default: [],
});

export const trendListSelector = selector({
  key: 'trendSelector',
  get: ({ get }) => {},
});
