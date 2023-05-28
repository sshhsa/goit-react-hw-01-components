import React from 'react';
// import PropTypes from 'prop-types';

import 'App.js';
// import TransactionItem from '../TransactionItem/TransactionItem';
import css from './TransactionHistory.module.css';

function TransactionHistory({transactions}) {
    return (
        <table className={css.transactionHistory}>
            <thead>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>
            <tbody>
                {/* {transactions.map((({ id, type, amount, currency }) => {
                return <TransactionItem key={id} type={type} amount={amount} currency={currency} />
                }))} */}
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </tbody>
        </table>
  );
};

// TransactionHistory.propTypes = {
//   transactions: PropTypes.arrayOf(
//     PropTypes.shape({
//         id: PropTypes.string.isRequired,
//         type: PropTypes.string.isRequired,
//         amount: PropTypes.number.isRequired,
//         currency: PropTypes.number.isRequired
//     })
//   ).isRequired
// };

export default TransactionHistory;