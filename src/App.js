import logo from './logo.svg';
import './App.css';
import Forecast from './components/forecast/Forecast';

function App() {

  // const apiKey = process.env.WEATHER_APP_API_KEY;
  // const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${state}&appid=${apiKey}`;

  return (
    <div className="App">
      <Forecast />
    </div>
  );
}

export default App;
