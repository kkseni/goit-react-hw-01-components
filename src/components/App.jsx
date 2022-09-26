import Profile from './Profile/Profile';
import user from '../data/user.json';
import Statistics from './Statistics/Statistics';
import data from '../data/data.json';
import Friends from './Friends/Friends';
import friends from '../data/friends.json';
import items from '../data/transactions.json';
import TransactionHistory from './Transactions/Transactions';
// import styled from 'styled-components';

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics
        title="Upload stats"
        statistics={data}
        percentage={data.percentage}
      />

      <Friends friends={friends} />
      <TransactionHistory items={items} />
    </div>
  );
};
