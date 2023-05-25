import React from 'react';
import Profile from './components/Profile/Profile';
import user from './components/Profile/user.json';

export const App = () => {
  return (
    <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        fontSize: 40,
        color: '#010101'
    }}>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      {/*
       <Statistics />
      <FriendList />
      <TransactionHistory /> */}
    </div>
  );
};
