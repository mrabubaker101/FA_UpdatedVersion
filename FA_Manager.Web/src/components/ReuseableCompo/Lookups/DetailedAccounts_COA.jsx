import { Checkbox, FormControlLabel, Grid, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React, { useEffect, useState }   from 'react'
import { GetService, URL } from '../../../services/GeneralService_Class'
import StickyNote2OutlinedIcon from '@mui/icons-material/StickyNote2Outlined';
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';   
import RemoveDoneIcon from '@mui/icons-material/RemoveDone';
import DoneAllIcon from '@mui/icons-material/DoneAll';
 const Grid_Columns_Structure = [
    { field: 'code', HeaderName: 'Account Code', minWidth: 10 ,visibility:'visible'},
    { field: 'title', HeaderName: 'Account Title', minWidth: 170 ,visibility:'visible'},
    { field: 'isActive',HeaderName: 'Status', minWidth: 10,align: 'right',visibility:'hidden'},
    { field: 'status',HeaderName: 'Status', minWidth: 10,align: 'right',visibility:'visible'},
  ];
//   const columns = Grid_Columns_Structure.map(x=>x.field)
const DetailedAccounts_COA = (
    {setSelectedLookupAccount,Closer,setSelectedLookupAccountfocus}
    ) => {
 
    const [GridColumnsStructure, setGridColumnsStructure] = useState(Grid_Columns_Structure)
    const [GridColumns, setGridColumns] = useState(Grid_Columns_Structure.map(x=>x.field))
    console.log('GridColumns',GridColumns);
    const [GridDataResponse, setGridDataResponse] = useState([])
    const [GridData, setGridData] = useState([])
    const [InactiveFilter, setInactiveFilter] = useState(false)
    

    useEffect(() => {
        getdata()
    }, [])
  
    const getdata = () =>{
        try {
            GetService("coa-tree",URL.REACT_APP_BASEURL_CONFIG)
            .then((response) => { 
                console.log("response.data",response.data); 
                if(response.data){
                    //debugger
                    let data =[];
                    RecursiveCall(response.data,data)
                    setGridDataResponse(data)
                    
                    //Now render only active accounts first time by default
                    let records = data.filter(x=>x.isActive)
                    let runningArray = [];
                    for (let i = 0; i < records.length; i++) {
                        const element = records[i];
                        let obj = {
                            //fill object according to column names 
                            code : element.code,
                            title:element.title,
                            isActive:element.isActive,
                            //... add more props when needed to get more data supply from API
                            status: 
                                <IconButton size='small'
                                //if we want complete object then we can do this, 
                                    //onClick={()=>HandelRow(element)}
                                >                                     
                                    <DoneOutlineIcon fontSize='small' color = 'success' /> 
                                </IconButton>
                        }      
                        runningArray.push(obj)                  
                    }
                    // setGridData(data)  
                    runningArray.sort(sortComparisionCriteria);
                    setGridData(runningArray)  
                    console.log('runningArray',runningArray);
                    console.log('GridStructureResponse',data);
                    console.log('GridData',GridData);
                }
          })
          .catch((error) => { 
            console.log(error);  
          }); 
          } catch (error) {
            console.log(error);
          }
    }
    const RecursiveCall = (array,resultAry = []) =>{
        array.forEach(x=>{
          resultAry.push(x)
            if(Array.isArray(x.children)){
              RecursiveCall(x.children,resultAry)
          }
        })
    } 
    const RowClick=(ind,RowObj)=>{
        debugger
        let row = RowObj.filter((RowObj, idx) => idx === ind);
    }
    const HandelRow=(row)=>{ 
        setSelectedLookupAccount(row) 
        Closer()
    } 
    const FilterInactiveRecord=(e)=>{ 
       // debugger
        let check = e.target.checked;
        setInactiveFilter(check)

        let data = [...GridData]
        if(check){
            //GridDataResponse have all response data object from API 
            let inActives = GridDataResponse.filter(x=>x.isActive === false)        
            for (let i = 0; i < inActives.length; i++) {
                const element = inActives[i];
                //override status column with icon
                // element.status = 
                //     <IconButton size='small'>                                     
                //         <DoneOutlineIcon fontSize='small' color='error'/> 
                //     </IconButton>

                    //OR
                    let obj = {
                        //fill object according to column names 
                        code : element.code,
                        title:element.title,
                        isActive:element.isActive,
                        status :
                    <IconButton size='small'>                                     
                        <DoneOutlineIcon fontSize='small' color='error'/> 
                    </IconButton>
                    } 
                data.push(obj)  
            }
            data.sort(sortComparisionCriteria);
            setGridData(data)
        }
        else
        {
            let actives = data.filter(x=>x.isActive === true)
            actives.sort(sortComparisionCriteria);
            setGridData(actives)
        }
    } 
    const sortComparisionCriteria =( a, b ) => {
            if ( a.code < b.code ){
              return -1;
            }
            if ( a.code > b.code ){
              return 1;
            }
            return 0;
    }   

  return (
<>
<Grid item xs={12}  >
                <FormControlLabel sx={{float:'right'}}
                //disabled={IsDisabled}
                onChange={(e) =>FilterInactiveRecord(e)}   
                //value={Terms}
                  control={
                  <Checkbox   
                  color="primary"  
                  checked={InactiveFilter}
                   />}
                  label="Show In-Active records."
                />
</Grid>
 
<TableContainer sx={{ maxHeight: 1000 }} component={Paper} elevation={0}>
     <Table stickyHeader sx={{ minWidth: 650,overflow: 'hidden' }} size="small"  >
      <TableHead >
        <TableRow >         
         {GridColumnsStructure?.map((column) => (
              <TableCell
                key={column.field}
                //More props
                //align={column.align}
                style={{ minWidth: column.minWidth,visibility:column.visibility }}
                
              >
                {column.HeaderName}
              </TableCell>
            ))}
        </TableRow>
      </TableHead>
      <TableBody >
        
      {GridData.map((row,ind,RowObj) => (
            <TableRow 
            //best built in functions  
            onClick={() =>HandelRow(row)}    
            hover//selected
            key={ind}
            sx={{cursor:'pointer' }}
            style={{backgroundColor:`${row['isActive']==false ? 'lightgray':'white'}`}}
            >
            {GridColumns?.map((header,i) => (
                <TableCell key={i} component="th" scope="row" 
                    size='small'
                    // style={{ backgroundColor:
                    //     header==='isActive' && row[header]===false?'gray':'white'
                    // }} 
                >
                    {row[header]}
                </TableCell>
                 ))}
          </TableRow>
        ))}                

      </TableBody>
    </Table>
  </TableContainer>
</>
  )
}

export default DetailedAccounts_COA