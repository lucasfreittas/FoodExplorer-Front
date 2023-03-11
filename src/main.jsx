import React from 'react'
import ReactDOM from 'react-dom/client'

import { ThemeProvider } from 'styled-components'
import theme from './Styles/theme';
import GlobalStyle from './Styles/global';

import { Routes } from './Routes';
import { AuthProvider } from './Hooks/auth';
import { OrderProvider } from './Hooks/order';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <AuthProvider>
        <OrderProvider>
          <Routes />
        </OrderProvider>
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
