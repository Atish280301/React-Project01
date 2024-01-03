import React, {useState} from 'react';
import ExpenseDate from "./ExpenseDate";
import Card from "./Card";
import "./ExpenseItem.css";
function ExpenseItem(props){
    const [expense, exp] = useState(props.amount);
    let del = () =>{
        exp("100$");
    };
    return(
        <Card className="SmallBox">
            <ExpenseDate date = {props.date}/>
            <p className="title">{props.title}</p>
            <Card className="amount">{expense}</Card>
            <button onClick = {del}>Delete</button>
        </Card>
    );
}
export default ExpenseItem;