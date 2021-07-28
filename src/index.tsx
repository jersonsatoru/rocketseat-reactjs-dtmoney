import React from 'react';
import { createServer, Model } from 'miragejs';
import ReactDOM from 'react-dom';
import App from './App';

createServer({
  models: {
    transaction: Model,
  },
  seeds(server) {
    server.db.loadData({
      transactions: [
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
      ],
    });
  },
  routes() {
    this.namespace = 'api';
    this.get('/transactions', () => this.schema.all('transaction'));
    this.post('/transactions', (schema, request) => {
      const transaction = {
        ...JSON.parse(request.requestBody),
        data: new Date(),
      };

      return schema.create('transaction', transaction);
    });
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
