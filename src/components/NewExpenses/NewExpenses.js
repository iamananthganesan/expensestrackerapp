import React from "react";
import ExpenseForm from './ExpensesForm';
import './NewExpenses.css'
const NewExpenses = (props) => {
    const onSaveExpenceData = (enteredExpenseData) =>{
        const expenseData = {
            ...enteredExpenseData, id: Math.random().toString()
        }
        props.onAddNewExpense(expenseData);
    }
    return (
        <div className="new-expense-wrapper">
            <header>
                <h2>Add New Expense</h2>
            </header>
            <ExpenseForm onSaveExpenceData={onSaveExpenceData}/>
        </div>
    )
}


export default NewExpenses