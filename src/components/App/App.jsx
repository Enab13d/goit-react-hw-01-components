import { Profile } from '../Profile/Profile.jsx';
import { Statistics } from 'components/Statistics/Statistics.jsx';
import user from '../../../src/data/user.json';
import data from '../../../src/data/data.json';
import friends from '../../../src/data/friends.json';
import { FriendList } from 'components/FriendList/FriendList.jsx';
import transactions from '../../../src/data/transactions.json'
import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory.jsx';
export const App = () => {
  return (
    <>
      <Profile {...user} />
      <Statistics title="Upload Stats" stats={data} />
      <FriendList friends={friends} />
    <TransactionHistory props={transactions}/>
    </>
  );
};
