import PropTypes from 'prop-types';

export const FriendListItem = ({ avatar, name, isOnline }) => (
  <>
    <span className={`status ${isOnline}`}></span>
    <img className="avatar" src={avatar} alt={`${name} avatar`} width="48" />
    <p className="name">{name}</p>
  </>
);

FriendListItem.propsType = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};