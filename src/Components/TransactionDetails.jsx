import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
//import './TransactionDetails.css';

const API = import.meta.env.VITE_API_URL;

function TransactionDetails() {
    const [transaction, setTransaction] = useState({
        item_name: '',
        amount: '',
        date: '',
        from: '',
        category: ''
    });
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`${API}/transactions/${id}`)
            .then((response) => response.json())
            .then((responseJSON) => {
                setTransaction(responseJSON);
            })
            .catch(() => {
                navigate('/notfound');
            });
    }, [id, navigate]);

    const handleDelete = () => {
        const confirmDelete = window.confirm("Are you sure you want to delete this transaction?");
        if (confirmDelete) {
            fetch(`${API}/transactions/${id}`, {
                method: 'DELETE',
            })
                .then(() => {
                    alert("Transaction deleted successfully!");
                    navigate('/transactions');
                })
                .catch((error) => console.error(error));
        }
    };

    const handleCancel = () => {
        navigate(`/transactions/${id}`);
    };

    return (
        <div>
            <h1>Transaction Details</h1>
            <p><strong>Item Name:</strong> {transaction.item_name}</p>
            <p><strong>Amount:</strong> {transaction.amount}</p>
            <p><strong>Date:</strong> {transaction.date}</p>
            <p><strong>From:</strong> {transaction.from}</p>
            <p><strong>Category:</strong> {transaction.category}</p>
            <Link to={`/transactions/${id}/edit`}>
                <button>Edit</button>
            </Link>
            <button onClick={handleDelete}>Delete</button>
            <button onClick={handleCancel}>Cancel</button>
        </div>
    );
}

export default TransactionDetails;






/*
//View Transactions
name
id
item_name
amount
date
from
category

//Add a New Transaction

//Edit Transactions

//Delete Transactions

//Track Your Budget - total budget


{ id: nanoid(), item_name: "opening deposit", amount: 10000, date: "2024-07-01", from: "self", category: "income" },

*/



/*

- `/transactions/:id`: View details of a single transaction.
 <Route path='/transactions/:id' element={ <Show/>} />
 - `/transactions/:id`: View details of a single transaction.
 6.ShowPage.js: Page displaying details of a single transaction, contains `TransactionDetails`.

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