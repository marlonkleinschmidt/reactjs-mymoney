import React from 'react';
import ReactDOM from 'react-dom/client';
import { createServer, Model } from 'miragejs';
import { App } from './App';

createServer({


  models: {
    transaction: Model,
  },

  seeds(server){
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'App pizzaria',
          type: 'deposit',
          category: 'Dev',
          amount: 15000,
          createdAt: new Date('2022-05-17 15:00:00'),
        },
        {
          id: 2,
          title: 'Café',
          type: 'withdraw',
          category: 'Alimentação',
          amount: 20,
          createdAt: new Date('2022-05-17 15:10:00'),
        }

      ],
    })
  },

  routes() {
    this.namespace = 'api';
   
    this.get('/transactions',()=> {
      return this.schema.all('transaction')
        
    })

    this.post('/transactions',(schema, request) => {
            
      const data = JSON.parse(request.requestBody);
      
      return schema.create('transaction', data);

    })


  }
});


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);