import React from 'react';

import Profile from './components/Profile/Profile';
import user from './components/Profile/user.json';

import Statistics from 'components/Statics/Statics';
import data from './components/Statics/data.json';

export function App () {
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

      <Statistics
        id={data.id}
        label={data.label}
      />
      {/*
      <FriendList />
      <TransactionHistory /> */}
    </div>
  );
};