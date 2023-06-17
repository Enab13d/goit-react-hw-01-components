import {
    TableBody,
  TableHead,
  TableRow,
  TransactionTable,
} from './TransactionHistory.styled';
import PropTypes from 'prop-types';
export const TransactionHistory = ({props}) => {
  return (
    <TransactionTable>
      <TableHead>
        <TableRow>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </TableRow>
      </TableHead>
      <TableBody>
      {props.map(({id, type, amount, currency}) => (
            <TableRow key={id}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
            </TableRow>
        ))}
      </TableBody>
    </TransactionTable>
  );
};
TransactionHistory.propTypes = {
   props: PropTypes.arrayOf(
      PropTypes.exact({
        id: PropTypes.string.isRequired,
       type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
      })
    ),
  };