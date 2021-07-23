import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

interface Transaction {
  title: string
  amount: number,
  date: Date,
  id: number,
  category: string,
  type: 'withdraw' | 'deposit'
}

export function TransactionTable() {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  useEffect(() => {
    api.get<Transaction[]>('transactions')
      .then(response => setTransactions(response.data))
  }, [])

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
          {transactions.map(t => (
            <tr key={t.id}>
              <td>{t.title}</td>
              <td className={t.type}>{t.amount}</td>
              <td>{t.category}</td>
              <td>{t.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  )
}
