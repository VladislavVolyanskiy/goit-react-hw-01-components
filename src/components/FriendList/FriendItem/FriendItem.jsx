import PropTypes from 'prop-types';
import { FriendItemStyled, FriendStatus } from './FriendItem.styled';

export const FriendItem = ({ avatar, name, isOnline }) => {
  return (
    <FriendItemStyled className="item">
      <FriendStatus className="status" status={isOnline}></FriendStatus>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </FriendItemStyled>
  );
};

FriendItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
