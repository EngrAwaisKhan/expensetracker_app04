import './App.css';
import {Header} from './Components/Header';
import {Balance} from './Components/Balance';
import {IncomeExpense} from './Components/IncomeExpense';
import {TransactionList} from './Components/TransactionList';
import {AddTransaction} from './Components/AddTransaction';
import { GlobalProvider } from './Context/GlobalState';
  
function App() {
  return (
    <GlobalProvider>
        <div className="container">
          <Header/>
          <Balance/>
          <IncomeExpense/>
          <TransactionList/>
          <AddTransaction/>
        </div>
    </GlobalProvider>
  );
}

export default App;
