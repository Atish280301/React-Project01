// import react, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
function ExpensesList(props){
    if(props.items.length === 0){
       return <h2>Found No Expenses!</h2>
    }
    return(
        <ul>
            {props.items.map( exp =>{
            return(
                <ExpenseItem
                    key= {exp.id}
                    title={exp.title}
                    amount={exp.amount}
                    date={exp.date}
                />
            );
        }
        )}
        </ul>
    );
}
export default ExpensesList