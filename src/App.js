import React from 'react';
import Header from './Header';
import SideNavbar from './SideNavbar';
import ReusableCard from './ReusableCard';
import AgGridTable from './AgGridTable';

const App = () => {
  const tableData1 = [
    { column1: 'Value 1', column2: 'Value 2', column3: 'Value 3', column4: 'Value 4' },
    // Add more rows
  ];

  const tableData2 = [
    { column1: 'Data 1', column2: 'Data 2', column3: 'Data 3', column4: 'Data 4' },
    // Add more rows
  ];

  const tableData3 = [
    { column1: 'Info 1', column2: 'Info 2', column3: 'Info 3', column4: 'Info 4' },
    // Add more rows
  ];
  const columnDefs = [
    { headerName: 'Column 1', field: 'column1' },
    { headerName: 'Column 2', field: 'column2' },
    { headerName: 'Column 3', field: 'column3' },
    { headerName: 'Column 4', field: 'column4' },
  ];
  return (
    <div>
      <Header />
      <div className="main-content">
        <SideNavbar />
        <div className="content">
          <ReusableCard title="Card 1" />
          <ReusableCard title="Card 2" />
          <ReusableCard title="Card 3" />
          <AgGridTable tableData={tableData1} columnDefs={columnDefs}  />
          <AgGridTable tableData={tableData2} columnDefs={columnDefs} />
          <AgGridTable tableData={tableData3} columnDefs={columnDefs} />
        </div>
      </div>
    </div>
  );
};

export default App;
