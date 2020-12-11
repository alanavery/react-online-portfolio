import { useState } from 'react';
import axios from 'axios';

import WeatherResults from './WeatherResults';

function Weather() {
  const [zip, setZip] = useState('');
  const [weather, setWeather] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const url = `http://api.openweathermap.org/data/2.5/weather?zip=${zip},us&appid=052f26926ae9784c2d677ca7bc5dec98`;
    axios
      .get(url)
      .then((result) => {
        setWeather(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>How's the Weather in Your Area?</h1>
        {weather ? <WeatherResults weather={weather} /> : null}
        <label htmlFor="zip">Zip:</label>
        <input
          type="text"
          name="zip"
          id="zip"
          onChange={(e) => {
            setZip(e.target.value);
          }}
        />
        <input type="submit" value="Find Out" />
      </form>
    </div>
  );
}

export default Weather;
