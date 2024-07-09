// IndexPage.jsx
import React from 'react';
import Transactions from '../Components/Transactions';

function IndexPage() {
    return (
        <div className="index-page">
            <div className="content-container">
                <h2>All Transactions</h2>
                <Transactions />
            </div>
        </div>
    );
}

export default IndexPage;







/*

  <Route path='/transactions' element={ <Index/>} />
  - `/transactions`: Displays a list of transactions.
  6.Transactions.js: List of all transactions.
  4.IndexPage.js: Page displaying a list of all transactions, contains `Transactions`.

  */