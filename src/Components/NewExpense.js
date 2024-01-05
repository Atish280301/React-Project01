import React, { useState } from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
function NewExpense(props){
    const [isEditing, setIsEditing] = useState(false);
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.OnAddExpense(expenseData);
        setIsEditing(false);
    }
    const startEditing = () => {
        setIsEditing(true);
    };
    const stopEditing = () => {
        setIsEditing(false);
    };
    return (
         <div className="frm-box">
         { !isEditing && <button onClick = {startEditing}>Add New Expense</button>}
         { isEditing && <ExpenseForm 
                onSaveExpenseData = {saveExpenseDataHandler} 
                onCancel = {stopEditing} 
            />}
         </div>
    );
}
export default NewExpense;