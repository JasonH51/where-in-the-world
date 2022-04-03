import './App.css';
import {Router} from '@reach/router';
import Dashboard from './dashboard/Dashboard';
import './shared/shared.css';
import CountryDataAPI from './API/CountryDataAPI';

function App() {
  return (
    <div className="App">
      <CountryDataAPI>
        <Router>
          <Dashboard path="/" />
        </Router>
      </CountryDataAPI>
    </div>
  );
}

export default App;
