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

type TransactionInput = Omit<Transaction, 'id' | 'date'>;

interface TransactionContextData {
  transactions: Transaction[];
  createTransaction: (t: TransactionInput) => Promise<void>;
}

export const TransactionContext = createContext<TransactionContextData>(
  {} as TransactionContextData
);

export const TransactionProvider = ({ children }: TransactionProviderProps) => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    api
      .get<{ transactions: Transaction[] }>('/transactions')
      .then((response) => setTransactions(response.data.transactions));
  }, []);

  async function createTransaction(transaction: TransactionInput) {
    const { data } = await api.post('/transactions', transaction);
    setTransactions([...transactions, data.transaction]);
  }

  return (
    <TransactionContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionContext.Provider>
  );
};
