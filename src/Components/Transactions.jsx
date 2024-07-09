import React, { useState, useEffect } from 'react';
import Transaction from './Transaction';

const API = import.meta.env.VITE_API_URL;

function Transactions() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetch(`${API}/transactions`)
      .then((response) => response.json())
      .then((responseJSON) => setTransactions(responseJSON))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      {transactions.map((transaction) => (
        <Transaction key={transaction.id} transaction={transaction} />
      ))}
    </div>
  );
}

export default Transactions;

