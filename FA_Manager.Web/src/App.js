import './App.css';
import React, { useState } from 'react';
import AllRoutes from './components/Layouts/AllRoutes';
import MyAgGrid from './components/templates/MyAgGrid';
import IssueCheck from './components/IssuePayments/IssueCheck';
import { Provider } from 'react-redux'
import store from './Redux/store';


function App() { 
     return ( 
          <Provider store={store}>
               <React.Fragment>
                    {/* <IssueCheck /> */}
                    <AllRoutes />
               </React.Fragment>
          </Provider> 
     );
}
export default App;
