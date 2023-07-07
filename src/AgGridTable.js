import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles//ag-grid.css';
import 'ag-grid-community/styles//ag-theme-alpine.css';
import { Paper } from '@mui/material';
const AgGridTable = ({ tableData,columnDefs,button,title }) => {
  

  const onApproveClick = () => {
    // Handle approve button click
  };

  const onRejectClick = () => {
    // Handle reject button click
  };

  return (
    <div className="Ag" >
    <h3>{title}</h3>
    <div className="ag-theme-alpine" style={{ height: '150px', width: '100%' }}>
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
