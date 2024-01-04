import React, {useState} from 'react';

function ExpenseForm(){
    const [enteredTitle, SetEnteredTitle] = useState('');
    const [enteredAmount, SetEnteredAmount] = useState('');
    const [enteredDate, SetEnteredDate] = useState('');
    const titleChangeHandler = (event) => {
        SetEnteredTitle(event.target.value);
    };
    const amountChangeHandler = (event) => {
        SetEnteredAmount(event.target.value);
    }
    const dateChangeHandler = (event) =>{
        SetEnteredDate(event.target.value);
    }
    const submitHandler = (event) => {
        event.preventDefault();
        const dateComponents = enteredDate.split('-');
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(dateComponents[0], dateComponents[1] - 1, dateComponents[2])
        };
        console.log(expenseData);
        SetEnteredTitle('');
        SetEnteredAmount('');
        SetEnteredDate('');
    };
    return (
        <form onSubmit={submitHandler}>
            <div>
                <label>Title:</label>
                <input type="text" value={enteredTitle} onChange = {titleChangeHandler} />
            </div>
            <div>
                <label>Amount:</label>
                <input type="number" value={enteredAmount} onChange = {amountChangeHandler} />
            </div>
            <div>
                <label>Date:</label>
                <input type="date" min="2023-01-01" max="2024-12-31" value={enteredDate} onChange = {dateChangeHandler} />
            </div>
            <div>
                <button type="submit">Submit Expense!</button>
            </div>
        </form>
    );
}
export default ExpenseForm;