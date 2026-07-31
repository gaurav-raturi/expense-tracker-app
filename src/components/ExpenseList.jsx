import React from 'react'
import ExpenseItem from './ExpenseItem';

const ExpenseList = ({expenses, deleteExpense, editExpense}) => {
  return (
    <div className='mt-8'>
        <h2 className='text-xl font-semibold mb-4'>Expenses</h2>
        <div className='space-y-3'>
            {expenses.map((expense, index) => (
                <ExpenseItem
                key={index}
                expense={expense}
                index={index}
                deleteExpense={deleteExpense}
                editExpense={editExpense}>
                </ExpenseItem>
            ))}
        </div>
    </div>
  );
};
export default ExpenseList
