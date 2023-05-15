import React, { useState } from "react";
import NewExpenses from "../NewExpenses/NewExpenses";
import ExpensesItem from './ExpensesItem';
import ExpenseFilter from './ExpenseFilter';
import ExpensesChart from './ExpensesChart'
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

    const addNewExpenseData = (newExpenseData) => {
        setExpenseList(() => { return [newExpenseData, ...expenseList] })
    }

    const expenseFilterHandler = (year) => {
        const filteredYear = props.expensesList.filter((item) => {
            return item.date.getFullYear().toString() === year
        });
        console.log(filteredYear)
        setExpenseList(filteredYear);
    }

    return (
        <div className="expensesWrapper">
            <header>
                <button type="button" className="add-new-expenses-btn" onClick={addNewExpenseHandler}>Add New Expense</button>
                <ExpenseFilter expenseFilterHandlerByYear={expenseFilterHandler} />
            </header>
            <ExpensesChart expenses={expenseList} />
            {enableNewExpenses && <NewExpenses onAddNewExpense={addNewExpenseData} />}
            <div className="expensesWrapper-list">
                { expenseList.length === 0 ? <p>No items found</p> : <>{ renderExpenseItems }</>}</div>
        </div>
    )
}


export default Expenses