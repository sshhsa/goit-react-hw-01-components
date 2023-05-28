import React from 'react';
import PropTypes from 'prop-types';

import 'App.js';
import FriendListItem from '../FriendListItem/FriendListItem';
import css from './FriendList.module.css';

function FriendList({ friends }) {
    return (
        <ul className={css.friendList}>
            {friends.map((({ id, name, avatar, isOnline }) => {
                return <FriendListItem key={id} name={name} avatar={avatar} isOnline={isOnline} />
            }))}
        </ul>
  );
};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
            id: PropTypes.number.isRequired
        })
    )
}

export default FriendList;