import Card from "./Card";
import "./ExpenseDate.css"
function ExpenseDate(props){
    let month = props.date.toLocaleString('en-US',{month: 'long'});
    let day = props.date.toLocaleString('en-US', {day: '2-digit'});
    let year = props.date.getFullYear();
    return(
        <Card className="Date">
            <div>{month}</div>
            <div>{day}</div>
            <div>{year}</div>
        </Card>
    );
}
export default ExpenseDate;