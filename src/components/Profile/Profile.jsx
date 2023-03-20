import PropTypes from 'prop-types';

import {
  ProfileCard,
  ProfileDescription,
  ProfileStats,
  ProfileStatsItem,
} from './Profile.styled';

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  followers,
  views,
  likes,
}) => {
  return (
    <>
      <ProfileCard className="profile">
        <ProfileDescription>
          <img src={avatar} alt="User avatar" />
          <p className="name">{username}</p>
          <p className="tag">{tag}</p>
          <p className="location">{location}</p>
        </ProfileDescription>
        <ProfileStats>
          <ProfileStatsItem>
            <span className="label">Followers</span>
            <span className="quantity">{followers}</span>
          </ProfileStatsItem>
          <ProfileStatsItem>
            <span className="label">Views</span>
            <span className="quantity">{views}</span>
          </ProfileStatsItem>
          <ProfileStatsItem>
            <span className="label">Likes</span>
            <span className="quantity">{likes}</span>
          </ProfileStatsItem>
        </ProfileStats>
      </ProfileCard>
    </>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};
