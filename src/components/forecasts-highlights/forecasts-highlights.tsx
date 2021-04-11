import UnitSelect from '../unitSelect/unitSelect';
import ForeCasts from '../forecasts/forecasts';
import Highlights from '../highlights/highlights';

const dummyForecasts = [
  {
    day: 'Tomorrow',
    image: 'Showers.png',
    temperatureMax: '30°C',
    temperatureMin: '11°C',
  },
  {
    day: 'Sun, 7 Jun',
    image: 'Showers.png',
    temperatureMax: '30°C',
    temperatureMin: '11°C',
  },
  {
    day: 'Mon, 8 Jun',
    image: 'Showers.png',
    temperatureMax: '30°C',
    temperatureMin: '11°C',
  },
  {
    day: 'Tue, 9 Jun',
    image: 'Showers.png',
    temperatureMax: '30°C',
    temperatureMin: '11°C',
  },
  {
    day: 'Wed, 10 Jun',
    image: 'Showers.png',
    temperatureMax: '30°C',
    temperatureMin: '11°C',
  },
];

const forecatsHighlights: React.FC = ():JSX.Element => {
  return (
    <>
      <UnitSelect unit='F' />
      <ForeCasts forecasts={dummyForecasts} />
      <Highlights />
    </>
  );
};

export default forecatsHighlights;
