import { Profile } from '../Profile/Profile';
import user from '../../data/user.json';

import { Statistics } from '../Statistics/StatList/StatList';
import statsdata from '../../data/data.json';

import { FriendList } from '../Friends/FriendList/FriendList';
import friends from '../../data/friends.json';

import { Container } from './App.styled';

const {
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
} = user;

export const App = () => {
  return (
    <Container>
      <Profile
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
        followers={followers}
        views={views}
        likes={likes}
      />
      <Statistics title="Upload stats" statistics={statsdata} />
      <FriendList friends={friends} />
    </Container>
  );
};
