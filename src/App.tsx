import React from 'react';
import { ThemeProvider } from 'styled-components';
import Theme from './styles/theme';
import GlobalStyle from 'styles/GlobalStyle';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import DashBoard from 'components/dashBoard/DashBoard';
import { RecoilRoot } from 'recoil';
import Router from 'Router';

const queryClient = new QueryClient();

const App = () => {
  return (
    <ThemeProvider theme={Theme}>
      <QueryClientProvider client={queryClient}>
        <GlobalStyle />
        <RecoilRoot>
          <Router />
        </RecoilRoot>
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export default App;
