import React from 'react';
import { createServer } from 'miragejs';
import ReactDOM from 'react-dom';
import App from './App';

createServer({
  routes() {
    this.namespace = 'api';
    this.get('/transactions', () => [
      {
        id: 1,
        title: 'Transaction 1',
        amount: 4000,
        date: new Date(),
        type: 'deposit',
        category: 'Desenvolvimento',
      },
      {
        id: 2,
        title: 'Transaction 1',
        amount: 4000,
        date: new Date(),
        type: 'withdraw',
        category: 'Desenvolvimento',
      },
      {
        id: 3,
        title: 'Transaction 1',
        amount: 4000,
        date: new Date(),
        type: 'deposit',
        category: 'Desenvolvimento',
      },
    ]);
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
