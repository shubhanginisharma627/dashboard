import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

const AgGridTable = ({ tableData,columnDefs }) => {
  

  const onApproveClick = () => {
    // Handle approve button click
  };

  const onRejectClick = () => {
    // Handle reject button click
  };

  return (
    <div className="ag-theme-alpine" style={{ height: '200px', width: '100%' }}>
      <AgGridReact
        columnDefs={columnDefs}
        rowData={tableData}
      />
      <div className="table-buttons">
        <button onClick={onApproveClick}>Approve</button>
        <button onClick={onRejectClick}>Reject</button>
      </div>
    </div>
  );
};

export default AgGridTable;
