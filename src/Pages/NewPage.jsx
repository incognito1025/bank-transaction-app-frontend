import React from 'react';
import TransactionNewForm from "../Components/TransactionNewForm";

function NewPage() {
  return (
    <div className="New">
      <h2>New</h2>
      {/* Uncomment the line below to render the TransactionNewForm component */}
      <TransactionNewForm />
    </div>
  );
}

export default NewPage;

/*

- `/transactions/new`: Form to add a new transaction.
5.TransactionNewForm.js: Form to create a new transaction.
  <Route path='/transactions/new' element={ <New/>} />
  5.NewPage.js: Page for creating a new transaction, contains `TransactionNewForm`.

*/