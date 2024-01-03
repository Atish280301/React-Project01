import React, {useState} from 'react';
import ExpenseDate from "./ExpenseDate";
import Card from "./Card";
import "./ExpenseItem.css";
function ExpenseItem(props){
    const [isDeleted, setDeleted] = useState(false);
    let del = () =>{
        setDeleted(true);
    }
    if(isDeleted){
        return null;
    }
    return(
        <Card className="SmallBox">
            <ExpenseDate date = {props.date}/>
            <p className="title">{props.title}</p>
            <Card className="amount">/-{props.amount}</Card>
            <button onClick = {del}>Delete</button>
        </Card>
    );
}
export default ExpenseItem;