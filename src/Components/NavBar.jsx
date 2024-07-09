// NavBar.jsx

import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <div className="nav-wrapper">
            <h1>FinanceTrack App</h1>
            <nav>
                <ul>
                    <li>
                        <Link to="/transactions">Index</Link>
                    </li>
                    <li>
                        <Link to="/transactions/new" className="button">New Transaction</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default NavBar;









//NavBar.jsx: Navigation bar with links to the Index page and New Transaction form, and displays the app name.

/*
1.NavBar.js: Navigation bar present on all pages.
2. All pages should include the same navigation bar, which includes the name of the application and a button to create a new transaction.
3. When the button in the navigation bar to create a new transaction is clicked, you should be brought to a new page that includes a form to create a new transaction.
4. Stretch Goals - Display the bank account total in the nav bar (or similar component that is visible on all views), instead of just on the index page.

/*

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

