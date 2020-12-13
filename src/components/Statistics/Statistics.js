import PropTypes from 'prop-types';
import style from './Statistics.module.css';

function randomColor() {
  let color =
    'rgb(' +
    Math.round(Math.random() * 255) +
    ',' +
    Math.round(Math.random() * 255) +
    ',' +
    Math.round(Math.random() * 255) +
    ')';

  return color;
}

export default function Statistics({ title, stats }) {
  return (
    <div className={style.statistics}>
      {title && <h2 className={style.title}>{title}</h2>}

      <ul className={style.list}>
        {stats.map(stat => (
          <li
            key={stat.id}
            className={style.item}
            style={{ backgroundColor: randomColor() }}
          >
            <span className={style.label}>{stat.label}</span>
            <span className={style.percentage}>{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};
