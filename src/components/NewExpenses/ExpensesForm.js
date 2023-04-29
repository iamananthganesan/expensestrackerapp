import React, { useState } from "react";
import './ExpensesForm.css';
const ExpenseForm = () => {
    //Recommanded way to update the state    
    const [expenseName, setExpenseName] = useState('');
    const [expenseAmount, setExpenseAmount] = useState('');
    const [expenseDate, setExpenseDate] = useState('');
    // created single state to upate all the values    
    // const [expense, setExpense] = useState({
    //     expenseName: "",
    //     expenseAmount: "",
    //     expenseDate: ""
    // });
    //
    const expenseNameHandler = (event) => {
        setExpenseName(event.target.value);
        //updating state
        // setExpense({ ...expense, expenseName: event.target.value });
        //to get the previous state
        //setExpense((prevState)=>{ return {...prevState, expenseName: event.target.value}})
    };
    const expenseAmountHandler = (event) => {
        setExpenseAmount(event.target.value);
        //setExpense({ ...expense, expenseAmount: event.target.value });
        //setExpense((prevState) => { return { ...prevState, expenseAmount: event.target.value } })
    };
    const expenseDateHandler = (event) => {
        setExpenseDate(event.target.value);
        //setExpense({ ...expense, expenseDate: new Date(event.target.value) });
        //setExpense((prevState) => { return { ...prevState, expenseDate: event.target.value } })
    };
    const expenseFormHandler = (event) => {
        event.preventDefault();

        const expense = {
            title: expenseName,
            amount: expenseAmount,
            date: new Date(expenseDate)
        }
        console.log(expense);
    };
    return (
        <form onSubmit={expenseFormHandler} className="expense-form">
            <article className="form-control-wrapper">
            <div className="form-control">
                <label htmlFor="expenseName">Expense Name</label>
                <input
                    type="text"
                    id="expenseName"
                    placeholder="Expense Name"
                    value={expenseName}
                    onChange={expenseNameHandler}
                    autoComplete="off"
                />
            </div>
            <div className="form-control">
                <label htmlFor="expenseAmount">Expense Amount</label>
                <input
                    type="number"
                    id="expenseAmount"
                    placeholder="Expense Amount"
                    value={expenseAmount}
                    onChange={expenseAmountHandler}
                />
            </div>
            </article>
            <article className="form-control-wrapper">
            <div className="form-control">
                <label htmlFor="expenseDate">Expense Date</label>
                <input
                    type="date"
                    id="expenseDate"
                    placeholder="Expense Date"
                    value={expenseDate}
                    onChange={expenseDateHandler}
                />
            </div>
            <div className="form-control">
                <button type="submit">Add expense</button>
            </div>
            </article>
        </form>
    );
};

export default ExpenseForm;
