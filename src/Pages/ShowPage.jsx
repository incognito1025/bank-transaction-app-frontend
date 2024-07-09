import React from 'react';
import TransactionDetails from '../Components/TransactionDetails';

function ShowPage() {
  return (
    <div className='Show'>
      <h2>Show</h2>
      <TransactionDetails />
    </div>
  );
}

export default ShowPage;



/*
6.ShowPage.js: Page displaying details of a single transaction, contains `TransactionDetails`.
<Route path='/transactions/:id' element={ <Show/>} />
*/


  
  

