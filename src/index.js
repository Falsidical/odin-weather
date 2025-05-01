import { getWeatherData } from './weatherApi.js';
import './styles.css';

const form = document.querySelector('form');
const temp = document.querySelector('h1');
const city = document.querySelector('h2');
const country = document.querySelector('h3');
const overlay = document.querySelector('.overlay');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = new FormData(form);
  displayWeather(data.get('location'), data.get('units'));
});

async function displayWeather(location, units) {
  overlay.style.display = 'grid';
  const { resolvedAddress, description, currentConditions } = await getWeatherData(location, units);
  temp.innerText = `${currentConditions.temp}°${units === 'metric' ? 'C' : 'F'}`;
  const address = resolvedAddress.split(',');
  city.innerText = address[0];
  country.innerText = address[address.length - 1];
  overlay.style.display = 'none';
}
