const API_KEY = 'MUB4RWWBJKHWYV897HPLQBXAS';

export async function getWeatherData(location, units) {
  const URL = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=${units}&key=${API_KEY}&contentType=json`;
  const res = await fetch(URL);
  return await res.json();
}
