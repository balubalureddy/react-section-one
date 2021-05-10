import Expenses from "./components/Expenses/Expenses"
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const expenses = [
    {id: 'e1', title: 'Car Insurence', amount: 350, date:new Date(2021,2,28)},
    {id: 'e2',title: 'Car Insurence', amount: 350, date:new Date(2021,2,28)},
    {id: 'e3',title: 'Car Insurence', amount: 350, date:new Date(2021,2,28)}
  ]
  const handelAddExpenseData = (ExpenseData) => {
    
  }
  return (
    <div>
        <NewExpense addExpenseData={handelAddExpenseData}/>
        <Expenses expenses={expenses}/>
    </div>
  );
}

export default App;
