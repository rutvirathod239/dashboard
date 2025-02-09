import { BrowserRouter as Router } from 'react-router-dom';
import Dashboard from './Component/Dashboard';
import { ThemeProvider } from './Component/ThemeProvider';

function App() {
  return (
    <div className="App">
      <Router>
        <ThemeProvider>
          <Dashboard />
        </ThemeProvider>
      </Router>
    </div>
  );
}

export default App;
