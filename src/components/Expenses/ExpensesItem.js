import React from "react";
import './ExpensesItem.css';

const ExpensesItem = ({ title, amount, date }) => {
    return (
        <div className="expense-item">
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div>{date}</div>
            </div>
            <div className="expense-item__price">{amount}</div>
        </div>
    )
}


export default ExpensesItem