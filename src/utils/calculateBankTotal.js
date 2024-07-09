// utils/calculateBankTotal.js

function calculateBankTotal(transactions) {
    let total = 0;
    
    // Iterate through each transaction and sum up the amount
    transactions.forEach(transaction => {
      total += transaction.amount;
    });
  
    return total;
  }
  
  export default calculateBankTotal;
  