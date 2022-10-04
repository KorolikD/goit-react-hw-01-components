import styled from '@emotion/styled';

export const TransactionTable = styled.table`
  border-collapse: collapse;
  width: 730px;
  margin-left: auto;
  margin-right: auto;

  box-shadow: 0px 1px 3px rgb(0 0 0 / 12%), 0px 1px 1px rgb(0 0 0 / 14%),
    0px 2px 1px rgb(0 0 0 / 20%);
  border-radius: 4px;

  font-family: 'Roboto', sans-serif;
`;

export const TransactionHeader = styled.thead`
  background-color: #00bcd5;
  border-bottom: 1px dashed #aeb6c0;
`;

export const TransactionHeaderRow = styled.tr`
  text-transform: uppercase;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.19;
  color: #fff;
`;

export const TransactionHeaderRowData = styled.th`
  padding: 10px;

  border-right: 1px dashed #aeb6c0;
  border-left: 1px dashed #aeb6c0;
`;

export const TransactionTbody = styled.tbody`
  font-weight: 400;
  font-size: 14px;
  line-height: 1.19;
  color: #636a70;
`;

export const TransactionRow = styled.tr`
  background-color: #fff;
  :nth-of-type(2n) {
    background-color: #ecf1f3;
  }
`;

export const TransactionRowData = styled.td`
  text-align: center;
  padding: 5px;

  :nth-of-type(2) {
    border-right: 1px dashed #aeb6c0;
    border-left: 1px dashed #aeb6c0;
  }
`;
