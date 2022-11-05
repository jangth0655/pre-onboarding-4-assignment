import React from 'react';
import { ThemeProvider } from 'styled-components';
import Theme from './styles/theme';
import GlobalStyle from 'styles/GlobalStyle';
import { Outlet } from 'react-router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

const App = () => {
  return (
    <ThemeProvider theme={Theme}>
      <QueryClientProvider client={queryClient}>
        <GlobalStyle />
        <Outlet />
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export default App;
