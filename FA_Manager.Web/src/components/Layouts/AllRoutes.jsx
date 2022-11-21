import React, { useState } from 'react'
import {
    BrowserRouter, 
    Routes 
  } from "react-router-dom";
  import { Navigate, Route} from 'react-router'; 
import HomePage_Login from '../forms/HomePage_Login'; 
import BasePage from './BasePage';
import Login from '../Global/Login';
import Signup from '../Global/Signup';
import ForgotPassword from '../Global/ForgotPassword';
import MainPage from './MainPage';
import MainAppBar from '../AppHeader/MainAppBar';
const AllRoutes=()=> {
 
    const [Token, setToken] = useState(localStorage.getItem("PAccountsToken") ?true:false);
 
    return ( 
        <BrowserRouter > 
                {
                    !Token?(
                        <> 
                            {/* Set all routes here -if not authorized */}
                            <Routes>
                                 <Route path="/" element={<HomePage_Login />}> 
                                    <Route path="/login" element={<Login setToken={setToken}/>}></Route>
                                    <Route path="/signup" element={<Signup />}></Route>
                                    <Route path="/forgot" element={<ForgotPassword />}></Route>
                                <Route path="*" element={<Navigate to="/login" /> }/>
                                </Route>
                            </Routes>
                         </>
                    )
                        :(<> 
                            {/* General Routing when user is  authorized */} 
                            {Token && <MainPage token={Token} setToken={setToken}/>}  
                             </>
                         )
                    }
        </BrowserRouter>
    )
  } 

export default AllRoutes;