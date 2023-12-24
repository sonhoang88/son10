import React from 'react';
import MongoDataComponent from './components/MongoDataComponent';
import './App.css'; // Import your CSS file for styling
import MyComponent from './components/MyComponent'; // Check the file path

const App = () => { 
  const numberOfSnowflakes = 1;

  return (
    <div className="app-container">
      <h1>Angle Data From MongoDB</h1>
      <MongoDataComponent />
      <MyComponent />
    </div>
  );
};

export default App;
