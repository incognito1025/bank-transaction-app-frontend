import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import "./App.css";

import Edit from "./Pages/EditPage"
import Error from "./Pages/ErrorPage"
import Home from "./Pages/HomePage"
import Index from "./Pages/IndexPage"
import New from "./Pages/NewPage"
import Show from "./Pages/ShowPage"

import NavBar from './Components/NavBar'


function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <main>
          <Routes>
            <Route path='/' element={ <Home/>} />
            <Route path='/transactions' element={ <Index/>} />
            <Route path='/transactions/:id' element={ <Show/>} />
            <Route path='/transactions/:id/edit' element={ <Edit/>} />
            <Route path='/transactions/new' element={ <New/>} />
            <Route path='*' element={ <Error/>} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;

/*
App.jsx: Main App component that includes routing and layout

routes:
- `/`: Home page.
- `/transactions`: Displays a list of transactions.
- `/transactions/new`: Form to add a new transaction.
- `/transactions/:id`: View details of a single transaction.
- `/transactions/:id/edit`: Form to edit an existing transaction.

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



