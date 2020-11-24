import React, { Component } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class TodosList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      todos:[]
    };
  }
  componentDidMount() {
    axios.get('http://localhost:4000/todos/')
    .then(response => {
      this.setState({ todos : response.data });
    })
    .catch( function(error){
      console.log(error);
    })
  }
  todoList() {
    return this.state.todos.map(function(currentTodo, i) {
      // return <Todo todo = { currentTodo } key={i} />
      return <tr>
        <td>{ currentTodo.todo_description }</td>
        <td>{ currentTodo.todo_responsible }</td>
        <td>{ currentTodo.todo_priority }</td>
        <td>
         <Link to = {"/edit/"+currentTodo._id}>Edit</Link>
        </td>
      </tr>;
    })
  }
  render() {
    return (
      <div>
       <h3>Todo List</h3>
       <table>
        <thead>
         <tr>
          <th>Description</th>
          <th>Responsible</th>
          <th>Priority</th>
          <th>Action</th>
         </tr>
        </thead>
        <tbody>
         { this.todoList() }
        </tbody>
       </table>
      </div>
    );
  }
}
