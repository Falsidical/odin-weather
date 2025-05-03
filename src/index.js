import { getWeatherData } from './weatherApi.js';
import './styles.css';
import { getIconUrl } from './icons.js';

const form = document.querySelector('form');
const desc = document.querySelector('.description');
const temp = document.querySelector('h1');
const city = document.querySelector('h2');
const country = document.querySelector('h3');
const overlay = document.querySelector('.overlay');
const icon = document.querySelector('img');
const feels = document.querySelector('.feels');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = new FormData(form);
  displayWeather(data.get('location'), data.get('units'));
});

async function displayWeather(location, units) {
  overlay.style.display = 'grid';

  const weather = await getWeatherData(location, units);
  if (weather.error) {
    desc.innerText = weather.error;
    temp.innerText = 'Error';
    city.innerText = '';
    country.innerText = 'Try another location';
  } else {
    const { resolvedAddress, description, currentConditions } = weather;
    temp.innerText = `${currentConditions.temp}°${units === 'metric' ? 'C' : 'F'}`;
    const address = resolvedAddress.split(',');
    city.innerText = address[0];
    desc.innerText = description;
    country.innerText = address[address.length - 1];
    feels.innerText = `Feels like ${currentConditions.feelslike}°`;

    const time = currentConditions.datetime;
    const hour = time.split(':')[0];
    console.log(hour);

    if (hour >= 20 || hour < 6) {
      console.log('night');
      document.body.classList.add('night');
    } else {
      document.body.classList.remove('night');
      console.log('day');
    }

    icon.src = getIconUrl(currentConditions.icon);
    icon.alt = currentConditions.icon;
  }

  overlay.style.display = 'none';
}
