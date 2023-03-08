import React, { useState, useEffect } from 'react';
import { TextField, CircularProgress, Slide } from '@mui/material';
import './App.css';

function App() {
  const [cityName, setCityName] = useState('Moscow');
  const [inputText, setInputText] = useState('');
  const [data, setData] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid={Your API}&units=metric`,
    )
      .then((res) => {
        if (res.status === 200) {
          error && setError(false);
          return res.json();
        } else {
          throw new Error('Something went wrong');
        }
      })
      .then((data) => {
        setData(data);
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, [cityName, error]);

  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      setCityName(e.target.value);
      setInputText('');
    }
  };

  return (
      <div className="wrapper__bg">
        {!loading ? (
          <>
            <TextField
              className="search-input"
              placeholder="Search location"
              error={error}
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyDown={handleSearch}
            />
            <h1 className="city">{data.name}</h1>
            <div className="weather-group">
              <img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt="" />
              <h1>{data.weather[0].main}</h1>
            </div>

            <h1 className="temperature">{data.main.temp.toFixed()} °C</h1>

            <Slide direction="right" timeout={800} in={!loading}>
              <div className="box-container">
                <div className="box__inner">
                  <div className="box">
                    <p>Humidity</p>
                    <h1>{data.main.humidity.toFixed()}%</h1>
                  </div>
                  <div className="box">
                    <p>Wind</p>
                    <h1>{data.wind.speed.toFixed()} km/h</h1>
                  </div>
                  <div className="box">
                    <p>Gust</p>
                    <h1>{data.wind.gust.toFixed()} m/s</h1>
                  </div>
                </div>
                <div className="box__inner">
                  <div className="box">
                    <p>Min Temp</p>
                    <h1>{data.main.temp_min.toFixed()} °C</h1>
                  </div>
                  <div className="box">
                    <p>Max Temp</p>
                    <h1>{data.main.temp_max.toFixed()} °C</h1>
                  </div>
                  <div className="box">
                    <p>Feels Like</p>
                    <h1>{data.main.feels_like.toFixed()} °C</h1>
                  </div>
                </div>
              </div>
            </Slide>
          </>
        ) : (
          <CircularProgress />
        )}
      </div>
  );
}

export default App;
