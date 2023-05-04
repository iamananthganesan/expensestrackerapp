import React, { useState } from "react";
import NewExpenses from "../NewExpenses/NewExpenses";
import ExpensesItem from './ExpensesItem';
import './Expenses.css'
const Expenses = (props) => {
    const [enableNewExpenses, setEnableNewExpenses] = useState(false);
    const addNewExpenseHandler = () => setEnableNewExpenses(true)
    const [expenseList, setExpenseList] = useState(props.expensesList);
    const renderExpenseItems = (<div>
        {
            expenseList.map((item) => <ExpensesItem key={item.id} title={item.title} amount={item.amount} date={item.date.toLocaleString()} />)
        }
    </div>
    )

    const addNewExpenseData = (newExpenseData) =>{
        setExpenseList(()=>{ return [newExpenseData, ...expenseList]})      
    }

    return (
        <div className="expensesWrapper">
            <header>
                <button type="button" className="add-new-expenses-btn" onClick={addNewExpenseHandler}>Add New Expense</button>
            </header>
            {enableNewExpenses && <NewExpenses onAddNewExpense={addNewExpenseData} />}
            <div className="expensesWrapper-list">{renderExpenseItems}</div>
        </div>
    )
}


export default Expenses