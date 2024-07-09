import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const API = import.meta.env.VITE_API_URL;

function TransactionNewForm() {
  const [transaction, setTransactionDetails] = useState({
    id: '',
    item_name: '',
    amount: '',
    date: '',
    from: '',
    category: ''
  });

  let navigate = useNavigate();

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
      .then(() => {
        navigate(`/transactions/${transaction.id}`);
      })
      .catch((error) => console.error(error));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addTransaction();
    setTransactionDetails({
      id: '',
      item_name: '',
      amount: '',
      date: '',
      from: '',
      category: ''
    });
  };

  return (
    <div>
      <h1>New Transaction</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor='id'>ID:</label>
        <input id='id' type='text' value={transaction.id} required onChange={handleTextChange} />

        <label htmlFor='item_name'>Item Name:</label>
        <input id='item_name' type='text' value={transaction.item_name} required onChange={handleTextChange} />

        <label htmlFor='amount'>Amount:</label>
        <input id='amount' type='number' value={transaction.amount} required onChange={handleTextChange} />

        <label htmlFor='date'>Date:</label>
        <input id='date' type='text' value={transaction.date} required onChange={handleTextChange} />

        <label htmlFor='from'>From:</label>
        <input id='from' type='text' value={transaction.from} required onChange={handleTextChange} />

        <label htmlFor='category'>Category:</label>
        <input id='category' type='text' value={transaction.category} required onChange={handleTextChange} />

        <button>Submit</button>
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

/*

const p = document.querySelector("p");
// console.log(p.textContent);

const title = document.querySelector("input[type='text']");
// console.log(title.value);

const genre = document.querySelector("select");
// console.log(genre.value);

const nonFiction = document.querySelector("#genre-non-fiction");
// console.log(nonFiction.value); //> non-fiction
// console.log(nonFiction.checked); //> false

const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  // Prevents form from refreshing the page
  event.preventDefault();

  // Gets values from form
  const title = document.querySelector("#title").value;

  const author = document.querySelector("#author").value;

  const genre = document.querySelector("select");

  // Selects elements to append new books
  const ul = document.querySelector("ul");

  // appends text only li
  // const li = document.createElement("li");
  // li.innerText = `${title} by ${author}`;
  // ul.append(li);

  // Creates template li with innerHTML and event listeners/handlers
  const liTemplate = bookTemplate(author, title, genre.value);

  // Appends li Template
  ul.append(liTemplate);
  // resets the form
  form.reset();
});

// Double click to delete
function removeBook(element) {
  element.addEventListener("dblclick", (event) => {
    event.target.remove();
  });
}

// create template for HTML elements inside li
function bookTemplate(author, title, genre) {
  const template = document.createElement("li");
  template.innerHTML = `<span> ${genre}</span>${title} by ${author}
 <button>Finished</button>
`;
  const bookButton = template.querySelector("button");
  toggleRead(bookButton);
  removeBook(template);
  return template;
}

// button to toggle read/to read
function toggleRead(element) {
  element.addEventListener("click", () => {
    element.parentNode.classList.toggle("read");
    let innerButtonText =
      element.innerText === "Read it" ? "Finished" : "Read it";
    element.innerText = innerButtonText;
  });
}

const books = document.querySelectorAll("li");
books.forEach((book) => {
  removeBook(book);
  const button = book.querySelector("button");
  toggleRead(button);
});

*/