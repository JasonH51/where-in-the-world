import './App.css';
import {Router} from '@reach/router';
import Dashboard from './dashboard/Dashboard';
import './shared/shared.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Dashboard path="/" />
      </Router>
    </div>
  );
}

export default App;
