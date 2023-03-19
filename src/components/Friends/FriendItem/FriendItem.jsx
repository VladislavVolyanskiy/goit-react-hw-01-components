import { FriendItemStyled, FriendStatus } from './FriendItem.styled';

export const FriendItem = ({ avatar, name, isOnline, id }) => {
  return (
    <FriendItemStyled className="item">
      <FriendStatus className="status" status={isOnline}></FriendStatus>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </FriendItemStyled>
  );
};
