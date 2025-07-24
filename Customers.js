import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import  { useState } from 'react';

const customerData = [
  { id: 1, name: 'John Doe', email: 'john@example.com', city: 'New York' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', city: 'London' },
  { id: 3, name: 'Alice Johnson', email: 'alice@example.com', city: 'Paris' },
  { id: 4, name: 'Bob Brown', email: 'bob@example.com', city: 'Berlin' },
];

const columnDefs = [
  { headerName: 'ID', field: 'id', sortable: true, filter: true },
  { headerName: 'Name', field: 'name', sortable: true, filter: true },
  { headerName: 'Email', field: 'email', sortable: true, filter: true },
  { headerName: 'City', field: 'city', sortable: true, filter: true },
];

const Customers = () => {
  const [rowData] = useState(customerData);
  const [columns] = useState(columnDefs);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', minHeight: 0, marginTop: '2rem' }}>
      <div className="ag-theme-alpine" style={{  width: '90%', maxWidth: 900 }}>
        <AgGridReact
          rowData={rowData}
          columnDefs={columns}
          pagination={true}
          domLayout="autoHeight"
        />
      </div>
    </div>
  );
};

export default Customers;
