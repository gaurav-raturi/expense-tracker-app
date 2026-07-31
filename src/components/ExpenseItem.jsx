import React from 'react'


const ExpenseItem = ({expense, index, deleteExpense, editExpense}) => {
  return (
      <div className='flex justify-between items-center bg-gray-100 p-4 rounded-lg shadow-sm'>
        <div>
            <h3 className='font-semibold text-lg'>{expense.description}</h3>
            <p className='text-sm text-gray-600'>{expense.category}</p>
        </div>

         <div className='font-bold text-green-600'>
            ₹{expense.amount}
         </div>

        <div className='flex gap-2'>
            <button onClick={() => editExpense(index)}
            className='bg-yellow-400 hover:bg-yellow-500 text-white px-3 py-1 rounded'>Edit</button>

            <button onClick={() => deleteExpense(index)}
            className='bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded'>Delete</button>
        </div>
        </div>
  )
}

export default ExpenseItem
    