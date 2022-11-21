import React from 'react'
import { Routes, Route} from 'react-router';
import WrongPage from '../Global/WrongPage';
import Logout from '../Global/Logout';
import NewVendor from '../AccountsPayables/NewVendor';
import IssueCheck from '../IssuePayments/IssueCheck';
import { Container, Typography } from '@mui/material';
import CompanySetup from '../ExecutiveSettings/CompanySetup';
import Checking_Data from '../forms/Checking_Data';
import IssueCheck_Payments from '../AccountsPayables/IssueCheck_Payments';
import COAccount_Opening from '../Finance/ChatOfAccounts/COAccount_Opening';
import COA_Main from '../Finance/ChatOfAccounts/COA_Main';
import UsingRedux from '../REDUXLearn/UsingRedux';
import UsingFiles from '../FileWork/UsingFiles';
import NewVoucher from '../Finance/Vouchers/NewVoucher';
import MainComp from '../ReuseableCompo/ComponentTemplates/MainComp';
 /*
<>    
        {/* <Route path="/" element={<MainPage {...props}/>} > */
        // <Route path="/" element={<MainPage {...props}/>} />
          {/* These routes will get rendered when Outlet is provided in parent component */} 
        {/* </Route> */}

        {/* For 404 Page */}
        {/* <Route path="*" element={<Navigate to="/" /> }/> */}

 const BasePage =(props)=> { 
 
    return ( 
      <div>
      {/* <br /> */}
      <Routes>        
        <Route path="/" element={<Container><Typography variant='h4'>Company Dashboard</Typography></Container>} />  
        <Route path="/CompanySetup" element={<CompanySetup {...props}/>} />
        <Route path="/datacheck" element={<Checking_Data {...props}/>} />
        <Route path="/issueCheckPayment" element={<IssueCheck_Payments {...props}/>} />
        <Route path="/IssueCheck" element={<IssueCheck/>} />
        <Route path="/logout" element={<Logout {...props}/>} />
        <Route path="/avc" element={<h3>avc Component called</h3>} />
        <Route path="/NewVendor" element={<NewVendor />} />
        <Route path="/coa" element={<COAccount_Opening />} />
        <Route path="/coa_main" element={<COA_Main />} />
        <Route path="/red" element={<UsingRedux />} />
        <Route path="/usingfile" element={<UsingFiles />} />
        <Route path="/voucher" element={<NewVoucher />} />
        <Route path="/mycomponents" element={<MainComp />} />
        <Route path="*" element={<WrongPage /> }/> 
      </Routes>
       </div> 
    )
  } 
export default BasePage;