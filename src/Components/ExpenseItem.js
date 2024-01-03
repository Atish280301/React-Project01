import ExpenseDate from "./ExpenseDate";
import Card from "./Card";
import "./ExpenseItem.css";
function ExpenseItem(props){
    return(
        <Card className="SmallBox">
            <ExpenseDate date = {props.date}/>
            <p className="title">{props.title}</p>
            <Card className="amount">/-{props.amount}</Card>
        </Card>
    );
}
export default ExpenseItem;