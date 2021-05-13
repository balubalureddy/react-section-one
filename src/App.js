import { useState } from "react";
import Expenses from "./components/Expenses/Expenses"
import NewExpense from "./components/NewExpense/NewExpense";

const DummyExpense = [
  {id: 'e1', title: 'Car Insurence', amount: 350, date:new Date(2021,2,28)},
  {id: 'e2',title: 'Car Insurence', amount: 350, date:new Date(2023,2,28)},
  {id: 'e3',title: 'Car Insurence', amount: 350, date:new Date(2022,2,28)}
]
const App = () => {

  const [expenses, setExpenses] = useState(DummyExpense)
  const handelAddExpenseData = (ExpenseData) => {
    setExpenses(prevExpenses => {
      return [ExpenseData, ...prevExpenses]
    })
  }
  return (
    <div>
        <NewExpense addExpenseData={handelAddExpenseData}/>
        <Expenses expenses={expenses}/>
    </div>
  );
}

export default App;
