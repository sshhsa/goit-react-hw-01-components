import React from 'react';
import Profile from './components/Profile/Profile';
import user from './components/Profile/user.json';

export const App = () => {
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
      {/*
       <Statistics />
      <FriendList />
      <TransactionHistory /> */}
    </div>
  );
};
