import Statistics from "./Statics";

function StaticsList({ items }) {
    return (<ul className={css.statList}>
              {items.map(item => (
                <li className={css.item} key={item.id}>
                  <Statistics
                  id={item.id}
                  label={item.label}
                  percentage={item.percentage}
                  />
                </li>))}
            </ul>)
}

export default StaticsList;