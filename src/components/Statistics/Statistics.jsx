import PropTypes from 'prop-types';
import {
  Percentage,
  StatsCard,
  StatsItem,
  StatsList,
  StatsTitle,
  Statslabel,
} from './Statistics.styled';
import getRandomHexColor from 'utilities/getRandomHex';

export const Statistics = ({ title, stats }) => {
  return (
    <StatsCard>
      {title && <StatsTitle>{title}</StatsTitle>}
      <StatsList>
        {stats.map(({ id, label, percentage }) => (
          <StatsItem key={id} style={{ backgroundColor: getRandomHexColor() }}>
            <Statslabel>{label}</Statslabel>
            <Percentage>{percentage}%</Percentage>
          </StatsItem>
        ))}
      </StatsList>
    </StatsCard>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
