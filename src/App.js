import React from 'react';
import SideNavbar from './SideNavbar';
import ReusableCard from './ReusableCard';
import AgGridTable from './AgGridTable';
import Header from './Header';
import './App.css'
const App = () => {
  const tableData1 = [
    { Name: 'Value 1', Budget: 'Value 2', Spend: 'Value 3', Forecast: 'Value 4' },
    // Add more rows
  ];

  const tableData2 = [
    { Bucket_Name: 'Data 1', Current_Budget: 'Data 2', Requested_Budget: 'Data 3', Requested_By: 'Data 4' },
    // Add more rows
  ];

  const tableData3 = [
    { Name: 'Info 1', Budget: 'Info 2', Spend: 'Info 3', Forecast: 'Info 4' },
    // Add more rows
  ];
  const columnDefs1 = [
    { headerName: 'Name', field: 'Name' },
    { headerName: 'Budget', field: 'Budget' },
    { headerName: 'Spend', field: 'Spend' },
    { headerName: 'Forecast', field: 'Forecast' },
  ];
  const columnDefs2 = [
    { headerName: 'Bucket Name', field: 'Bucket_Name' },
    { headerName: 'Current Budget', field: 'Current_Budget' },
    { headerName: 'Requested Budget', field: 'Requested_Budget' },
    { headerName: 'Requested By', field: 'Requested_By' },
  ];
  const columnDefs3 = [
    { headerName: 'Name', field: 'Name' },
    { headerName: 'Budget', field: 'Budget' },
    { headerName: 'Spend', field: 'Spend' },
    { headerName: 'Forecast', field: 'Forecast' },
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
          <AgGridTable tableData={tableData1} columnDefs={columnDefs1} button={false} title={"Buckets you own"} />
          <AgGridTable tableData={tableData2} columnDefs={columnDefs2} button={true} title={"Approvals assigned to you"}/>
          <AgGridTable tableData={tableData3} columnDefs={columnDefs3} button={false} title={"Buckets you are member of "}/>
        </div>
      </div>
    </div>
  );
};

export default App;
