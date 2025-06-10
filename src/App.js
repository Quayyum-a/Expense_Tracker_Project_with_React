import Expenses from "./components/Expenses/Expenses";
import NewExpense from './components/NewExpense/NewExpense';

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Groceries",
      amount: 50.0,
      date: new Date(2023, 9, 1),
    },
    {
      id: "e2",
      title: "Rent",
      amount: 1200.0,
      date: new Date(2023, 8, 1),
    },
    {
      id: "e3",
      title: "Utilities",
      amount: 200.0,
      date: new Date(2023, 7, 1),
    },
    {
      id: "e4",
      title: "Health",
      amount: 650.0,
      date: new Date(2024, 6, 2),
    },
  ];

  const addExpenseHanler = expense =>{
    console.log('in App.js');
    console.log(expenses);
  }
  return (
    <div>
      <NewExpense onAddExpense = {addExpenseHanler}/>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
