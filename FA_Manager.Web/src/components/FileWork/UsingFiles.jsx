import { Box, Button, CircularProgress, iconClasses } from '@mui/material'
import axios from 'axios';
import React, { useState } from 'react'
import { PostService } from '../../services/GeneralService_Class'
import SelectedDocumentList from './SelectedDocumentList';


//extension icns
import Icon_CSS from '../../assets/images/icons/extensions/css.png' 
import Icon_JS from '../../assets/images/icons/extensions/js.png' 
import Icon_CHASH from '../../assets/images/icons/extensions/c#.png' 
import Icon_WORD from '../../assets/images/icons/extensions/word.png' 
import Icon_PPT from '../../assets/images/icons/extensions/ppt.png' 
import Icon_EXCEL from '../../assets/images/icons/extensions/excel.png' 
import Icon_JSON from '../../assets/images/icons/extensions/json.png' 
import Icon_TXT from '../../assets/images/icons/extensions/txt.png' 
import Icon_IMG from '../../assets/images/icons/extensions/img.png' 
import Icon_CPP from '../../assets/images/icons/extensions/c++.png' 
import Icon_HTML from '../../assets/images/icons/extensions/html.png' 
import Icon_PDF from '../../assets/images/icons/extensions/pdf.png' 
import Icon_DEFAULT from '../../assets/images/icons/extensions/default.png' 
import Icon_SQL from '../../assets/images/icons/extensions/sql.png' 
import Icon_EXE from '../../assets/images/icons/extensions/exe.png' 
import Icon_DB from '../../assets/images/icons/extensions/db.png' 
import Icon_CSV from '../../assets/images/icons/extensions/csv.png' 
import AB_Modal from '../ReuseableCompo/AB_Modal';
import { Container } from '@mui/system';
import { PictureAsPdfSharp } from '@mui/icons-material';
import Post from '../socials/Post';
import AB_Post from '../socials/AB_Post';

const UsingFiles =()=> {
const [File, setFile] = useState();
const [FileName, setFileName] = useState('');
const [loaded, setloaded] = useState();
const [IsBusy, setIsBusy] = useState(false);
const [InputFieldM, setInputFieldM] = useState('');

//for multiple files 
const [Documents, setDocuments] = useState([]);
const [ChoosenFiles, setChoosenFiles] = useState([]);
 
//showing Selected Files
const [IsListModalOpen, setIsListModalOpen] = useState(false)

//Profile photo
const [ProfilePic, setProfilePic] = useState();
const [selectedProfilePic, setSelectedProfilePic] = useState()
const [selectedPictures, setselectedPictures] = useState([])
const [preview, setPreview] = useState(false)
const [PreviewImage, setPreviewImage] = useState()

const ListModalHandler = ()=>{
    setIsListModalOpen(false)
    setChoosenFiles([])
    setInputFieldM('')
}
const savefile =(e)=>{
setFile(e.target.files[0])
setFileName(e.target.files[0].name)
}
const GetIcon = (extension)=>{
switch (extension.toUpperCase()) {
    case 'HTML':return <img alt='file' style={{height:'40px'}} src={Icon_HTML}/> 
    case 'CSS':return <img alt='file' style={{height:'40px'}} src={Icon_CSS}/>
    case 'PDF':return <img alt='file' style={{height:'40px'}} src={Icon_PDF}/>
        //this is called fall-through in programming switch statment
    case 'WORD':
    case 'DOC':
    case 'DOCX':return <img alt='file' style={{height:'40px'}} src={Icon_WORD}/>
    case 'EXCEL':
    case 'XLX':
    case 'XLSX':return <img alt='file' style={{height:'40px'}} src={Icon_EXCEL}/>
    case 'ppt':return <img alt='file' style={{height:'40px'}} src={Icon_PPT}/>
    case 'SQL':return <img alt='file' style={{height:'40px'}} src={Icon_SQL}/>
    case 'JPG':
    case 'PNG':
    case 'JPEG':
    case 'GIF': return  <img alt='file' style={{height:'40px'}} src={Icon_IMG}/>
    case 'TXT':return <img alt='file' style={{height:'40px'}} src={Icon_TXT}/>
    case 'JSON':return <img alt='file' style={{height:'40px'}} src={Icon_JSON}/>
    case 'EXE':return <img alt='file' style={{height:'40px'}} src={Icon_EXE}/>
    case 'DB':return <img alt='file' style={{height:'40px'}} src={Icon_DB}/>
    case 'CS':return <img alt='file' style={{height:'40px'}} src={Icon_CHASH}/>
    case 'CPP':return <img alt='file' style={{height:'40px'}} src={Icon_CPP}/>
    case 'CSV':return <img alt='file' style={{height:'40px'}} src={Icon_CSV}/> 
    case 'JS':return <img alt='file' style={{height:'40px'}} src={Icon_JS}/> 
    default:return <img alt='file' style={{height:'40px'}} src={Icon_DEFAULT}/>
}
}
const saveMuliple =(e)=>{
    //================================= extraa work
    setIsBusy(true)
    setChoosenFiles([]) 
    let files = e.target.files;
    const chosenFiles = Array.prototype.slice.call(files)   //convert into array
    console.log('chosenFiles',chosenFiles); 
    let SelectedFiles = [];  
    //let REGEXP = /(?:\.([^.]+))?$/;     //file name can be dangerous
    for (let i = 0; i < files.length; i++) {
        const element = files[i];
        const nameAndExtension = element.name.split('.')
        //let icon = REGEXP.exec(element.name).pop();   //proper work
        let ext = nameAndExtension.pop();   //proper work
        console.log('ext',ext);
        let file={
            name:nameAndExtension.join('.'),
            extension : ext,
            fileIcon : GetIcon(ext)
        }
        SelectedFiles.push(file);
    }
    console.log('SelectedFiles',SelectedFiles);
    setChoosenFiles(SelectedFiles)
    setIsListModalOpen(true)
//================================= extraa work

    //===========================================================
    //prepare for Request Object
    //If Custome Model Binding
    const paramKey = 'documents';  //Same as controller's action method's Param variable Name
    const Request = new FormData();
    for (let i = 0; i < files.length; i++) {
        const elelment = files[i];
        Request.append(`${paramKey}[${i}].Document`,elelment);
        Request.append(`${paramKey}[${i}].DocumentName`, elelment.name);
        Request.append(`${paramKey}[${i}].UserId`,'UserID = 1101');
        //...more class properties in same manner
    }
    setDocuments(Request) 
    //===========================================================
    setIsBusy(false)
}
const uploadfile =()=>{
        console.log('file',File);
        const Request = new FormData();    //create request object with FormData
        Request.append("File",File);
        Request.append("FileName",FileName);   //these keys are user-defined properties in backend model 
       
        axios.post("https://localhost:44369/global/api/global/import-file",Request, {
            onUploadProgress: ProgressEvent => {
                setloaded(ProgressEvent.loaded / ProgressEvent.total*100)
            },
          }).then(res =>console.log(res.statusText))
} 
const uploadmultiple =()=>{ 
        setIsBusy(true) 
        axios.post("https://localhost:44369/global/api/global/import-multiple-dcument",Documents, {
            onUploadProgress: ProgressEvent => {setloaded(ProgressEvent.loaded / ProgressEvent.total*100)},
          }).then(res =>{
            console.log('res.data',res.data);
            setIsBusy(false)
            if(res.data.goodResponse===true){
                alert(res.data.messageBox)
                setIsListModalOpen(false)
            }
            else{
                alert(res.data.messageBox)
            }
        }).catch(x=>{
            alert(x.message)
            setIsBusy(false)
            }) 
}
const showPreview=(e)=>{
    //debugger
    let files = e.target.files
    let pictures = [];
    for (let i = 0; i < files.length; i++) {
        const element = files[i];
        //setSelectedProfilePic(element[i])
        let view = URL.createObjectURL(element);
        pictures.push(view)   
    }    
    setselectedPictures(pictures)
    console.log('selectedPictures',selectedPictures);
} 
const PicModal =(image)=>{
    setPreviewImage(image)
    setPreview(true)
}
return (
    <div>
        <h4>J File Chooser</h4> 
        <Button variant="contained" component="label" >
            ... <input type="file" hidden onChange={savefile}/>
        </Button>
{
    FileName.length > 0 ? <><br /> <h3> {FileName}</h3></> : null 
}        
        <Button  onClick={uploadfile}> Upload File </Button>

<br /><br />
Single File Progress : {loaded}
<br /><br /> 
<Button
  //variant="contained"
  component="label"
   sx={{width:'100%',height:'100px',
   backgroundColor:'lightgray'}}>
    Upload Files <input draggable type="file" hidden multiple onChange={saveMuliple} />
</Button> 

 <Container>
<h4>Uplad Profile Photo</h4>
<Button component="label">
  ...  <input type='file' multiple hidden onChange={showPreview}/>
</Button>
<br />
{selectedPictures.length > 0 ? 
 <Container>  
    {selectedPictures.map((data,ind)=>(
        <img alt='profile'
            onClick={()=>PicModal(data)} 
            style={{
                height :'200px',
                width:'200px',
                objectFit:'cover',
                border: '1px solid #ddd',
                borderRadius: '4px',
                padding: '5px',
                cursor:'pointer'
            // hover:{
            //     boxShadow: '0 0 2px 1px rgba(0, 140, 186, 0.5)',
            // }
        }} key={ind} src={data} />

    ))}
 </Container>
 :'No images loaded'
 }
 </Container>

{ChoosenFiles.length > 0 && 
<AB_Modal 
    Heading = {
        <>
            <b>Documents</b>
            <Button 
                sx={{float: 'right',width:'30%'}} size='large' color='secondary' variant='contained'
                onClick={uploadmultiple}
                disabled={IsBusy}>
            Submit File{ChoosenFiles.length>1 ? 's' : ''} 
             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{IsBusy?<CircularProgress /> : null}
             </Button>
        </>}
    open ={IsListModalOpen}
    Closer = {ListModalHandler}
    children ={<Container><SelectedDocumentList BusyState={IsBusy} ChoosenFiles = {ChoosenFiles} /></Container>}
    BusyState={IsBusy}
/>  
} 
<br /><br />
<Box flex={4} p={{ xs: 0, md: 2 }}>
<AB_Post />
<AB_Post />
<AB_Post />
<AB_Post />
</Box>
<AB_Modal 
open = {preview}
Closer={setPreview}
children ={<Container><img 
    style={{
        height :'600px',
        width:'100%',
        objectFit:'cover',
        border: '1px solid #ddd',
        borderRadius: '4px',
        padding: '5px',
        inlineSize:'-webkit-fill-available'
}}
    alt='user' src = {PreviewImage} /></Container>}

/>

<br /><br />
        </div>
  )
}

export default UsingFiles