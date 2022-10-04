import PropTypes from 'prop-types';
import { FriendListItem } from './FriendListItem';
import { FriendInfo, Friends } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <Friends>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <FriendInfo key={id}>
          <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
        </FriendInfo>
      ))}
    </Friends>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.number.isRequired })
  ),
};
