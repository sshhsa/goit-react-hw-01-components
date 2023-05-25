import React from 'react';
import 'App.jsx';
import './Profile.module.css';
import defaultImage from './IMG_7451.jpg';

function Profile(props) {
  const { username = 'Alex Marynkevych', tag = 'sshhsa', location = 'Mykolayv, Ukraine', avatar = defaultImage, followers = 10000, views = 120000, likes = 275000 } = props;

  return (
    <React.Fragment>
      <article className="profile">
        <ul className="description">
          <li>
            <img
              src={avatar}
              alt={username}
              className="avatar"
              width="200"
              height="200"
            />
          </li>
          <li>
            <p className="name">{username}</p>
          </li>
          <li>
            <p className="tag">{tag}</p>
          </li>
          <li>
            <p className="location">{location}</p>
          </li>
        </ul>
        <ul className="stats">
          <li className="stats-child">
            <span className="label">Followers</span>
            <span className="quantity">{followers}</span>
          </li>
          <li className="stats-child">
            <span className="label">Views</span>
            <span className="quantity">{views}</span>
          </li>
          <li className="stats-child">
            <span className="label">Likes</span>
            <span className="quantity">{likes}</span>
          </li>
        </ul>
      </article>
    </ React.Fragment>
  );
};

export default Profile;