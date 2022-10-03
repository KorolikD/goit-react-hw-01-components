import { user, data, friends, transactions } from 'data';
import { Profile } from 'components/Profile/Profile';
import { Statistics } from 'components/Statistics/Statistics';
import { FriendList } from 'components/FriendList/FriendList';
import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory';

export const App = () => (
  <>
    <Profile
      avatar={user.avatar}
      username={user.username}
      tag={user.tag}
      location={user.location}
      stats={user.stats}
      followers={user.stats.followers}
      views={user.stats.views}
      likes={user.stats.likes}
    />
    <Statistics title="Upload stats" stats={data} />
    <FriendList friends={friends} />;
    <TransactionHistory items={transactions} />;
  </>
);
