
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './pages/Home/Home';

function App() {
  return (
    <div className="App">
      <Router>
      <div>
        <Switch>
          <Route path="/" component={Home}/>
        </Switch>
      </div>
    </Router>
    </div>
  );
}


export default App;
