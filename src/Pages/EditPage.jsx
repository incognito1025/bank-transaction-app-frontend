import React from 'react';
import TransactionEditForm from '../Components/TransactionEditForm';

function EditPage() {
  return (
    <div className="Edit">
      <h2>Edit</h2>
      {/* Uncomment the line below to render the TransactionEditForm component */}
      {/* <TransactionEditForm /> */}
    </div>
  );
}

export default EditPage;


/*

- `/transactions/:id/edit`: Form to edit an existing transaction.
  <Route path='/transactions/:id/edit' element={ <Edit/>} />
  1.EditPage.js: Page for editing a transaction, contains `TransactionEditForm`.
  4.TransactionEditForm.js: Form to edit an existing transaction.


*/