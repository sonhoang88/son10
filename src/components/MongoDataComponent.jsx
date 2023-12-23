import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './MongoDataComponent.css'; // Import your CSS file for styling

const MongoDataComponent = () => {
  const [weightData, setWeightData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://ap-southeast-1.aws.data.mongodb-api.com/app/application-0-rxqgf/endpoint/getlatestdata');
      setWeightData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const startPolling = () => {
    const pollingInterval = setInterval(fetchData, 5000); // Adjust the interval as needed (e.g., 5000 for every 5 seconds)
    return () => clearInterval(pollingInterval);
  };

  useEffect(() => {
    fetchData(); // Fetch data when the component mounts
    const stopPolling = startPolling(); // Start polling

    return () => {
      stopPolling(); // Stop polling when the component is unmounted
    };
  }, []);

  return (
    <div className="weight-data-container">
      <h1 className="weight-data-title">
        <span>Angle: </span>
        {weightData.length > 0 ? (
          <span className="weight-value">{weightData[0].number} độ</span>
        ) : (
          <span className="no-data-message">No Angle detected.</span>
        )}
      </h1>
    </div>
  );
  
};

export default MongoDataComponent;
