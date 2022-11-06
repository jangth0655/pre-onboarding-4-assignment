import { atom } from 'recoil';
import { Daily } from '../model/tyeps';

export const trendListAtom = atom<Daily[]>({
  key: 'trend',
  default: [],
});
