import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
//import './TransactionEditForm.css';

const API = import.meta.env.VITE_API_URL;

function TransactionEditForm() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [transaction, setTransaction] = useState({
        item_name: '',
        amount: '',
        date: '',
        from: '',
        category: ''
    });

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

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTransaction(prevTransaction => ({
            ...prevTransaction,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch(`${API}/transactions/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(transaction),
        })
            .then(() => {
                alert('Transaction updated successfully!');
                navigate(`/transactions/${id}`);
            })
            .catch((error) => console.error(error));
    };

    const handleCancel = () => {
        navigate(`/transactions/${id}`);
    };

    return (
        <div>
            <h1>Edit Transaction</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Item Name:
                    <input
                        type="text"
                        name="item_name"
                        value={transaction.item_name}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <label>
                    Amount:
                    <input
                        type="text"
                        name="amount"
                        value={transaction.amount}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <label>
                    Date:
                    <input
                        type="text"
                        name="date"
                        value={transaction.date}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <label>
                    From:
                    <input
                        type="text"
                        name="from"
                        value={transaction.from}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <label>
                    Category:
                    <input
                        type="text"
                        name="category"
                        value={transaction.category}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <button type="submit">Submit</button>
                <button type="button" onClick={handleCancel}>Cancel</button>
            </form>
        </div>
    );
}

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