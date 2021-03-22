import HighlightCard from '../../../hoc/highlightCard/highlightCard';
import Compass from '../../../utilities/compass/compass';
import './windCard.css';

interface windCardParams {
  windSpeed: number;
  windDirection: number;
  windDirectionCompass: string;
  speedUnit: string;
}

const windCard: React.FC<windCardParams> = ({
  windSpeed,
  windDirection,
  windDirectionCompass,
  speedUnit,
}) => {
  return (
    <HighlightCard cardname='Wind status'>
      <div className='windSpeed'>
        <span className="windSpeedNumber">{windSpeed}</span>
        <span className="windSpeedUnit">{speedUnit}</span>
      </div>
      <div className='windDirection'>
        <Compass angle={windDirection} />
        <span className='wd-text'>{windDirectionCompass}</span>
      </div>
    </HighlightCard>
  );
};

export default windCard;
