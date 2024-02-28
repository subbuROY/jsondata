import React, { useState } from 'react';
import './DataFrom.css';

function DataFrom() {

  const [data, setData] = useState('');
  const [showMessage, setShowMessage] = useState(true);

  const handleChange = (e) => {
    setData(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('jsonData', JSON.stringify(data));
    setData('');
    setShowMessage(false);
    setTimeout(() => {
      setShowMessage(false);
    }, 2000); // Hide message after 2 seconds
  }

  return (
    <div>
      <center>
      <form onSubmit={handleSubmit}>
        <textarea value={data} onChange={handleChange} />
        <button type="submit">Save</button>
        
      </form>
      {showMessage && (
        <div className="popup">
          Data saved successfully!
        </div>
      )}
      </center>
      
    </div>
  );
}

export default DataFrom;
