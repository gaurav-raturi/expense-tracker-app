import React from 'react'

const TotalExpense = ({expenses}) => {

    const total = expenses.reduce((sum, expense) => {
        return sum + expense.amount;
    }, 0);

  return (
    <div className='mt-6 bg-blue-100 p-4 rounded-lg shadow'>
      <h2 className='text-xl font-bold'> 💰 Total Expense : ₹{total}</h2>
    </div>
  )
}

export default TotalExpense;
