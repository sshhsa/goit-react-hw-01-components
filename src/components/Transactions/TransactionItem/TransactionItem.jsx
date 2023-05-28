import React from 'react';

import 'App.js';
import css from '../TransactionHistory/TransactionHistory.module.css';

function TransactionItem({ type, amount, currency }) {
    return (
        <tr className={css.tableParentBody}>
            <td className={css.type}>{type}</td>
            <td className={css.amount}>{amount}</td>
            <td className={css.currency}>{currency}</td>
        </tr>
    );
}

export default TransactionItem;