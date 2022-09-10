
import Profile from './profile/Profile';
import user from './user.json';
import Statistics from './data/statistics';
import data from './data.json';
export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
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
        

        />

     </div>
   );
 };
