import React from 'react';
import 'App.jsx';
import './Statics.module.css';

function Statistics([props]) {
    return (
    <React.Fragment>
      <section class="statistics">
        <h2 class="title">Upload stats</h2>

          <ul class="stat-list">
            <li class="item">
              <span class="label">{ props[0].label }</span>
               <span class="percentage">{ props[0].percentage }</span>
            </li>
            <li class="item">
              <span class="label">{props[1].label}</span>
              <span class="percentage">{props[1].percentage}</span>
            </li>
            <li class="item">
              <span class="label">{props[2].label}</span>
              <span class="percentage">{props[2].percentage}</span>
            </li>
            <li class="item">
              <span class="label">{props[3].label}</span>
              <span class="percentage">{props[3].percentage}</span>
            </li>
          </ul>
      </section>
    </ React.Fragment>
  );
};

export default Statistics;