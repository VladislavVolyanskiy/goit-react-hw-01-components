import PropTypes from 'prop-types';
import { StatItemStyled } from './StatItem.styled';

export const StatItem = ({ label, percentage, color }) => {
  return (
    <StatItemStyled bgcolor={color}>
      <div className="label">{label}</div>
      <div className="percentage">{percentage}</div>
    </StatItemStyled>
  );
};

StatItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
};
