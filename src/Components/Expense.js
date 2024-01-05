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
    //filter the expense according to the year
    const filteredExpenses = props.expense.filter(
        (Eexpense) => {
            return Eexpense.date.getFullYear().toString() === filteredYear;
        }
    );
    return (
        <Card className="Big-Box">
            <ExpenseFilter selected = {filteredYear} onChangeFilter={filterChnageHandler} />
            {filteredExpenses.map( exp =>{
                return(
                    <ExpenseItem
                        key= {exp.id}
                        title={exp.title}
                        amount={exp.amount}
                        date={exp.date}
                    />
                );
            }
            )}
        </Card>
    );
}
export default Expense;