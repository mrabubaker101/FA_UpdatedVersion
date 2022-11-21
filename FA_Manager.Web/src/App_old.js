import './App.css';
import Login_frm from './components/forms/Login_frm';
import { Button, CssBaseline } from '@mui/material';
import MyTester from './components/templates/MyTester';
import ITextBox from './components/UsingFunctionalCompo/ITextBox';
import React, { useState ,useRef } from 'react';
import IModal from './components/UsingFunctionalCompo/IModal';
import HomePage_Login from './components/forms/HomePage_Login';
import {  Routes}  from "react-router-dom";
import AllRoutes from './components/Layouts/AllRoutes';

function App_old() {
//   const[user,setUser]=useState("BAKKAR")
//   const[address,setAddress]=useState("ISB")
//   const[IsOpenLedger,setIsOpenLedger]=useState(false)
//   const[IsOpen,setIsOpen]=useState(false)
//   const[secOpen,setSecOpen]=useState(false)
//   const[ThirdOpen,setThirdOpen]=useState(false)
//   const[AllowedSecond,setAllowedSecond]=useState(true)
//   const[AllowedThird,setAllowedThird]=useState(true)
//   const myContainer = useRef(null);   //In Functional Components
//   const fur= React.createRef()        //In Class based Components
//   console.log("IsOpen",IsOpen)
//   console.log("secOpen",secOpen)
//   console.log("ThirdOpen",ThirdOpen)

// let CHECK=()=>{
//   fur.current.innerText="Checking and Updating Heading tag "
//   console.log("fur",fur.current.innerText); 
// }
// let CHECK2=()=>{
//   console.log("myContainer",myContainer.current.innerHTML);
//   console.log("myContainer",myContainer.current.value);
// }
return (<React.Fragment>
        <h1>Old App JSX</h1>
{/* <AllRoutes /> */}
        {/* Main latest */}
          {/* <HomePage_Login /> */}
       
       </React.Fragment>
       );
      }
      {/*   <div  >*/}
       {/* <Login_frm /> */}
       {/* <CssBaseline /> */}
       {/* <MyTester /> */}
      
{/* <h1>HOPING...</h1>
<h2  ref={fur} onClick={CHECK}>jAZZ....</h2>
<h2  ref={myContainer} onClick={CHECK2}>Telenor....</h2>


<h3>FUNCTIONAL COMPONENTS</h3>
<ITextBox 
        placeholder="Enter Name"
        color="secondary"
        value={user}
        onChange = {(e)=>setUser(e.target.value)}
/> 
<ITextBox 
        placeholder="Enter Name"
        color="secondary"
        value={address}
        onChange = {(e)=>setAddress(e.target.value)}
/> 


      <Button onClick={()=>setIsOpen(true)} >Open Modal</Button>
      <Button onClick={()=>setIsOpenLedger(true)} >Open G/L </Button>
      
      <IModal 
          open = {IsOpen}
          Closer={setIsOpen} 
          Heading="Details of Cities"
          Content="lorem sprem"

          //for second modal
          AllowedSecond={AllowedSecond}
          secOpen={secOpen} 
          setSecOpen={setSecOpen} //means poora function send kr rhy hen , andar call karengy
          

          //for third modal
          AllowedThird={AllowedThird}
          ThirdOpen={ThirdOpen}
          setThirdOpen={setThirdOpen}
      />

      <IModal 
          open = {IsOpenLedger}
          Closer={setIsOpenLedger}
          Heading="Details of Ledger"
          Content="Accounting...."
      /> */}
    {/*</div>*/}
  

export default App_old;
