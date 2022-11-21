import React,{useState,useEffect} from 'react'
import COA_Tree from './COA_Tree'
import AB_Slider from '../../ReuseableCompo/AB_Components/AB_Slider';
import { Button } from '@mui/material';
import { PostService, URL } from '../../../services/GeneralService_Class';
    
 const COA_Main = () => {

    const [SliderOpen, setSliderOpen] = useState(false)
    const [SelectNodeResponse, setSelectNodeResponse] = useState([])
    

    //Get Node Data
    const handel_NodeData = (e,node)=>{
	let AccountDetails = {
		AccountID : node.account_Id,
		Code : node.code,
		ParentCode:node.parent_Code,
		Title : node.title,
		SelectedLevel:node.levelNo,
		AcctountType : node.acctountType
	}
	console.log("AccountDetails",AccountDetails)
	try {
		//PostService('Save-COA',AccountDetails,URL.REACT_APP_BASEURL_CONFIG)
		PostService('Save-COA',AccountDetails,'https://localhost:44387/configuration/api/configuration/')
            .then((response) => {
              debugger;
		    console.log("response",response.data.information);
		    setSliderOpen(true)
                setSelectNodeResponse(response.data)
            })
          .catch((error) => { 
            console.log(error);  
            setSliderOpen(false)
          }); 
          } catch (error) {
            console.log(error);
            setSliderOpen(false)
          }

    }

return (
	<div>


		<Button onClick={()=>{setSliderOpen(true)}}>Open Slider</Button>
		<COA_Tree 
			handel_NodeData = {handel_NodeData}
		/>

		<AB_Slider 
			open={SliderOpen} 
			setSliderOpen={setSliderOpen}
			anchor="right"
		> 
			<h1>INFORMATION OF NODE</h1>
		</AB_Slider> 




	</div>
	)
}
export default COA_Main