import TrendClient from 'api/trendClient';
import React, { createContext, useContext, useState } from 'react';

interface Props {
  children: React.ReactNode;
}

export const TrendContext = createContext<TrendClient | null>(null);

const trendClient = new TrendClient();

export const TrendProvider: React.FC<Props> = ({ children }) => {
  return (
    <TrendContext.Provider value={trendClient}>
      {children}
    </TrendContext.Provider>
  );
};

export const useTrendApi = () => useContext(TrendContext);
