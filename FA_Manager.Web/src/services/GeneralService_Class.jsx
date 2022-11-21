import axios from "axios"; 

/*environment variables*/

//I have to check why process.env showing null ,
export const URL = {
  REACT_APP_BASEURL_GLOBAL: process.env.REACT_APP_BASEURL_GLOBAL,
  REACT_APP_BASEURL_CONFIG: process.env.REACT_APP_BASEURL_CONFIGURATION, 
};

// export const URL = {
// REACT_APP_BASEURL_GLOBAL : "https://localhost:44369/api/global/",
// REACT_APP_BASEURL_CONFIGURATION :"https://localhost:44387/api/configuration/", 
// }
 
//REQUEST Headers
const GET_HEADERS=()=>{
  return  {  
    headers:{
      "Content-Type": "application/json",
      //'Access-Control-Allow-Origin' :'origin-list',
      //"Authorization": `Bearer ${localStorage.getItem("PAccountsToken")  ?localStorage.getItem("PAccountsToken") : "" }` 
    }
  }
}
const POST_HEADERS=()=>{
  return {  
    headers:{
      "Content-Type": "application/json",
      //"Authorization": `Bearer ${localStorage.getItem("PAccountsToken") ?localStorage.getItem("PAccountsToken") : "" }` 
    }
  }
}
const DELETE_HEADERS = ()=>{
  return {  
    headers:{
      "Content-Type": "application/json", 
      //"Authorization": `Bearer ${localStorage.getItem("PAccountsToken") ?localStorage.getItem("PAccountsToken") : "" }` 
    }
  }
}

const PostAnonymousHeaders = {  
  headers:{
    "Content-Type": "application/json",
  }
}

//REQUEST SERVICES

//it should be a simple JS object at the End , 
//I just Passed a string Action method, that why make a function and return object

// Configure Get Service   [Working OK]
export const  GetService = (ActionMethod,ProjectURL)=> {       
  const API_URL = ProjectURL + ActionMethod
  console.log("URL => ",API_URL)
  return   axios.get(API_URL,GET_HEADERS())
};
    
// Configure Post Service  [Working OK]
export const PostService =(ActionMethod,Body,ProjectURL)=> {
  const API_URL = ProjectURL + ActionMethod;
  console.log("URL => ",API_URL);  
  return axios.post(API_URL, Body ,POST_HEADERS())
}
    
// Configure Post Anonymous Service fot login , third Party Services,etcs [Working OK]
export const PostAnonymousService =(ActionMethod,Body,ProjectURL)=> {
  const API_URL = ProjectURL + ActionMethod;
  console.log("URL => ",API_URL);  
  return axios.post(API_URL, Body ,PostAnonymousHeaders)
}
 
//export default {GetService()}
//1st  Way using create instance and then define in configure object   
//const GetService =(ActionMethod)=> axios.create(Configure_GetServic);
//2nd Way using direct Get instance
//const GetService =(ActionMethod )=> axios.get(ActionMethod,Configure_GetService);

 
// export function NetworkFile(method: string, body: any, URL?: string) {

//   if (body.length === 0) {
//     return;
//   }
//   const formData = new FormData();
//   // for (let i = 0; i < body.length; i++) {
//   //     formData.append('file', body[i]);
//   // }

//   formData.append('file', body.filename);

//   //debugger;
//   return this.http.post(URL, formData, 
//     {
//       headers: { "Content-Type": "application/json", 
//                   Authorization: `Bearer ${!!localStorage.getItem("loneWolfToken") ? localStorage.getItem("loneWolfToken") : "" }`,
//                   reportProgress: true, 
//                   responseType: 'blob'
//                },
//     });
//     //{reportProgress: true, observe: 'events' }
// }
 

// export function FileImport(Method: string, Body: any, URL: string) {
// var formData = new FormData()
// for (let i = 0; i < Body.length; i++) {
//   formData.append('file', Body[i]);
// }
// formData.append('Files',Body)
//   return axios.post(URL + Method, formData, 
//     {
//       headers: { "Content-Type": "multipart/form-data", 
//                   Authorization: `Bearer ${!!localStorage.getItem("loneWolfToken") ? localStorage.getItem("loneWolfToken") : "" }` 
//                },
//     });
// }
 
//for report viewer
// export function GetServiceReport(Method: string, URL?: string) {
//   return axios.get(URL + Method, 
//     {
//       headers: { Accept: "application/pdf",
//                  "Content-Type": "application/pdf", 
//                  Authorization: `Bearer ${!!localStorage.getItem("loneWolfToken") ? localStorage.getItem("loneWolfToken") : "" }` 
//                },
//       responseType: "blob"
//     });
// }


