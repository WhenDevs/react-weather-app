import React from 'react';
import './App.css';

function App() {
  return (
    <div className="wrapper">
      <div className="wrapper__bg">
        <input 
          className="search-input" 
          placeholder="Search location" 
        />
        <h1 className="city">Moscow</h1>
        <div className="weather-group">
          <img src="" alt="" />
          <h1>Clear</h1>
        </div>
        <h1 className="temperature">-5 °C</h1>
        <div className="box-container">
          <div className="box__inner">
            <div className="box">
              <p>Humidity</p>
              <h1>30%</h1>
            </div>
            <div className="box">
              <p>Wind</p>
              <h1>2 km/h</h1>
            </div>
            <div className="box">
              <p>Gust</p>
              <h1>1 m/s</h1>
            </div>
          </div>
          <div className="box__inner">
            <div className="box">
              <p>Min Temp</p>
              <h1>-3 °C</h1>
            </div>
            <div className="box">
              <p>Max Temp</p>
              <h1>-6 °C</h1>
            </div>
            <div className="box">
              <p>Feels Like</p>
              <h1>-7 °C</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
