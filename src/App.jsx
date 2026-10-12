import ExpenseTracker from './ExpenseTracker';
import './App.css'

function App() {
  const expenses = [
    { id: 1, name: "Groceries", amount: 3500, category: "Food", status:"High" },
    { id: 2, name: "Transport", amount: 800, category: "Travel", status:"Low" },
    { id: 3, name: "Electricity", amount: 2500, category: "Utilities", status:"High" },
    { id: 4, name: "Lunch", amount: 500, category: "Food", status:"Low"},
    { id: 5, name: "Internet", amount: 3000, category: "Utilities", status:"High"}
  ];

  return(
    <ExpenseTracker expenses= {expenses} />
  )
}

export default App
