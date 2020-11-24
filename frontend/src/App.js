import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import CreateTodo from './components/create-todo.component';
import EditTodo from './components/edit-todo.component';
import TodosList from './components/todos-list.component';

class App extends Component {
  render() {
    return (
      <Router>
      <div className = "container">
       <nav>
        <Link to="/">Todo App</Link>
         <div>
          <ul>
           <li>
            <Link to="/">Todos</Link>
           </li>
           <li>
            <Link to="/create">Create Todo</Link>
           </li>
          </ul>
         </div>
       </nav>
       <br/>
      <Route path="/" exact component = {TodosList} />
      <Route path="/edit/:id" component = {EditTodo} />
      <Route path="/create" component = {CreateTodo} />
      </div>
      </Router>
    );
  }
}

export default App;
