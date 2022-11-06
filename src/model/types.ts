export type Daily = {
  imp: number;
  click: number;
  cost: number;
  conv: number;
  convValue: number;
  ctr: number;
  cvr: number;
  cpc: number;
  cpa: number;
  roas: number;
  date: string;
};

export type CompareData = {
  gap?: number;
  isIncrease?: boolean;
  current?: number;
  title?: DataTitle;
};

export type DataTitle =
  | 'ROAS'
  | '광고비'
  | '노출 수'
  | '클릭수'
  | '전환 수'
  | '매출';
