import { Container, Toolbar, Typography } from '@mui/material'
import { AgGridReact } from 'ag-grid-react'
import React from 'react'
import MyLookupBar from '../ReuseableCompo/AB_LookupBar_A'
import ITextBox from '../ReuseableCompo/ITextBox'
export default function IssueCheck_Payments() {

    let EmptyMsg = <h1>No outstanding due for VendorName</h1>
  return (<> <br />
<Typography variant='h4' fontWeight={400} fontSize={30} fontFamily={'Roboto'}>
    Issue Check Payments
</Typography>
<br />
<Container>
<MyLookupBar  fullWidth label='Vendor/Supplier/Agent/Staff Name'/>
{EmptyMsg}
</Container>   

</>)
}
