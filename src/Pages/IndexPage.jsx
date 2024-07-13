import React, { useEffect, useState } from 'react';
import Transaction from '../Components/Transaction';

const API = import.meta.env.VITE_API_URL; // Ensure this points to your correct API URL

function IndexPage() {
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        fetch(`${API}/transactions`)
            .then(response => response.json())
            .then(data => {
                // Sort transactions by date in descending order
                const sortedTransactions = data.sort((a, b) => new Date(b.date) - new Date(a.date));
                setTransactions(sortedTransactions);
            })
            .catch(error => console.error('Error fetching transactions:', error));
    }, []);

    const addNewTransaction = (newTransaction) => {
        // Update state to add new transaction at the beginning
        setTransactions([newTransaction, ...transactions]);
    };

    return (
        <div>
            <h1>All Transactions</h1>
            <div className="transactions-list">
                {transactions.map(transaction => (
                    <Transaction key={transaction.id} transaction={transaction} />
                ))}
            </div>
        </div>
    );
}

export default IndexPage;









/*

  <Route path='/transactions' element={ <Index/>} />
  - `/transactions`: Displays a list of transactions.
  6.Transactions.js: List of all transactions.
  4.IndexPage.js: Page displaying a list of all transactions, contains `Transactions`.

  */