import React from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
function NewExpense(){
    return (
         <div className="frm-box">
         <ExpenseForm/>
         </div>
    );
}
export default NewExpense;