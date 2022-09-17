
import Profile from './profile/Profile';
import user from './user.json';
import Statistics from './data/statistics';
import data from './data.json';
import Friends from './friends/Friends';
import friends from './friends/friends.json';
import items from './transactions/transactions.json'
import TransactionHistory from './transactions/Transactions';
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
      
      <Friends
        friends={friends}
      />
      <TransactionHistory
        items={items} />
     </div>
   );
 };
