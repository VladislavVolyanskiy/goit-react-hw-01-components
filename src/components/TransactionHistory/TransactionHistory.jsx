import PropTypes from 'prop-types';
import { Transaction } from './Transaction/Transaction';
import {
  TableStyled,
  TableHeadStyled,
  TableBodyStyled,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ transactions }) => {
  return (
    <TableStyled>
      <thead>
        <tr>
          <TableHeadStyled>Type</TableHeadStyled>
          <TableHeadStyled>Amount</TableHeadStyled>
          <TableHeadStyled>Currency</TableHeadStyled>
        </tr>
      </thead>
      <TableBodyStyled>
        {transactions.map(({ amount, currency, id, type }) => {
          return (
            <Transaction
              key={id}
              type={type}
              amount={amount}
              currency={currency}
            />
          );
        })}
      </TableBodyStyled>
    </TableStyled>
  );
};

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};
