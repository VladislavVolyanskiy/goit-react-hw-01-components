import PropTypes from 'prop-types';
import { TransactionStyled } from './Transaction.styled';

export const Transaction = ({ amount, currency, type }) => {
  return (
    <TransactionStyled>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </TransactionStyled>
  );
};

Transaction.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
