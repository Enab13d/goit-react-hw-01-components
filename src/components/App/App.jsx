import { Profile } from '../Profile/Profile.jsx';
import { Statistics } from 'components/Statistics/Statistics.jsx';
import user from '../../../src/user.json';
import data from '../../../src/data.json';
import friends from '../../../src/friends.json';
import { FriendList } from 'FriendList/FriendList.jsx';
import transactions from '../../../src/transactions.json'
import { TransactionHistory } from 'TransactionHistory/TransactionHistory.jsx';
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
