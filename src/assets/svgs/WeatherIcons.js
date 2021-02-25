import { ReactComponent as Cloud } from './weather/cloud.svg';
import { ReactComponent as Fog } from './weather/fog.svg';
import { ReactComponent as Rain } from './weather/Rain.svg';
import { ReactComponent as Snow } from './weather/Snow.svg';
import { ReactComponent as Storm } from './weather/Storm.svg';
import { ReactComponent as Sun } from './weather/sun.svg';
import { ReactComponent as SunCloud } from './weather/SunCloud.svg';
import { Weather } from '../../constants';

const ICON_WIDTH = 150;

const getWeatherIcons = (width = ICON_WIDTH) => ({
  [Weather.Cloudy]: <Cloud width={width} />,
  [Weather.Fog]: <Fog width={width} />,
  [Weather.Thunderstorms]: <Storm width={width} />,
  [Weather.PartlyCloudy]: <SunCloud width={width} />,
  [Weather.Sunny]: <Sun width={width} fill={'#ffbb00'} />,
  [Weather.Tornado]: <Storm width={width} />,
  [Weather.HazySunshine]: <Sun width={width} />,
  [Weather.Showers]: <Rain width={width} />,
});

const WeatherNames = {
  [Weather.Cloudy]: 'Cloudy',
  [Weather.Fog]: 'Fog',
  [Weather.Thunderstorms]: 'Thunderstorms',
  [Weather.PartlyCloudy]: 'Partly cloudy',
  [Weather.Sunny]: 'Sunny',
  [Weather.Tornado]: 'Tornado',
  [Weather.HazySunshine]: 'Hazy sunshine',
  [Weather.Showers]: 'Showers',
};

const WeatherIcons = getWeatherIcons(ICON_WIDTH);

export { getWeatherIcons, WeatherNames };

export default WeatherIcons;
