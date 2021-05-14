import React, { useState } from 'react';
import './NewExpense.css'
import ExpenseForm from './ExpenseForm'

const NewExpense = (props) => {

    const [isEditing, setEditing] = useState(false);
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const ExpenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.addExpenseData(ExpenseData)
    }

    const startEditingHandler = () => {
        setEditing(true)
    }

    const stopEditingHandler = () => {
        setEditing(false);
    }
    return (
    <div className="new-expense">
        {!isEditing &&<button onClick={startEditingHandler}>Add New Expense</button>}
        {isEditing && <ExpenseForm handleEdit={stopEditingHandler} onSaveExpenseData={saveExpenseDataHandler}/>}
    </div>
    )
}

export default NewExpense