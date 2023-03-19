import { Profile } from '../Profile/Profile';
import user from '../../data/user.json';

import { Statistics } from '../Statistics/Statistics';
import statsdata from '../../data/data.json';

import { FriendList } from '../FriendList/FriendList';
import friends from '../../data/friends.json';

import { TransactionHistory } from '../TransactionHistory/TransactionHistory';
import transactions from '../../data/transactions.json';

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
      <TransactionHistory transactions={transactions} />
    </Container>
  );
};
