import React, { Component } from 'react'
import { AgGridColumn, AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";
import "ag-grid-community/dist/styles/ag-theme-alpine-dark.css";
import "ag-grid-community/dist/styles/ag-theme-material.css";
import "ag-grid-community/dist/styles/ag-theme-balham-dark.css";
import { GridApi } from "ag-grid-community";
import "ag-grid-community";
import { Button, LinearProgress } from '@mui/material';
import { GetService ,URL} from '../../services/GeneralService_Class';
export default class MyAgGrid extends Component {
    constructor(props){
        super(props)
        this.state={
            // rowClassRules: {
            //     greenLayout: "data.Id >= 5",
            //   },
              columnDefs: [
                { headerName: "Id_Pk", field: "id_Pk", checkboxSelection: true },//sortable: true, filter: true,
                { headerName: "PAYEE", field: "payee", editable: true}, //sortable: true,//filter: true,},
                // { headerName: "Amount", field: "amount", sortable: true, filter: true },
                // { headerName: "REFERENCE", field: "REFERENCE", sortable: true, filter: true },
                { headerName: "GL_ACCT", field: "gL_ACCT", sortable: true, filter: true },
                // { headerName: "AUDIT", field: "AUDIT", sortable: true, filter: true },
              ],
              rowData: [],
              DataList:[] ,
              IsmodalOpen: false,
              cache:"",
              count:0
        }
    }
    handeler=()=>{
       
    } 

    componentDidMount = async ()=>{
        this.setState({SetLoader:true})
        try {
        GetService("lwgltran?top=10000",URL.REACT_APP_BASEURL_CONFIGURATION)
        .then((response) => response.data)
        .then((result)=>{ 
            this.setState({
                cache:result.msg,
                SetLoader:false,
                DataList:result.test,
                rowData:result.test, 
                count:result.test.length
            })  
        })
        .catch((error) => 
        {
            console.log(error)
            this.setState({SetLoader:false,cache:""})
        }); 
        }
         catch (error) {
            this.setState({SetLoader:false,cache:""})
            console.log(error);  
        }
    }
  render() {
    return (
      <div> 
          <hr />
          {"Cache Message : " +this.state.cache+"  [{"+this.state.count+"}]"}
          <hr />
          {/* <Button onClick={this.handeler} > Load List</Button> */}
            {this.state.SetLoader === true? 
            <LinearProgress variant="indeterminate" color="secondary"/>
            :

            <div  className="ag-theme-balham-dark"
        style={{ height: 500, width: "100%" }} >
          <AgGridReact
          onGridReady={(params) => {
              (this.gridApi = params.api)
              this.gridApi.applyServerSideTransactionAsync()
            }}
          //rowStyle={{ height: "20px", color: "" }}
          rowSelection="multiple"
          rowData={this.state.rowData}
          columnDefs={this.state.columnDefs}
          animateRows={true}       
          paginationAutoPageSize= {true}
          pagination={true}

        //    rowStyle={{ height: "10px", color: "blue" }} 
        >
          <AgGridColumn resizable={true} field="id_Pk" />
          <AgGridColumn field="payee" enableCellChangeFlash={true} />
          <AgGridColumn field="gL_ACCT" />
        </AgGridReact>
        </div> 
  }
      </div>
    )
  }
}
