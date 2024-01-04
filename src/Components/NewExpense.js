import React from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
function NewExpense(props){
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.OnAddExpense(expenseData);
    }
    return (
         <div className="frm-box">
         <ExpenseForm onSaveExpenseData = {saveExpenseDataHandler}/>
         </div>
    );
}
export default NewExpense;