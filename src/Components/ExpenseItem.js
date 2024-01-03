import React, {useState} from 'react';
import ExpenseDate from "./ExpenseDate";
import Card from "./Card";
import "./ExpenseItem.css";
function ExpenseItem(props){
    const [title, setTitle] = useState(props.title);
    let del = () =>{
        setTitle("update title!");
    }
    return(
        <Card className="SmallBox">
            <ExpenseDate date = {props.date}/>
            <p className="title">{title}</p>
            <Card className="amount">/-{props.amount}</Card>
            <button onClick = {del}>Delete</button>
        </Card>
    );
}
export default ExpenseItem;