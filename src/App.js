import Expense from "./Components/Expense"
let App = () => {
  let expense = [
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
  return (
    <>
      <Expense expense = {expense} />
    </>
  );
}
export default App;