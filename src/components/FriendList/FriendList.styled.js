import styled from '@emotion/styled';

export const Friends = styled.ul`
  margin: 0 auto 32px auto;
  padding: 0;
  width: 200px;
  list-style: none;
  font-family: 'Roboto', sans-serif;
`;

export const FriendInfo = styled.li`
  display: flex;

  align-items: center;

  padding: 8px 12px;
  background-color: #fff;
  box-shadow: 0px 1px 3px rgb(0 0 0 / 12%), 0px 1px 1px rgb(0 0 0 / 14%),
    0px 2px 1px rgb(0 0 0 / 20%);
  border-radius: 4px;

  :not(:last-child) {
    margin-bottom: 8px;
  }
`;
