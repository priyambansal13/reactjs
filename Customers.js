import React, { useMemo } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import "../agGridModules";

const Customers = () => {
  const columnDefs = useMemo(() => [
    { headerName: "ID", field: "id", sortable: true, filter: true },
    { headerName: "Name", field: "name", sortable: true, filter: true },
    { headerName: "Email", field: "email", sortable: true, filter: true },
    { headerName: "Country", field: "country", sortable: true, filter: true },
  ], []);

  const rowData = useMemo(() => [
    { id: 1, name: "Alice Smith", email: "alice@example.com", country: "USA" },
    { id: 2, name: "Bob Johnson", email: "bob@example.com", country: "Canada" },
    { id: 3, name: "Charlie Lee", email: "charlie@example.com", country: "UK" },
    { id: 4, name: "Diana King", email: "diana@example.com", country: "Australia" },
  ], []);

  return (
    <div className="ag-grid-container ag-theme-alpine">
      <AgGridReact rowData={rowData} columnDefs={columnDefs} />
    </div>
  );
};

export default Customers;
