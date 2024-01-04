import React, { useState } from 'react';
function ExpenseForm(){
    const [etitle, SetTitle] = useState("");
    const [eamount, SetAmount] = useState("");
    const [edate, SetDate] = useState("");
    const func = (e) => {
        e.preventDefault();
        console.log("Title : ",etitle);
        console.log("Amount : ",eamount);
        console.log("Date : ",edate);

        SetTitle("");   SetAmount("");  SetDate("");
    }
    return (
        <form onSubmit = {func}>
            <div>
                <label>Title:</label>
                <input type="text" id="et" value = {etitle} onChange={(e) => SetTitle(e.target.value)}/>
            </div>
            <div>
                <label>Amount:</label>
                <input type="number" id= "ea" value = {eamount} onChange={(e) => SetAmount(e.target.value)}/>
            </div>
            <div>
                <label>Date:</label>
                <input type="date" min="2023-01-01" max="2024-12-31" id="ed" value={edate} onChange = {(e) => SetDate(e.target.value)}/>
            </div>
            <div>
                <button type="submit">Submit Expense!</button>
            </div>
        </form>
    );
}
export default ExpenseForm;