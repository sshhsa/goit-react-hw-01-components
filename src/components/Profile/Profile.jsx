import React from 'react';
import './Profile.module.css';
import user from './user.json';

function Profile() {
  return (
    <React.Fragment>
      <article className="profile">
        <ul className="description">
          <li>
            <img
              src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
              alt={user.username}
              className="avatar"
              width="200"
              height="200"
            />
          </li>
          <li>
            <p className="name">{user.username}</p>
          </li>
          <li>
            <p className="tag">{user.tag}</p>
          </li>
          <li>
            <p className="location">{user.location}</p>
          </li>
        </ul>
        <ul className="stats">
          <li className="stats-child">
            <span className="label">Followers</span>
            <span className="quantity">{user.stats.followers}</span>
          </li>
          <li className="stats-child">
            <span className="label">Views</span>
            <span className="quantity">{user.stats.views}</span>
          </li>
          <li className="stats-child">
            <span className="label">Likes</span>
            <span className="quantity">{user.stats.likes}</span>
          </li>
        </ul>
      </article>
    </ React.Fragment>
  );
};

export default Profile;