import logo from './logo.svg';
import './App.css';
import DataTable from './DataTable.js'


function App() {

   
  return (
    <div className="App">
      <div className = "Navbar1">
      <header className="App-header">      
        <h1><img src={logo} className="App-logo" alt="logo"/>Senior</h1>        
        </header>
        </div>
          <DataTable />
    </div>
  );
}

export default App;
