import Expense from "./Components/Expense"
import NewExpense from "./Components/NewExpense";
let App = () => {
  let expenses = [
    {
      title: "Food", 
      amount: 500, 
      date: new Date(2023, 2, 12)
    },
    {
      title: "Books",
      amount: 700,
      date: new Date(2023, 1, 11)
    },
    {
      title: "travel",
      amount: 1200,
      date: new Date(2023, 3, 20)
    },
  ];
  const AddExpenseHandler = expense => {
    console.log('in App.js');
    console.log(expense);
  }
  return (
    <>
      <NewExpense OnAddExpense = {AddExpenseHandler} />
      <Expense expense = {expenses} />
    </>
  );
}
export default App;