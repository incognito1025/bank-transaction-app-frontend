import React from "react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

function Transaction({ transaction }) {
    const formatDate = (dateString) => {
        const options = { month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    return (
        <div className="transaction-card">
            <div className="transaction-date">{formatDate(transaction.date)}</div>
            <Link to={`/transactions/${transaction.id}`} className="transaction-name">
                {transaction.item_name}
            </Link>
            <div className="transaction-amount">${transaction.amount}</div>
        </div>
    );
}

Transaction.propTypes = {
    transaction: PropTypes.shape({
        id: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        item_name: PropTypes.string.isRequired,
        amount: PropTypes.number.isRequired,
    }).isRequired,
};

export default Transaction;








//{ id: nanoid(), item_name: "opening deposit", amount: 10000, date: "2024-07-01", from: "self", category: "income" },


////defines function component `Transaction` and exports it as a defaul export from this module. single prop is `transaction`

//- `/transactions/:id`: View details of a single transaction.

//return statement defines the JSX to render.The Link component’s to attribute is set to a dynamic URL path using template literals. The URL path is /transactions/${transaction.id}, where ${transaction.id} is the ID of the transaction passed as a prop. The text of the link is set to transaction.item_name, which is a property of the transaction object passed as a prop.

/*
1. Transaction.jsx: Represents a single transaction, likely used in lists.
2. /transactions/:id: Show details of a single transaction (ShowPage.jsx)
3. **After clicking on a single transaction, you should be brought to a Show page which includes more detailed information about the specific transaction.**
4. **When the button in the navigation bar to create a new transaction is clicked, you should be brought to a new page that includes a form to create a new transaction.**

/*

- `/transactions/new`: Form to add a new transaction.
5.TransactionNewForm.js: Form to create a new transaction.
  <Route path='/transactions/new' element={ <New/>} />
  5.NewPage.js: Page for creating a new transaction, contains `TransactionNewForm`.

- `/transactions/:id/edit`: Form to edit an existing transaction.
  <Route path='/transactions/:id/edit' element={ <Edit/>} />
  1.EditPage.js: Page for editing a transaction, contains `TransactionEditForm`.
  4.TransactionEditForm.js: Form to edit an existing transaction.

  <Route path='/transactions' element={ <Index/>} />
  - `/transactions`: Displays a list of transactions.
  6.Transactions.js: List of all transactions.
  4.IndexPage.js: Page displaying a list of all transactions, contains `Transactions`.

<Route path='/transactions/:id' element={ <Show/>} />
- `/transactions/:id`: View details of a single transaction.
2.Transaction.js: Represents a single transaction, likely used in lists.

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


/*

### Wireframe

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



    - **Wireframe

          <Routes>
            <Route path='/' element={ <Home/>} />
            <Route path='/transactions' element={ <Index/>} />
            <Route path='/transactions/:id' element={ <Show/>} />
            <Route path='/transactions/:id/edit' element={ <Edit/>} />
            <Route path='/transactions/new' element={ <New/>} />
            <Route path='*' element={ <Error/>} />
          </Routes>


routes:
- `/`: Home page.  -HomePage
- `/transactions`: Displays a list of transactions.  - IndexPage & Transactions.jsx
- `/transactions/new`: Form to add a new transaction.    - NewPage & TransactionNewForm 
- `/transactions/:id`: View details of a single transaction. -ShowPage & Transaction.jsx
- `/transactions/:id/edit`: Form to edit an existing transaction. -EditPage & TransactionEditForm.jsx


### `Transaction.jsx`

Displays details of a single transaction. It allows users to delete or edit the transaction.
*/

/*
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