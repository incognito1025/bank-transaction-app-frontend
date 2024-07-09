import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './TransactionNewForm.css'; // Import the CSS file

const API = import.meta.env.VITE_API_URL; // API endpoint from environment variables

function TransactionNewForm() {
  const [transaction, setTransactionDetails] = useState({
    item_name: '',
    amount: '',
    date: '',
    from: '',
    category: ''
  });

  const navigate = useNavigate();

  const handleTextChange = (event) => {
    setTransactionDetails({ ...transaction, [event.target.id]: event.target.value });
  };

  const addTransaction = () => {
    fetch(`${API}/transactions`, {
      method: 'POST',
      body: JSON.stringify(transaction),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((response) => response.json())
      .then((newTransaction) => {
        alert("Transaction added successfully!");
        navigate(`/transactions/${newTransaction.id}`);
      })
      .catch((error) => console.error(error));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (transaction.item_name && transaction.amount && transaction.date && transaction.from && transaction.category) {
      addTransaction();
      setTransactionDetails({
        item_name: '',
        amount: '',
        date: '',
        from: '',
        category: ''
      });
    } else {
      alert('Please fill out all fields.');
    }
  };

  return (
    <div className='newTransaction'>
      <h1>New Transaction</h1>
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
        <select id='category' value={transaction.category} onChange={handleTextChange} required>
          <option value=''>Please Select One</option>
          <option value='Income'>Income</option>
          <option value='Expense'>Expense</option>
          <option value='Other'>Other</option>
        </select>

        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default TransactionNewForm;




/*
- `/transactions/new`: Form to add a new transaction.
5.TransactionNewForm.js: Form to create a new transaction.
<Route path='/transactions/new' element={ <New/>} />
5.NewPage.js: Page for creating a new transaction, contains `TransactionNewForm`.


1. When the button in the navigation bar to create a new transaction is clicked, you should be brought to a new page that includes a form to create a new transaction.

2. Forms should be properly labeled and the `type` of inputs should be properly set. For example, an input that requires a `number` should have type `number`, not `text`.

3. When a new transaction form is submitted, the transaction should be created in the backend and the user should be brought to that new transaction's Show page.

4. On the transaction's Show page, there should be a button to edit the current transaction. When clicked, the user is brought to a form page with data already filled in that can be edited.
5. When an edited transaction form is submitted, the transaction should be edited in the backend and the user should be brought to that edited transaction's Show page.
6.Make `categories` a `select` HTML element on the new/edit forms to allow the user to choose from a pull-down menu from the available categories, and allow for the addition of new categories to the options menu.
*/
