import React from 'react';
import ExpensseItem from './ExpenseItems'
import './ExpensesList.css'
const ExpensesList = props => {
    if(props.filteredData.length === 0){
        return <h2 className="expenses-list__fallback">Found no expenses</h2>
    }

    return (
        <ul className="expenses-list">
            {props.filteredData.map((expense) =>
        <ExpensseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />)}
        </ul>
    )
}

export default ExpensesList;