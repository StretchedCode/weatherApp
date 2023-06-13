// module that facilitates receiving all of the data from the WeatherAPI

async function getWeather(query) {
  const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=593c4e658973493595534108231206&q=${query}`, { mode: 'cors' });
  const weatherData = await response.json();

  return weatherData;
}

export default getWeather;
