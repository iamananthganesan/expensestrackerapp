import React from "react";
import ExpenseForm from './ExpensesForm';
import './NewExpenses.css'
const NewExpenses = () => {
    return (
        <div className="new-expense-wrapper">
            <header>
                <h2>Add New Expense</h2>
            </header>
            <ExpenseForm/>
        </div>
    )
}


export default NewExpenses