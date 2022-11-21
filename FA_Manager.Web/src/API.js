import axios from "axios";
//import ApiUrlConfig from "ApiUrl";
const END_POINT = "https://localhost:44302";

let General = axios.create({
  method:"get",
  baseURL: END_POINT+"/api",
  //responseType: "json",
  headers: {
    //"Accept": "application/json; charset=utf-8",
    //"Content-Type": "application/json; charset=UTF-8",
    "Content-Type": "application/json",
  },
});

const Reprot_config = { 

    debugger;
    //url: '/user',
    
  method: 'get', // default 
  baseURL: END_POINT+"api/redport",
  headers: {
    "Accept": "application/pdf",
    "Content-Type": "application/pdf",
    //'Authorization': `Bearer ${process.env.GITHUB_AUTH_TOKEN}`,
  },
  responseType: 'blob',
  data: {
    firstName: 'Fred'
  },
  params: {
    ID: 12345
  },
}



//For Reportings
// const Report = axios.create({
// //we can also set a particular Method of particular api service
//   responseType:"blob" ,
//   baseURL: END_POINT+"api/report",
//   //timeout: 5000,
//   headers: {
//     "Accept": "application/pdf",
//     "Content-Type": "application/pdf",
//     //'Authorization': `Bearer ${process.env.GITHUB_AUTH_TOKEN}`,
//   },   
//    //responseType:'blob'
//   //or 
//   //responseType:'blob' // ('blob' is a "browser only" option.)
//   // syntax alternative to send data into the body
//   // method post
//   // only the value is sent, not the key
//   //data: 'Country=Brasil&City=Belo Horizonte',
// });

const Report = axios.create(Reprot_config);


// Alter defaults after instance has been created
//Report.defaults.headers.common['responseType'] = 'blob';


//For Excel
let Excel = axios.create({ 
  baseURL: END_POINT+"/api/generate",
  headers: {
    "Accept": "application/pdf",
    "Content-Type": "application/pdf; charset=UTF-8",
  }, 
});

export default{
  General , Report, Excel
}