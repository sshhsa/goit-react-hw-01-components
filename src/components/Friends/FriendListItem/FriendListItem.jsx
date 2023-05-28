import React from 'react';

import 'App.js';
import css from './FriendListItem.module.css';

function FriendListItem({name, avatar, isOnline}) {
    return (
        <li className={css.itemFriend}>
                {isOnline === true ?
                    (<span className={css.statusFriendOnline}></span>) :
                    (<span className={css.statusFriendOffline}></span>
                )}
                <img className={css.avatarFriend} src={avatar} alt={name} width="100" height="100" />
                <p className={css.nameFriend}>{name}</p>
        </li>
    )
}

export default FriendListItem;