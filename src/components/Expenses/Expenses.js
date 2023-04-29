import React, { useState } from "react";
import NewExpenses from "../NewExpenses/NewExpenses";
import ExpensesItem from './ExpensesItem';
import './Expenses.css'
const Expenses = (props) => {
    const [enableNewExpenses, setEnableNewExpenses] = useState(false);
    const addNewExpenseHandler = () => setEnableNewExpenses(true)
    const renderExpenseItems = (<div>
        {
            props.expensesList.map((item) => <ExpensesItem key={item.id} title={item.title} amount={item.amount} date={item.date.toLocaleString()} />)
        }
    </div>
    )

    return (
        <div className="expensesWrapper">
            <header>
                <button type="button" className="add-new-expenses-btn" onClick={addNewExpenseHandler}>Add New Expense</button>
            </header>
            {enableNewExpenses && <NewExpenses />}
            <div className="expensesWrapper-list">{renderExpenseItems}</div>
        </div>
    )
}


export default Expenses