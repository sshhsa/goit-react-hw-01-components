import React from 'react';
import PropTypes from 'prop-types';

import 'App.js';
import css from './FriendList.module.css';

function FriendList({ friends }) {
    return (
        <ul className={css.friendList}>
            {friends.map(friend => (
                <li key={friend.id} className={css.itemFriend}>
                    {friend.status === true ?
                        (<span className={css.statusFriend.online}></span>) :
                        (<span className={css.statusFriend.offline}></span>
                    )}
                    <span className={css.statusFriend}></span>
                    <img className={css.avatarFriend} src={friend.avatar} alt={friend.name} width="100" height="100" />
                    <p className={css.nameFriend}>{friend.name}</p>
                </li>
            ))}
        </ul>
  );
};

FriendList.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
    id: PropTypes.number,
}

export default FriendList;