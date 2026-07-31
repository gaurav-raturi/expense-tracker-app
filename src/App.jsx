import React, { useState } from 'react'
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import TotalExpense from './components/TotalExpense';

const App = () => {

  const[expenses, setExpenses] = useState([]);           //Store all expenses
  const[description, setDescription] = useState('');   //Stores what the user types in description input
  const[amount, setAmount] = useState('');            //Stores the amount entered by the user
  const[category, setCategory] = useState('');       //Stores the selected category
  const[editIndex, setEditIndex] = useState(null);   //Remember which expense is being edited


  function handleSubmit(e){
    e.preventDefault();

    if(description.trim() === '' || amount.trim() === '' || category === '') {
      alert('Please fill all fields');
      return;
    }

    const newExpense = {
      description,
      amount : Number(amount),
      category,
    };

    if(editIndex === null) {
      //Add a new expense
      setExpenses([...expenses, newExpense]);
    } else {
      //Update the existing expense
      const updateExpense = expenses.map((expense, index) => {
        if(index === editIndex) {
          return newExpense;
        }
        return expense;
      });
      setExpenses(updateExpense);
      setEditIndex(null);
    }
    setDescription('');
    setAmount('');
    setCategory('');
  }

  function deleteExpense(indexToDelete) {
    const updatedExpense = expenses.filter((expense, index) => {
      return index !== indexToDelete;
    });
    setExpenses(updatedExpense);
  }

  function editExpense(index) {
    setDescription(expenses[index].description);
    setAmount(expenses[index].amount);
    setCategory(expenses[index].category);

    setEditIndex(index);
  }

  return (
    
          <div className='min-h-screen bg-gray-200 flex justify-center items-center'>
            <div className='bg-white p-8 rounded-xl shadow-lg w-full max-w-lg'>

          <ExpenseForm 
            handleSubmit={handleSubmit}
            description={description}
            setDescription={setDescription}
            amount={amount}
            setAmount={setAmount}
            category={category}
            setCategory={setCategory}
            editIndex={editIndex}
            ></ExpenseForm>

            <ExpenseList 
            expenses={expenses}
            deleteExpense={deleteExpense}
            editExpense={editExpense}
            ></ExpenseList>

            <TotalExpense expenses={expenses}
            ></TotalExpense>
        </div>
        </div>

  )
}

export default App
