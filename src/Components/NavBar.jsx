import React from 'react'

function NavBar() {
  return (
    <header>
      <h1>My Navigation Bar</h1>
    </header>
  )
}

export default NavBar;


/*
1.NavBar.js: Navigation bar present on all pages.
2. All pages should include the same navigation bar, which includes the name of the application and a button to create a new transaction.
3. When the button in the navigation bar to create a new transaction is clicked, you should be brought to a new page that includes a form to create a new transaction.
4. Stretch Goals - Display the bank account total in the nav bar (or similar component that is visible on all views), instead of just on the index page.

*/


/*

## Wireframe
 
### Project Structure
```
FinanceTrack/
│
└─── src/
     │
     ├─── Components/
     │    ├─── NavBar.jsx
     │    ├─── Transaction.jsx
     │    ├─── TransactionDetails.jsx
     │    ├─── TransactionEditForm.jsx
     │    ├─── TransactionNewForm.jsx
     │    └─── Transactions.jsx
     │
     ├─── Pages/
     │    ├─── EditPage.jsx
     │    ├─── ErrorPage.jsx
     │    ├─── HomePage.jsx
     │    ├─── IndexPage.jsx
     │    ├─── NewPage.jsx
     │    └─── ShowPage.jsx
     │
     ├─── assets/
     │
     ├─── App.css
     ├─── App.jsx
     ├─── index.css
     └─── main.jsx

```

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

#### Static Assets
-assets: Folder to store static assets like images, icons, etc.

#### Styles and Entry Points
-App.cs: Global styles for the application.
-App.js: Main App component that includes routing and layout.
-index.cs: Additional global styles.
-main.js: Main entry point, likely where React is rendered to the DOM.

### Creating the Directory and Files

To create this structure and files in the command line:

```bash

mkdir -p src/{Components,Pages,assets}
touch src/App.css src/App.jsx src/index.css src/main.jsx
touch src/Components/{NavBar.jsx,Transaction.jsx,TransactionDetails.jsx,TransactionEditForm.jsx,TransactionNewForm.jsx,Transactions.jsx}
touch src/Pages/{EditPage.jsx,ErrorPage.jsx,HomePage.jsx,IndexPage.jsx,NewPage.jsx,ShowPage.jsx}
```

## Components



The application uses React Router to handle routing. The routes are defined in `App.jsx`:

- `/`: Home page.
- `/transactions`: Displays a list of transactions.
- `/transactions/new`: Form to add a new transaction.
- `/transactions/:id`: View details of a single transaction.
- `/transactions/:id/edit`: Form to edit an existing transaction.


*/
