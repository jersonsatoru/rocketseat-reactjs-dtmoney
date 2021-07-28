import { createContext, ReactNode, useEffect, useState } from 'react';
import { api } from '../services/api';

interface TransactionProviderProps {
  children: ReactNode;
}

interface Transaction {
  title: string;
  amount: number;
  date: Date;
  id: number;
  category: string;
  type: 'withdraw' | 'deposit';
}

export const TransactionContext = createContext<Transaction[]>([]);

export const TransactionProvider = ({ children }: TransactionProviderProps) => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    api
      .get<{ transactions: Transaction[] }>('/transactions')
      .then((response) => setTransactions(response.data.transactions));
  }, []);

  return (
    <TransactionContext.Provider value={transactions}>
      {children}
    </TransactionContext.Provider>
  );
};
