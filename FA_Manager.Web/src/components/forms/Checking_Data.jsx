import { Button, Container, Box,List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography, getDialogContentTextUtilityClass, IconButton } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { GetService, PostService, URL } from '../../services/GeneralService_Class';
import AB_Modal from '../ReuseableCompo/AB_Modal';
import TreeView from '@mui/lab/TreeView';
import TreeItem from '@mui/lab/TreeItem';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import  { treeItemClasses } from '@mui/lab/TreeItem';
import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types';
import AddCardIcon from '@mui/icons-material/AddCard';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import CropFreeIcon from '@mui/icons-material/CropFree';
import DehazeIcon from '@mui/icons-material/Dehaze';
//for Gmail Tree
const StyledTreeItemRoot = styled(TreeItem)(({ theme }) => ({
    color: theme.palette.text.secondary,
    [`& .${treeItemClasses.content}`]: {
      color: theme.palette.text.secondary,
      borderTopRightRadius: theme.spacing(2),
      borderBottomRightRadius: theme.spacing(2),
      paddingRight: theme.spacing(1),
      fontWeight: theme.typography.fontWeightMedium,
      '&.Mui-expanded': {
        fontWeight: theme.typography.fontWeightRegular,
      },
      '&:hover': {
        backgroundColor: theme.palette.action.hover,
      },
      '&.Mui-focused, &.Mui-selected, &.Mui-selected.Mui-focused': {
        backgroundColor: `var(--tree-view-bg-color, ${theme.palette.action.selected})`,
        color: 'var(--tree-view-color)',
      },
      [`& .${treeItemClasses.label}`]: {
        fontWeight: 'inherit',
        color: 'inherit',
      },
    },
    [`& .${treeItemClasses.group}`]: {
      marginLeft: 0,
      [`& .${treeItemClasses.content}`]: {
        paddingLeft: theme.spacing(2),
      },
    },
  }));
  
  function StyledTreeItem(props) {
    const {
      bgColor,
      color,
      labelIcon: LabelIcon,
      labelInfo,
      labelText,
      ...other
    } = props;
  
    return (
      <StyledTreeItemRoot
        label={
          <Box sx={{ display: 'flex', alignItems: 'center', p: 0.5, pr: 0 }}>
            <Box component={LabelIcon} color="inherit" sx={{ mr: 1 }} />
            <Typography variant="body2" sx={{ fontWeight: 'inherit', flexGrow: 1 }}>
              {labelText}
            </Typography>
            <Typography variant="caption" color="inherit">
              {labelInfo}
            </Typography>
          </Box>
        }
        style={{
          '--tree-view-color': color,
          '--tree-view-bg-color': bgColor,
        }}
        {...other}
      />
    );
  }
  
  StyledTreeItem.propTypes = {
    bgColor: PropTypes.string,
    color: PropTypes.string,
    labelIcon: PropTypes.elementType.isRequired,
    labelInfo: PropTypes.element,
    labelText: PropTypes.string.isRequired,
  };


const Checking_Data = () => {
    
    const [IsOpen, setIsOpen] = useState(false)
    const ModalHandler=(val)=> setIsOpen(val)

    //another
    const [ChartOfAccountsData, setChartOfAccountsData] = useState([])
    const [calling, setcalling] = useState(false)
    const [Mix, setMix] = useState({})
    
   useEffect(() => {
        getdata()
    }, [])

     const getdata = () =>{
        try {
            GetService("coa-tree",URL.REACT_APP_BASEURL_CONFIG)
            .then((response) => {
              debugger;
                //setIsOpen(true)
                setChartOfAccountsData(response.data)
                let obj =
                    {
                        code:"X-USERCODE",
                        title:"ABU_BAKER [Username]",
                        children:response.data
                    }  
                setMix(obj)
                console.log("MIX", obj);
                console.log("special",obj);
                debugger;
                console.log(response.data);
          })
          .catch((error) => { 
            console.log(error);  
            setIsOpen(false)
          }); 
          } catch (error) {
            console.log(error);
            setIsOpen(false)
          }
    }
  
    const renderTree = (nodes) => (
        <TreeItem key={nodes.code} nodeId={nodes.code} label={nodes.title} > 
        <Box className='addition' 
        sx={{boxShadow:7,textAlign:'end',backgroundColor:'lightsteelblue'}}
        >
          {nodes.acctountType =="P" ?  
          <IconButton size='small'  onClick={(e)=>han(e,nodes.code)}  >
            <AddCardIcon fontSize='small'/>
          </IconButton>  : null }
        </Box>

          {Array.isArray(nodes.children)
            ? nodes.children.map((node) => 
              renderTree(node)) 
            : null} 
        </TreeItem>
      );
  const han=(e,node)=>{
    console.log("event",e)
    console.log("node",node)
  }
    const renderGmailTree = (nodes,IsChild) => (      
        <StyledTreeItem  
            nodeId={nodes.code} 
            labelText={nodes.title} 
            labelIcon={DehazeIcon}
            color= {IsChild ==true ?"green":"red"}
            bgColor="#e8f0fe"   
            labelInfo =
            //hide from Top Parent Code which is User/Client Name
            {
              nodes.code !== 'X-USERCODE'? 
            <div>
              <IconButton size='small'  onClick={(e)=>han(e,nodes.code)} >
                <EditIcon fontSize='small'/>
              </IconButton>

              {nodes.code !== "C" && nodes.code !== "L" && nodes.code !== "E" && nodes.code !== "A" && nodes.code !== "R" 
              ?<IconButton size='small'  onClick={(e)=>han(e,nodes.code)}  >
                 <DeleteIcon fontSize='small'/>
               </IconButton>:null
            }
              {
                nodes.acctountType =="P" ? 
                <IconButton size='small' onClick={(e)=>han(e,nodes.code)}><AddCardIcon fontSize='small'/></IconButton>:"" 
              }
              </div>
              :null
            }
          //    { 
          //     nodes.acctountType =="P" ?              
          //     <>
          //     {
          //       nodes.code !== "C" && nodes.code !== "L" && nodes.code !== "E" && nodes.code !== "A" && nodes.code !== "R" 
          //       ?              
          //     <IconButton size='small'  onClick={(e)=>han(e,nodes.code)}  >
          //       <DeleteIcon fontSize='small'/>
          //     </IconButton>
          //     :null
          //     }
          //     <IconButton size='small'  onClick={(e)=>han(e,nodes.code)} >
          //       <EditIcon fontSize='small'/>
          //     </IconButton>
          //     <IconButton size='small'  onClick={(e)=>han(e,nodes.code)}  >
          //       <AddCardIcon fontSize='small'/>
          //     </IconButton>
          //     </>                
          //   : null
          // }  
          
          
            >
          {Array.isArray(nodes.children)
            ? nodes.children.map((node) => renderGmailTree(node,true))
            : null} 
        </StyledTreeItem>
      );
  
                      
  return (
    <div>Checking_Data
<Button variant="contained" color="warning" onClick={getdata}>Get Chart of accounts</Button>

<AB_Modal 
    Heading = "Chart of accounts"
    content = {[212]}
    open ={IsOpen}
    Closer = {ModalHandler}
    children ={ 
    <Container>{ChartOfAccountsData.map((a,ind)=>(
        <Typography variant='body1'  key={ind}>{a.code+"  =  "+a.title}</Typography>
      ))}
    </Container>
    }
/>

{/* <Button variant="outlined" color="info" onClick={()=>tree(ChartOfAccountsData[2])} >Make Tree </Button> */}
<Button variant="outlined" color="info" onClick={()=>setcalling(!calling)} >Make Tree </Button>



{/* SIMPLE TREE , JUST UNCOMMENT IF YOU WANT TO SEE*/}

{/* <br />HEL<br />
    {
    calling ? 
    <TreeView
      aria-label="rich object"
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpanded={['root']}
      defaultExpandIcon={<ChevronRightIcon />}
      sx={{ height: 'auto', flexGrow: 1, maxWidth: 'auto', overflowY: 'auto' }}
    >
      {renderTree(Mix)}
    </TreeView> 
    :'Waiting for data'
    }
<hr /> */}
 
 
<h4>Gmail Tree</h4>
{
    calling ?    
<TreeView
      //aria-label="gmail"
      defaultExpanded={['3']}
      defaultCollapseIcon={<ArrowDropDownIcon />}
      defaultExpandIcon={<ArrowRightIcon />}
      defaultEndIcon={<div style={{ width: '1000px' }} />}
      sx={{ padding:2,flexGrow:2, height: 'auto',  overflowY: 'auto',overflowX:'hidden' }}
    > 
        {
        renderGmailTree(Mix,false)}
    </TreeView> 
    :'Waiting for data part 2 '
}

</div>
  )
}

export default Checking_Data;
