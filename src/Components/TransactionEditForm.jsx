import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const API = import.meta.env.VITE_API_URL;

const TransactionEditForm = () => {
  const [transaction, setTransactionDetails] = useState({
    item_name: '',
    amount: '',
    date: '',
    from: '',
    category: ''
  });

  const navigate = useNavigate();
  const { id } = useParams();

  const handleTextChange = (event) => {
    setTransactionDetails({ ...transaction, [event.target.id]: event.target.value });
  };

  useEffect(() => {
    fetch(`${API}/transactions/${id}`)
      .then((response) => response.json())
      .then((responseJSON) => {
        setTransactionDetails(responseJSON);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  const updateTransaction = () => {
    fetch(`${API}/transactions/${id}`, {
      method: 'PUT',
      body: JSON.stringify(transaction),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(() => {
        alert("Transaction updated successfully!");
        navigate(`/transactions/${id}`);
      })
      .catch((error) => console.error(error));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    updateTransaction();
  };

  return (
    <div>
      <h1>Edit Transaction</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor='item_name'>Item Name:</label>
        <input id='item_name' type='text' value={transaction.item_name} required onChange={handleTextChange} />

        <label htmlFor='amount'>Amount:</label>
        <input id='amount' type='number' value={transaction.amount} required onChange={handleTextChange} />

        <label htmlFor='date'>Date:</label>
        <input id='date' type='date' value={transaction.date} required onChange={handleTextChange} />

        <label htmlFor='from'>From:</label>
        <input id='from' type='text' value={transaction.from} required onChange={handleTextChange} />

        <label htmlFor='category'>Category:</label>
        <input id='category' type='text' value={transaction.category} required onChange={handleTextChange} />

        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default TransactionEditForm;

/*

- `/transactions/:id/edit`: Form to edit an existing transaction.
  <Route path='/transactions/:id/edit' element={ <Edit/>} />
  1.EditPage.js: Page for editing a transaction, contains `TransactionEditForm`.
  4.TransactionEditForm.js: Form to edit an existing transaction.


Routes>
  <Route path='/' element={ <Home/>} />
  <Route path='/transactions' element={ <Index/>} />
  <Route path='/transactions/:id' element={ <Show/>} />
  <Route path='/transactions/:id/edit' element={ <Edit/>} />
  <Route path='/transactions/new' element={ <New/>} />
  <Route path='*' element={ <Error/>} />
  </Routes>

- `/`: Home page.
- `/transactions`: Displays a list of transactions.
- `/transactions/new`: Form to add a new transaction.
- `/transactions/:id`: View details of a single transaction.
- `/transactions/:id/edit`: Form to edit an existing transaction.

  #### Components
1.NavBar.js: Navigation bar present on all pages.
2.Transaction.js: Represents a single transaction, likely used in lists.
3.TransactionDetails.js: Detailed view of a single transaction.
4.TransactionEditForm.js: Form to edit an existing transaction.
5.TransactionNewForm.js: Form to create a new transaction.
6.Transactions.js: List of all transactions.

#### Pages
1.EditPage.js: Page for editing a transaction, contains `TransactionEditForm`.
2.ErrorPage.js: Page displayed when a route is not found or an error occurs.
3.HomePage.js: Home page of the application.
4.IndexPage.js: Page displaying a list of all transactions, contains `Transactions`.
5.NewPage.js: Page for creating a new transaction, contains `TransactionNewForm`.
6.ShowPage.js: Page displaying details of a single transaction, contains `TransactionDetails`.

*/