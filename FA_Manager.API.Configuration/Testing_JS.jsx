import axios from "axios";
 
export const URL = {
    REACT_APP_BASEURL_GLOBAL: "https://localhost:44369/api/global/",
    REACT_APP_BASEURL_CONFIGURATION: "https://localhost:44387/api/configuration/",


    REACT_APP_BASEURL_APAYABLE: "https://localhost:44399/api/accountspayable/",
    REACT_APP_BASEURL_AGENTM: "https://localhost:44339/api/agentmanagement/",
    REACT_APP_BASEURL_FINANCE: "https://localhost:44342/api/finance/",
    REACT_APP_BASEURL_PAYROLL: "https://localhost:44322/api/payroll/",
    REACT_APP_BASEURL_ACCOUNTPAYABLE: "http://localhost:6435/api/accountspayable/"
} 
export function GetService(ActionMethod, ProjectURL) {
    const API_URL = ProjectURL + ActionMethod;
    console.log("URL => ", API_URL);
    return axios.create({
        method: "get",
        baseURL: API_URL,
        headers: GetHeaders
    })
}; 
//API Headers
const GetHeaders = {
    "Content-Type": "application/json",
}

const PostHeaders = {
    //"Accept": "application/json",
    "Content-Type": "application/json",
}
 

//Working OK
export const PostService = (ActionMethod, Body, ProjectURL) => {
    const API_URL = ProjectURL + ActionMethod;
    console.log("URL => ", API_URL);
    return axios.post(API_URL, Body, PostHeaders)
} 
//using Constructor Function
function Post(ActionMethod, Body, ProjectURL) {
    this.ActionMethod = ActionMethod
    this.Body = Body
    this.ProjectURL = ProjectURL
    this.REQUEST = function () {
        const API_URL = this.ProjectURL + this.ActionMethod
        return {
            baseURL: API_URL,
            method: "post",
            headers: PostHeaders,
            data: this.BodyBody
        }
    }
}
 

export const Serve = (ProjectURL, ActionMethod, Body) => axios.create({ })




