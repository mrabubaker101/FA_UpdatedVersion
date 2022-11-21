import React, { useState,useEffect } from 'react'
import { GetService,PostService, URL } from '../../../services/GeneralService_Class'
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
import CropFreeIcon from '@mui/icons-material/CropFree';
import DehazeIcon from '@mui/icons-material/Dehaze';
import { Button, Box, Typography, IconButton } from '@mui/material';

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


const COA_Tree=(props)=> {
    let {handel_NodeData} = props
    const [IsOpen, setIsOpen] = useState(false)
    const ModalHandler=(val)=> setIsOpen(val)
    const [ChartOfAccountsData, setChartOfAccountsData] = useState([])
    const [calling, setcalling] = useState(false)
    const [Mix, setMix] = useState({})
    const [EditModal, setEditModal] = useState(false)
    

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


    const Render_Tree = (nodes,IsChild) => (      
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
              <IconButton size='small'  onClick={(e)=>handel_NodeData(e,nodes)} >
                <EditIcon fontSize='small'/>
              </IconButton>

              {nodes.code !== "C" && nodes.code !== "L" && nodes.code !== "E" && nodes.code !== "A" && nodes.code !== "R" 
              ?<IconButton size='small'  onClick={(e)=>handel_NodeData(e,nodes)}  >
                 <DeleteIcon fontSize='small'/>
               </IconButton>:null
            }
              {
                nodes.acctountType =="P" ? 
                <IconButton size='small' onClick={(e)=>handel_NodeData(e,nodes)}><AddCardIcon fontSize='small'/></IconButton>:"" 
              }
              </div>
              :null
            }
            // label={nodes.title}
            // draggable={true}
            >
          {Array.isArray(nodes.children)
            ? nodes.children.map((node) => Render_Tree(node,true))
            : null}
             
        </StyledTreeItem>
      );
      
  return (
    <div>        
        <Button variant="outlined" color="info" onClick={()=>setcalling(!calling)} >Load Tree </Button>
        {
            calling ?     
            <TreeView
                  defaultExpanded={['3']}
                  defaultCollapseIcon={<ArrowDropDownIcon />}
                  defaultExpandIcon={<ArrowRightIcon />}
                  defaultEndIcon={<div style={{ width: '1000px' }} />}
                  sx={{ padding:2,flexGrow:2, height: 'auto',  overflowY: 'auto',overflowX:'hidden' }}
            > 
                {Render_Tree(Mix,false)}
            </TreeView> 
            :'Accounts Tree '
        }



    </div>
  )
}

export default COA_Tree