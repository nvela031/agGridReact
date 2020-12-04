import React from "react";
import { AgGridReact } from "ag-grid-react/lib/agGridReact";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";

const Table = () => {
  const data = [
    { name: "Alex", age: 20 },
    { name: "David", age: 22 },
    { name: "Max", age: 21 },
    { name: "Edison", age: 28 },
  ];

  const columns = [
    {
      headerName: "Name",
      field: "name",
      sortable: true,
      editable: true,
      checkboxSelection: true,
    },
    {
      headerName: "Age",
      field: "age",
      sortable: true,
      filter: true,
    },
  ];

  const defaultColDef = {
    sortable: true,
    editable: true,
    filter: true,
  };
  return (
    <div
      className='ag-theme-alpine'
      style={{
        height: "250px",
        width: "600px",
      }}
    >
      <AgGridReact
        rowData={data}
        columnDefs={columns}
        defaultColDef={defaultColDef}
      />
    </div>
  );
};

export default Table;
