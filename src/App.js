import './App.css';
import Expenses from './components/Expenses/Expenses';
function App() {
  const INITIAL_EXPENSES = [
    {
      id: 'e1',
      title:'House Rent allowance',
      amount: 15000,
      date: new Date('2023,04,03')
    },
    {
      id: 'e2',
      title:'Monthly grocery items',
      amount: 5900,
      date: new Date('2021,04,05')
    },
    {
      id: 'e3',
      title:'Maid allowance',
      amount: 3000,
      date: new Date('2022,04,01')
    }
  ]
  return (
    <div className="App">
      <header>
        <h1>Expense Tracker application</h1>
      </header>
      <Expenses expensesList={INITIAL_EXPENSES}/>
    </div>
  );
}

export default App;
