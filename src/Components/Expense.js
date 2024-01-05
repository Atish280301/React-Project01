import ExpenseFilter from "./ExpenseFilter";
import "./Expense.css";
import Card from "./Card";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpenseChart from "./ExpenseChart";
function Expense(props){
    const [filteredYear, setFilteredYear] = useState('2020');
    const filterChnageHandler = selectedYear => {
        setFilteredYear(selectedYear);
    }
    //filter the expense according to the year
    const filteredExpenses = props.expense.filter(
        (Eexpense) => {
            return Eexpense.date.getFullYear().toString() === filteredYear;
        }
    );
    return (
        <Card className="Big-Box">
            <ExpenseFilter 
                selected = {filteredYear} 
                onChangeFilter={filterChnageHandler} 
            />
            <ExpenseChart expenses = {filteredExpenses}  />
            <ExpensesList items={filteredExpenses}/>
        </Card>
    );
}
export default Expense;