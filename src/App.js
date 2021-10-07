import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Switch, 
  Route
} from "react-router-dom";

import {Navbar} from './components/navBar/index';
import {HomePage} from "./components/pages/home/index";
import {NewTodoPage} from "./components/pages/new-todo/index";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar></Navbar>
        <Switch>
          <Route exact path="/">
            <HomePage></HomePage>
          </Route>
          <Route path="/new">
            <NewTodoPage></NewTodoPage>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
