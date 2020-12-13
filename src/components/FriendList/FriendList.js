import FriendListItem from '../FriendListItem/FriendListItem';
import PropTypes from 'prop-types';
import style from './FriendList.module.css';

export default function FriendList({ friends }) {
  return (
    <ul className={style.list}>
      {friends.map(friend => (
        <FriendListItem
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
};
