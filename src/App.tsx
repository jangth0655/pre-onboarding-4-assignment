import React from 'react';
import { ThemeProvider } from 'styled-components';
import Theme from './styles/theme';
import GlobalStyle from 'styles/GlobalStyle';
import { Outlet } from 'react-router';

const App = () => {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Outlet />
    </ThemeProvider>
  );
};

export default App;
