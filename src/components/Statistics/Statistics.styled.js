import styled from '@emotion/styled';

export const StatisticsSection = styled.section`
  width: 348px;
  margin-bottom: 32px;
  margin-left: auto;
  margin-right: auto;

  box-shadow: 0px 1px 3px rgb(0 0 0 / 12%), 0px 1px 1px rgb(0 0 0 / 14%),
    0px 2px 1px rgb(0 0 0 / 20%);
  border-radius: 4px;

  font-family: 'Roboto', sans-serif;
`;

export const Title = styled.h2`
  margin: 0;
  padding: 32px;
  text-align: center;
  text-transform: uppercase;
  background-color: #fff;

  font-weight: 700;
  font-size: 20px;
  line-height: 1.19;
  color: #636a70;
`;

export const StatList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const StatListItem = styled.li`
  display: flex;

  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  width: calc(100% / 5);
  padding: 16px 0;
  background-color: ${props => props.color};
`;

export const Label = styled.span`
  font-weight: 500;
  color: #fff;
  font-size: 14px;
  line-height: 1.19;
  margin-bottom: 4px;
`;

export const Percentage = styled.span`
  font-weight: 500;
  font-size: 20px;
  line-height: 1.19;
  color: #fff;
`;
