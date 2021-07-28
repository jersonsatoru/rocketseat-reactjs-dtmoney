import { Container } from './styles';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';
import { useTransaction } from '../../hooks/useTransaction';

export function Summary() {
  const { transactions } = useTransaction();

  const summary = transactions.reduce(
    (inc, t) => {
      return {
        withdraws:
          t.type === 'withdraw' ? inc.withdraws + t.amount : inc.withdraws,
        deposits: t.type === 'deposit' ? inc.deposits + t.amount : inc.deposits,
        total:
          t.type === 'deposit' ? inc.total + t.amount : inc.total - t.amount,
      };
    },
    {
      withdraws: 0,
      deposits: 0,
      total: 0,
    }
  );

  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="income icon" />
        </header>
        <strong>
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(summary.deposits)}
        </strong>
      </div>
      <div>
        <header>
          <p>Saidas</p>
          <img src={outcomeImg} alt="outcome icon" />
        </header>
        <strong>
          -
          {new Intl.NumberFormat('pt-BR', {
            currency: 'BRL',
            style: 'currency',
          }).format(summary.withdraws)}
        </strong>
      </div>
      <div>
        <header>
          <p>Total</p>
          <img src={totalImg} alt="total icon" />
        </header>
        <strong>
          {new Intl.NumberFormat('pt-BR', {
            currency: 'BRL',
            style: 'currency',
          }).format(summary.total)}
        </strong>
      </div>
    </Container>
  );
}
