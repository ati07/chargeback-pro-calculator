import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
// import './index.css'
import './App.css'
import Home from './Home.tsx'
import { createTheme, ThemeProvider } from '@mui/material/styles';


export const theme = createTheme({
  typography: {
    fontFamily: 'Poppins',
    fontWeightRegular:'600',
    // subtitle1: {
    //   fontSize: 12,#233044
    // },
    h3: {
      fontFamily: 'Poppins',
    },
    body1: {
      // fontWeight: 500,
      fontFamily: 'Poppins',
    },
    button: {
      fontFamily: 'Poppins',
      // backgroundColor: '#2ebd6f',
      color: 'white',
      border: 'none',
      '&:hover': {
        backgroundColor: '#233044'
      }
    }
  }
});
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <App /> */}
    <ThemeProvider theme={theme}>
      <Home/>
    </ThemeProvider>
  </React.StrictMode>,
)
