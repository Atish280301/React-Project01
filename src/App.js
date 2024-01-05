import React, { useState } from 'react';
import Expense from "./Components/Expense"
import NewExpense from "./Components/NewExpense";
  let dumyexpenses = [
    {
      id: "e1",
      title: "Food", 
      amount: 500, 
      date: new Date(2023, 2, 12)
    },
    {
      id: "e2",
      title: "Books",
      amount: 700,
      date: new Date(2023, 1, 11)
    },
    {
      id: "e3",
      title: "travel",
      amount: 1200,
      date: new Date(2023, 3, 20)
    },
  ];
let App = () => {
  const [expenses, setExpense] = useState(dumyexpenses);
  const AddExpenseHandler = expense => {
    setExpense(prevExpenses => {
      return [expense, ...prevExpenses]
    });
  }
  return (
    <>
      <NewExpense OnAddExpense = {AddExpenseHandler} />
      <Expense expense = {expenses} />
    </>
  );
}
export default App;