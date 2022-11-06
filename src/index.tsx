import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import DashBoard from 'pages/DashBoard';
import NotFound from 'pages/NotFound';
import AdManagement from 'pages/AdManagement';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RecoilRoot } from 'recoil';
import { ThemeProvider } from 'styled-components';
import Theme from 'styles/theme';
import GlobalStyle from 'styles/GlobalStyle';

const router = createBrowserRouter([
  {
    path: '/',
    element: <DashBoard />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/management',
        element: <AdManagement />,
        errorElement: <NotFound />,
      },
    ],
  },
]);

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <ThemeProvider theme={Theme}>
          <GlobalStyle />
          <RouterProvider router={router} />
        </ThemeProvider>
      </RecoilRoot>
    </QueryClientProvider>
  </React.StrictMode>
);
