import React, { useState } from 'react';
import './App.css';

function App() {
  const [trackingNumber, setTrackingNumber] = useState('');
  const [trackingInfo, setTrackingInfo] = useState(null);

  const trackPackage = async () => {
    try {
      // Here you would make an API request to fetch tracking information
      // For demonstration purposes, let's assume the package is found
      const response = await fetch(`https://api.example.com/track/${trackingNumber}`);
      const data = await response.json();
      
      // Update state with tracking information
      setTrackingInfo(data);
    } catch (error) {
      console.error('Error tracking package:', error);
      // Display error message to the user
      alert('Error tracking package. Please try again later.');
    }
  };

  return (
    <div className="App">
      <h1>Courier Package Tracker</h1>
      <label htmlFor="trackingNumber">Enter Tracking Number:</label>
      <input 
        type="text" 
        id="trackingNumber" 
        value={trackingNumber} 
        onChange={(e) => setTrackingNumber(e.target.value)} 
      />
      <button onClick={trackPackage}>Track</button>
      {trackingInfo && (
        <div className="tracking-info">
          <h2>Tracking Information</h2>
          <p><strong>Tracking Number:</strong> {trackingInfo.trackingNumber}</p>
          <p><strong>Status:</strong> {trackingInfo.status}</p>
          <p><strong>Estimated Delivery Date:</strong> {trackingInfo.estimatedDeliveryDate}</p>
          <p><strong>Location:</strong> {trackingInfo.location}</p>
          <p><strong>Additional Notes:</strong> {trackingInfo.additionalNotes}</p>
        </div>
      )}
    </div>
  );
}

export default App;
