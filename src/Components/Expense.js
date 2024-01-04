import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";
import "./Expense.css";
import Card from "./Card";
import { useState } from "react";
function Expense(props){
    const [filteredYear, setFilteredYear] = useState('2020');
    const filterChnageHandler = selectedYear => {
        setFilteredYear(selectedYear);
    }
    return (
        <Card className="Big-Box">
            <ExpenseFilter selected = {filteredYear} onChangeFilter={filterChnageHandler} />
            <ExpenseItem title = {props.expense[0].title} amount = {props.expense[0].amount} date = {props.expense[0].date}></ExpenseItem>
            <ExpenseItem title = {props.expense[1].title} amount = {props.expense[1].amount} date = {props.expense[1].date}></ExpenseItem>
            <ExpenseItem title = {props.expense[2].title} amount = {props.expense[2].amount} date = {props.expense[1].date}></ExpenseItem>
        </Card>
    );
}
export default Expense;