import React from 'react';
import PropTypes from 'prop-types';

import 'App.jsx';
import css from './Profile.module.css';
import defaultImage from './IMG_7451.jpg';

function Profile(props) {
  const { username, tag, location, avatar = defaultImage, followers, views, likes } = props;

  return (
    <React.Fragment>
      <article className={css.profile}>
        <ul className={css.description}>
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
            <p className={css.name}>{username}</p>
          </li>
          <li>
            <p className={css.tag}>{tag}</p>
          </li>
          <li>
            <p className={css.location}>{location}</p>
          </li>
        </ul>
        <ul className={css.stats}>
          <li className={css.statsChild}>
            <span className={css.label}>Followers</span>
            <span className={css.quantity}>{followers}</span>
          </li>
          <li className={css.statsChild}>
            <span className={css.label}>Views</span>
            <span className={css.quantity}>{views}</span>
          </li>
          <li className={css.statsChild}>
            <span className={css.label}>Likes</span>
            <span className={css.quantity}>{likes}</span>
          </li>
        </ul>
      </article>
    </ React.Fragment>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired
}

export default Profile;