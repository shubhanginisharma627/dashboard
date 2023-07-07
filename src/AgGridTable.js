import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles//ag-grid.css';
import 'ag-grid-community/styles//ag-theme-alpine.css';
import { Paper } from '@mui/material';
const AgGridTable = ({ tableData,columnDefs,button }) => {
  

  const onApproveClick = () => {
    // Handle approve button click
  };

  const onRejectClick = () => {
    // Handle reject button click
  };

  return (
    <div style={{ height: '300px',border:'1px solid black',marginLeft:"10%" }}>
    <div className="ag-theme-alpine" style={{ height: '200px', width: '100%' }}>
      <AgGridReact
        columnDefs={columnDefs}
        rowData={tableData}
      />{
        button && <div className="table-buttons" >
        <button onClick={onApproveClick}>Approve</button>
        <button onClick={onRejectClick}>Reject</button>
      </div>
      }
    </div>
</div>
  );
};

export default AgGridTable;
