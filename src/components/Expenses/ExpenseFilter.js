import React from "react"
import './ExpenseFilter.css'
const ExpenseFilter = (props) =>{
    const expenseFilterHandler = (event) => {        
        props.expenseFilterHandlerByYear(event.target.value)
    } 
    return (
        <>
            <label className="expenseFilterLabel" htmlFor="expenseFilterByYear">Filter by year</label>
            <select id="expenseFilterByYear" onChange={expenseFilterHandler}>
                <option value={2020}>2020</option>
                <option value={2021}>2021</option>
                <option value={2022}>2022</option>
                <option default value={2023}>2023</option>
            </select>
        </>
    )
}

export default ExpenseFilter