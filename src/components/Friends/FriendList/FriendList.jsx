import PropTypes from 'prop-types';

import { FriendListStyled } from './FriendList.styled';
import { FriendItem } from '../FriendItem/FriendItem';

export const FriendList = ({ friends }) => {
  return (
    <FriendListStyled>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <FriendItem key={id} avatar={avatar} name={name} isOnline={isOnline}>
          {name}
        </FriendItem>
      ))}
    </FriendListStyled>
  );
};

FriendList.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
};
