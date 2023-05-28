import React from 'react';
import PropTypes from 'prop-types';

import'App.js';
import css from './Statistics.module.css';

function Statistics({ title, stats }) {
    return (
      <section className={css.statistics}>
        {title.length > 0 && (
          <h2 className={css.title}>{title}</h2>
        )}

        <ul className={css.statList}>
          {stats.map(item => (
            <li key={item.id} className={css.item}>
                <span className={css.label}>{item.label}</span>
                <span className={css.percentage}>{item.percentage}</span>
            </li>
          ))}
        </ul>
      </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired
    })
  ).isRequired
};

export default Statistics;