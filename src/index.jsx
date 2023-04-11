import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import './assets/fonts/roboto'
import appTheme from './assets/theme/theme'

import Login from './pages/Login/Login'
import { ThemeProvider } from '@mui/material'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <ThemeProvider theme={appTheme}>
      <Login />
    </ThemeProvider>
  </React.StrictMode>
)
