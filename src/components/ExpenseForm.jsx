import React from 'react'

const ExpenseForm = ({handleSubmit, description, setDescription, amount, setAmount, category, setCategory, editIndex}) => {
  return (
    <div>
      <form onSubmit={handleSubmit}
        className='space-y-5'>
        <input type='text'
        placeholder='Enter Description'
        value={description}
        onChange={(e)=> setDescription(e.target.value)}
        className='w-full border p-3 rounded-lg'>
        </input>

        <input type='number'
        placeholder='Enter Amount'
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className='w-full border p-3 rounded-lg'>
        </input>

        <select value={category}
        onChange={(e) => setCategory(e.target.value)}
        className='w-full border p-3 rounded-lg'>
          <option value=''>Select Category</option>
          <option value='Food'>Food</option>
          <option value='Travel'>Travel</option>
          <option value='Bill'>Bills</option>
          <option value='Entertainment'>Entertainment</option>
        </select>

        <button type='submit'
        className='w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600'
        >
        {editIndex === null ? 'Add Expense' : 'Update Expense'}
        </button>
    </form>
    </div>

  );
};

export default ExpenseForm;
