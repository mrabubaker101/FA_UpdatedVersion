import { Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import M_DataTable from '../../ReuseableCompo/AB_Components/M_DataTable';
import M_Dialog from '../../ReuseableCompo/AB_Components/M_Dialog';
import M_Loader from '../../ReuseableCompo/AB_Components/M_Loader';
import M_LookupBar from '../../ReuseableCompo/AB_Components/M_LookupBar';
import M_Lookup_Accounts from '../../ReuseableCompo/AB_Components/M_Lookup_Accounts';
import M_Lookup_Table from '../../ReuseableCompo/AB_Components/M_Lookup_Table';
import AB_Grid_Reuseable from '../../ReuseableCompo/AB_Grid_Reuseable';

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
const COAccount_Opening = () => {
  const [OpenLoopkup, setOpenLoopkup] = useState(false) 
  const [Loader, setLoader] = useState(false) 
  const [SelectedRow, setSelectedRow] = useState({}) 
  const [SelectedAccount, setSelectedAccount] = useState('') 

  useEffect(() => {
    debugger
    setSelectedAccount(SelectedAccount.name)
    
  }, [SelectedRow])
  

  console.log("SelectedRow",SelectedRow);
  console.log("SelectedAccount",SelectedAccount);
  const Grid_Data = [
        createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
        createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
        createData('Eclair', 262, 16.0, 24, 6.0),
        createData('Cupcake', 305, 3.7, 67, 4.3), 
        createData('Gingerbread', 356, 16.0, 49, 3.9),
      ]; 
      
  const Grid_Columns = [
        { field: 'name', HeaderName: 'Name', minWidth: 170 },
        { field: 'code', HeaderName: 'ISO\u00a0Code', minWidth: 100 },
        {
          HeaderName: 'Population',
          field: 'population',
          minWidth: 170,
          align: 'right',
          format: (value) => value.toLocaleString('en-US'),
        },
        {
          field: 'size',
          HeaderName: 'Size\u00a0(km\u00b2)',
          minWidth: 170,
          align: 'right',
          format: (value) => value.toLocaleString('en-US'),
        },
        {
          field: 'density',
          HeaderName: 'Density',
          minWidth: 170,
          align: 'right',
          format: (value) => value.toFixed(2),
        },
        {
          field: 'vew',
          HeaderName: 'Action',
          minWidth: 170,
          align: 'right',
          format: (value) => value.toFixed(2),
        }  
      ];
  const OnLookupClick = ()=>{
    setLoader(true)
    setTimeout(() => {
     setLoader(false)
     setOpenLoopkup(true)  
   }, 3000); 
  }  
  
  return (
    <><br />
      {Loader &&  <M_Loader variant='backdrop'/>}
      <Typography  variant='h5' color='navy'> Create Chart of Accounts</Typography>
      <hr />
      <Grid container spacing={2} >

        <Grid item  xs={12} sm={4}  alignSelf='center'>
          <Typography
            sx={{fontVariantCaps:'small-caps'}} 
            align="right" variant='subtitle1' color='gray'> <b>Select Head of Account </b>
          </Typography>
        </Grid>

          <Grid item  xs={12} sm={8}  justify={"flex-end"} alignSelf='center'>
          <M_LookupBar OnLookupClick={OnLookupClick} fullWidth  />
        </Grid>

      </Grid>

      <AB_Grid_Reuseable 
        columns= {Grid_Columns}
        data = {Grid_Data}
      />

<M_Lookup_Accounts 
  open={OpenLoopkup}
  Closer={setOpenLoopkup}
  Heading='Select Account'
    childern={
      <M_Lookup_Table 
        columns={Grid_Columns} 
        data={Grid_Data}
        SelectedRow={SelectedRow}
        setSelectedRow={setSelectedRow}  
        Closer={setOpenLoopkup}
      />}
/>


    </>
  )
}
export default COAccount_Opening