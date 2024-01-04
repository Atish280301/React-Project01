import React, {useState} from 'react';
function ExpenseForm(){
    const [enteredTitle, SetEnteredTitle] = useState('');
    const [enteredAmount, SetEnteredAmount] = useState('');
    const [enteredDate, SetEnteredDate] = useState('');
    // const [userInput, SetUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // });
    const titleChangeHandler = (event) => {
        SetEnteredTitle(event.target.value);
        //alternate version
        // SetUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value,
        // })
        //Safe alternate version
        // SetUserInput((prevState) => {
        //     return {...prevState, enteredTitle: event.target.value};
        // })
    };
    const amountChangeHandler = (event) => {
        SetEnteredAmount(event.target.value);
    }
    const dateChangeHandler = (event) =>{
        SetEnteredDate(event.target.value);
    }
    return (
        <form>
            <div>
                <label>Title:</label>
                <input type="text" onChange = {titleChangeHandler} />
            </div>
            <div>
                <label>Amount:</label>
                <input type="number" id= "ea" onChange = {amountChangeHandler} />
            </div>
            <div>
                <label>Date:</label>
                <input type="date" min="2023-01-01" max="2024-12-31" id="ed" onChnage = {dateChangeHandler} />
            </div>
            <div>
                <button type="submit">Submit Expense!</button>
            </div>
        </form>
    );
}
export default ExpenseForm;