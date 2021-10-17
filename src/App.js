import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// import Hello from './components/Hello';
import Cart from './pages/Cart';
import List from './pages/List';

class App extends React.Component {
  render() {
    console.log("app is rendering");
    return (
      <Router>
        <div id="App">
          <div className="nav-bar">
            <Link to="/">
              <button className="nav-btn">Games List</button>
            </Link>
            <Link to="/cart">
              <button className="nav-btn">My cart</button>
            </Link>
          </div>

          <Switch>
            <Route path="/" exact>
              <List />
            </Route>
            <Route path="/cart" exact>
              <Cart />
            </Route>
          </Switch>

          {/* <Hello></Hello> */}
        </div>
      </Router>
    );
  }
}

export default App;
