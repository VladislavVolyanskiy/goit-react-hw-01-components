import { TransactionStyled } from './Transaction.styled';

export const Transaction = ({ amount, currency, id, type }) => {
  return (
    <TransactionStyled key={id}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </TransactionStyled>
  );
};
