import React from 'react';

function DataDisplay() {
  const jsonData = localStorage.getItem('jsonData');

  return (
    <div>
      <center>
      <h2>Stored JSON Data</h2>
      <pre>{jsonData}</pre>
      </center>
    </div>
  );
}

export default DataDisplay;
