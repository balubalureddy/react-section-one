import Card from '../UI/Card';
import ExpensseItem from './ExpenseItems';
import './Expenses.css'

const Expenses = (props) => {
    const ExpensesItems = props.expenses.map((expense,i) => 
        <ExpensseItem key={i} title={expense.title} amount={expense.amount} date={expense.date} />)
    return (
        <Card className="expenses">
            {ExpensesItems}
        </Card>
    )
}
export default Expenses;