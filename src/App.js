import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react';
import API_URL_COORDS from './Const';
import Weather from './Components/Weather';

function App() {
  const [location, setLocation] = useState([]);
  const [weather, setWeather] = useState([]);
  const [visible, setVisibility] = useState('invisible');


  const getLocation = () => {
    navigator.geolocation.getCurrentPosition(function(position) {
      setLocation(position.coords);
    }); 
  }

  const getWeather = async () => {
    // console.log(location)
    await fetch(API_URL_COORDS(location.longitude, location.latitude))
      .then((res) => res.json())
      .then((test) => setWeather(test))
    setVisibility(visible == 'visible');
  }

  useEffect(() => {
    getLocation()
  }, []);

  return (
    <>
      <div className="principalDiv">
        <h1>Weather App by Andrei</h1>
        <div className="line-break"></div>
        <p>Select your location method:</p>
        <div className="line-break"></div>
        <button onClick={getWeather}>Get location</button>
        <div className="line-break"></div>
        {
          weather.name != undefined ? <div className={`${visible}`}><Weather {...weather}/></div> : null
        }
      </div>
    </>
  );
}

export default App;
