import PropTypes from 'prop-types';
import {
  TransactionTable,
  TransactionHeader,
  TransactionHeaderRow,
  TransactionHeaderRowData,
  TransactionTbody,
  TransactionRow,
  TransactionRowData,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => (
  <TransactionTable>
    <TransactionHeader>
      <TransactionHeaderRow>
        <TransactionHeaderRowData>Type</TransactionHeaderRowData>
        <TransactionHeaderRowData>Amount</TransactionHeaderRowData>
        <TransactionHeaderRowData>Currency</TransactionHeaderRowData>
      </TransactionHeaderRow>
    </TransactionHeader>

    <TransactionTbody>
      {items.map(({ id, type, amount, currency }) => (
        <TransactionRow key={id}>
          <TransactionRowData>{type}</TransactionRowData>
          <TransactionRowData>{amount}</TransactionRowData>
          <TransactionRowData>{currency}</TransactionRowData>
        </TransactionRow>
      ))}
    </TransactionTbody>
  </TransactionTable>
);

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
