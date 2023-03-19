import { StatItemStyled } from './StatItem.styled';

export const StatItem = ({ id, label, percentage, color }) => {
  return (
    <StatItemStyled key={id} bgcolor={color}>
      <div className="label">{label}</div>
      <div className="percentage">{percentage}</div>
    </StatItemStyled>
  );
};
