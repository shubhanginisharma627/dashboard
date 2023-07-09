import React from 'react';
import SideNavbar from './SideNavbar';
import ReusableCard from './ReusableCard';
import AgGridTable from './AgGridTable';
import Link from '@mui/material/Link';
import Header from './Header';
import './App.css'
const ColCellRenderer = props => {
     return (
      <div className="table-buttons" >
      <button>Approve</button>
      <button>Reject</button>
       </div>
     )
     };
const App = () => {
  const tableData1 = [
    { Name: 'ACME Corp', Budget: '$ 200,000', Spend: '$ 173,762', Forecast: '$ 205,049' },
    { Name: 'Raman Inc', Budget: '$ 200,000', Spend: '$ 124,762', Forecast: '$ 292,629' }
  ];

  const tableData2 = [
    { Bucket_Name: 'ACME Corp', Current_Budget: '$ 200,000', Requested_Budget: '$ 250,000', Requested_By: 'Joe Hilfinger'},
    // Add more rows
  ];

  const tableData3 = [
    { Name: 'Longate', Budget: '$ 200,000', Spend: '$ 173,762', Forecast: '$ 205,049' },
    // Add more rows
  ];
  const columnDefs1 = [
    { headerName: 'Name', field: 'Name',
    cellRenderer: (props)=>{
       return(
        <Link href="#" underline="none">
       {props.value}
      </Link>
       )
    },
    suppressSizeToFit: true,
     width:280 },
    { headerName: 'Budget', field: 'Budget',suppressSizeToFit: true, width:280},
    { headerName: 'Spend', field: 'Spend' ,suppressSizeToFit: true,width:280},
    { headerName: 'Forecast', field: 'Forecast',suppressSizeToFit: true,width:280 },
  ];
  const columnDefs2 = [
    { headerName: 'Bucket Name', field: 'Bucket_Name', cellRenderer: (props)=>{
      return(
       <Link href="#" underline="none">
      {props.value}
     </Link>
      )
   },
   suppressSizeToFit: true, width:200 },
    { headerName: 'Current Budget', field: 'Current_Budget',suppressSizeToFit: true, width:180 },
    { headerName: 'Requested Budget', field: 'Requested_Budget',suppressSizeToFit: true, width:180 },
    { headerName: 'Requested By', field: 'Requested_By', cellRenderer: (props)=>{
      return(
       <Link href="#" underline="none">
      {props.value}
     </Link>
      )
   } ,
   suppressSizeToFit: true, width:180},
    { headerName: '  ', field: 'button',cellRenderer: ColCellRenderer ,suppressSizeToFit: true, width:180},
  ];
  const columnDefs3 = [
    { headerName: 'Name', field: 'Name', cellRenderer: (props)=>{
      return(
       <Link href="#" underline="none">
      {props.value}
     </Link>
      )
   } ,
   suppressSizeToFit: true, width:280},
    { headerName: 'Budget', field: 'Budget',suppressSizeToFit: true, width:280 },
    { headerName: 'Spend', field: 'Spend',suppressSizeToFit: true, width:280 },
    { headerName: 'Forecast', field: 'Forecast',suppressSizeToFit: true, width:280 },
  ];
  return (
    <div>
      <div className="main-content">
        <SideNavbar />
        <div className="content">
          <Header/>
          <div className="cardDeck">
          <ReusableCard title="$ 400,000" description="Total budget you own" idname="white" />
          <ReusableCard title="$ 299,762" description="Spent month-to-date" idname="blue"/>
          <ReusableCard title="$ 2,874,582" description="Forecasted till month end" idname="green" />
          </div>
          <AgGridTable tableData={tableData1} columnDefs={columnDefs1}  title={"Buckets you own"} />
          <AgGridTable tableData={tableData2} columnDefs={columnDefs2}  title={"Approvals assigned to you"}/>
          <AgGridTable tableData={tableData3} columnDefs={columnDefs3}  title={"Buckets you are member of "}/>
        </div>
      </div>
    </div>
  );
};

export default App;
