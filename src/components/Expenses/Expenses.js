import React, { useState } from 'react';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css'
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {

    const [filteredYear, setFilteredYear] = useState('2021');
    const handelfilterChange = (selectedYear) => {
        setFilteredYear(selectedYear);
    }

    const filteredExpenses = props.expenses.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    

    return (
        <React.Fragment>
            <Card className="expenses">
                <ExpensesFilter selectedYear={filteredYear} getfilterChange={handelfilterChange} />
                <ExpensesChart expenses={filteredExpenses}/>
                <ExpensesList filteredData = {filteredExpenses}/>
            </Card>
        </React.Fragment>
    )
}
export default Expenses;