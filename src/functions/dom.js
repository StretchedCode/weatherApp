// module for controlling DOM manipulation of elements

import '../stylesheets/styles.css';
import cloudIcon from '../assets/clouds.png';
import magnifyIcon from '../assets/magnify.png';

let cityText;
let weatherCondition;
let conditionImg;
let feelsLikeTemp;
let temperature;

function initialLoad() {
  const body = document.querySelector('body');

  const mainContainer = document.createElement('div');
  mainContainer.className = 'main';

  const headerContainer = document.createElement('div');
  headerContainer.className = 'header';

  const headerText = document.createElement('h1');
  headerText.className = 'headerText';
  headerText.textContent = 'Weather Data';

  const cloudImage = new Image();
  cloudImage.src = cloudIcon;

  const contentContainer = document.createElement('div');
  contentContainer.className = 'mainContent';

  const mainForm = document.createElement('form');
  mainForm.className = 'mainForm';

  const searchInput = document.createElement('input');
  searchInput.id = 'searchInput';
  searchInput.setAttribute('placeholder', 'Choose a location...');

  const formButton = document.createElement('button');

  const magnifyImage = new Image();
  magnifyImage.src = magnifyIcon;
  magnifyImage.id = 'btnImg';

  formButton.appendChild(magnifyImage);

  const cityHeader = document.createElement('div');
  cityHeader.className = 'city';
  cityText = document.createElement('h1');
  cityText.id = 'cityHeader';
  cityText.textContent = 'Toronto';

  conditionImg = new Image();
  conditionImg.id = 'condImg';

  const weatherStatsContainer = document.createElement('div');
  weatherStatsContainer.className = 'weatherStats';

  weatherCondition = document.createElement('h2');
  weatherCondition.id = 'condition';
  weatherCondition.textContent = 'Weather Condition';

  feelsLikeTemp = document.createElement('h3');
  feelsLikeTemp.id = 'feelsLike';
  feelsLikeTemp.textContent = 'Feels Like: ';

  temperature = document.createElement('h3');
  temperature.id = 'temperature';
  temperature.textContent = 'Temperature: ';

  headerContainer.appendChild(headerText);
  headerContainer.appendChild(cloudImage);

  mainForm.appendChild(searchInput);
  mainForm.appendChild(formButton);

  cityHeader.appendChild(cityText);
  cityHeader.appendChild(conditionImg);

  weatherStatsContainer.appendChild(weatherCondition);
  weatherStatsContainer.appendChild(feelsLikeTemp);
  weatherStatsContainer.appendChild(temperature);

  contentContainer.appendChild(mainForm);
  contentContainer.appendChild(cityHeader);
  contentContainer.appendChild(weatherStatsContainer);

  mainContainer.appendChild(headerContainer);
  mainContainer.appendChild(contentContainer);

  body.appendChild(mainContainer);
}

function setValues(data) {
  cityText.textContent = `${data.name}, ${data.country}`;
  conditionImg.src = data.condition.icon;
  weatherCondition.textContent = data.condition.text;
  feelsLikeTemp.textContent = `Feels like: ${data.feelslike_c}º C`;
  temperature.textContent = `Temperature: ${data.temp_c}º C`;
}

export {
  initialLoad,
  setValues,
};
