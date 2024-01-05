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
            {props.expense.map( exp =>{
                if(!exp.id){
                    console.log("Expense Item has no id:",exp);
                }
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