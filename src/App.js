import React from 'react';

import Profile from './components/Profile/Profile';
import user from './components/Profile/user.json';

import Statistics from 'components/Statistics/Statistics';
import data from './components/Statistics/data.json';

import FriendList from 'components/Friends/FriendList/FriendList';
import friends from './components/Friends/FriendList/friends.json';

import TransactionHistory from './components/Transactions/TransactionHistory/TransactionHistory';
import transactions from './components/Transactions/TransactionHistory/transactions.json';

function App() {
  return (
    <div className="main-container">
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />;
    </div>
  );
}

export default App;
