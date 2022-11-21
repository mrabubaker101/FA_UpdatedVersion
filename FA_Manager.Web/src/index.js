import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App_old';
import App from './App';
import reportWebVitals from './reportWebVitals';
//import { BrowserRouter ,Routes} from 'react-router-dom';
import { SnackbarProvider } from 'notistack';
import { useState } from 'react';
import { Box, createTheme, ThemeProvider } from '@mui/material';
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});
ReactDOM.render(
  <React.StrictMode>
  {/* <BrowserRouter>  */}
  <SnackbarProvider
      maxSnack={3}
      //you can provide both  globally or customize(wher it is calling), It will Override
      anchorOrigin={{ vertical: "top", horizontal: "left" }}
      preventDuplicate={true}
      autoHideDuration={5000}
      //ref={notistackRef}
      //action={(key) => <Button onClick={onClickDismiss(key)}>OK</Button>}
    > 
    <App />
    </SnackbarProvider>
  {/* </BrowserRouter> */}
  </React.StrictMode>, 

  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
