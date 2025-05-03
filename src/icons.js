import clearDay from './icons/clear-day.png';
import clearNight from './icons/clear-night.png';
import cloudyDay from './icons/cloudy-day.png';
import cloudyNight from './icons/cloudy-night.png';
import cloudy from './icons/cloudy.png';
import rain from './icons/rain.png';

export function getIconUrl(icon) {
  switch (icon) {
    case 'clear-day':
      return clearDay;

    case 'clear-night':
      return clearNight;

    case 'partly-cloudy-day':
      return cloudyDay;

    case 'partly-cloudy-night':
      return cloudyNight;

    case 'cloudy':
      return cloudy;

    case 'rain':
      return rain;

    default:
      break;
  }
}
