import PropTypes from 'prop-types';
import { Avatar, Name, Status } from './FriendListItem.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => (
  <>
    <Status status={isOnline}></Status>
    <Avatar src={avatar} alt={`${name} avatar`} width="48" />
    <Name>{name}</Name>
  </>
);

FriendListItem.propsType = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
