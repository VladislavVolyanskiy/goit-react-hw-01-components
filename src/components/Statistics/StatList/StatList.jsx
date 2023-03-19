import PropTypes from 'prop-types';

import { getRandomHexColor } from '../../../utils/getRandomHexColor';
import { StatSection, StatList } from './StatList.styled';
import { StatItem } from '../StatItem/StatItem';

export const Statistics = ({ title, statistics }) => {
  return (
    <>
      <StatSection>
        {title && <h2>{title}</h2>}

        <StatList>
          {statistics.map(({ id, label, percentage }) => {
            return (
              <StatItem
                key={id}
                label={label}
                percentage={percentage}
                color={getRandomHexColor()}
              />
            );
          })}
        </StatList>
      </StatSection>
    </>
  );
};

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
  title: PropTypes.string,
};
