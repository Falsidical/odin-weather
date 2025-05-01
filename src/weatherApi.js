const API_KEY = 'MUB4RWWBJKHWYV897HPLQBXAS';

export async function getWeatherData(location, units) {
  try {
    const URL = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=${units}&key=${API_KEY}&contentType=json`;
    const res = await fetch(URL);
    if (res.status === 400) return { error: 'Location not found' };
    return await res.json();
  } catch (error) {
    return { error };
  }
}
