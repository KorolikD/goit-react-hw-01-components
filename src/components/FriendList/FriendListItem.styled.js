import styled from '@emotion/styled';

export const Status = styled.span`
  display: block;
  margin-right: 8px;
  width: 12px;
  height: 12px;

  background: ${p => {
    switch (p.status) {
      case true:
        return '#55AB57';
      case false:
        return '#FF5150';
      default:
        return '#000';
    }
  }};
  border-radius: 50%;
  box-shadow: 0px 1px 3px rgb(0 0 0 / 12%), 0px 1px 1px rgb(0 0 0 / 14%),
    0px 2px 1px rgb(0 0 0 / 20%);
`;
export const Avatar = styled.img`
  margin-right: 8px;
`;
export const Name = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.19;
  color: #212121;
`;
