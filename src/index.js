import { initialLoad, setValues } from './functions/dom';
import processData from './functions/process';
import getWeather from './functions/weather';
// inital loading of DOM

initialLoad();

const formButton = document.querySelector('form > button');
const searchInput = document.querySelector('#searchInput');

formButton.addEventListener('click', async (e) => {
  e.preventDefault();
  const data = await getWeather(searchInput.value);
  const weatherObject = processData(data);
  searchInput.value = '';
  setValues(weatherObject);
});
