import React from 'react';
import Profile from './components/Profile/Profile';

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
      <Profile />
      {/*
       <Statistics />
      <FriendList />
      <TransactionHistory /> */}
    </div>
  );
};
