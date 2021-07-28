import { useContext } from 'react';
import { TransactionContext } from '../../hooks/TransactionContext';
import { Container } from './styles';

export function TransactionTable() {
  const { transactions } = useContext(TransactionContext);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((t) => (
            <tr key={t.id}>
              <td>{t.title}</td>
              <td className={t.type}>
                {new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                }).format(t.amount)}
              </td>
              <td>{t.category}</td>
              <td>
                {new Intl.DateTimeFormat('pt-BR').format(new Date(t.date))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}
