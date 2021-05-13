import React, { useState } from 'react';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensseItem from './ExpenseItems';
import './Expenses.css'

const Expenses = (props) => {

    const [filteredYear, setFilteredYear] = useState('2021');
    const ExpensesItems = props.expenses.map((expense,i) => 
        <ExpensseItem key={i} title={expense.title} amount={expense.amount} date={expense.date} />)
    
    const handelfilterChange = (selectedYear) => {
        setFilteredYear(selectedYear);
    }
    return (
        <React.Fragment>
            <Card className="expenses">
                <ExpensesFilter selectedYear={filteredYear} getfilterChange={handelfilterChange}/>
                {ExpensesItems}
            </Card>
        </React.Fragment>
    )
}
export default Expenses;