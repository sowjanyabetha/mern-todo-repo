import React, { Component } from "react";
import axios from 'axios';

export default class CreateTodo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todo_description: '',
      todo_responsible: '',
      todo_priority: '',
      todo_completed: false
    }

    this.onChangeTodoDescription = this.onChangeTodoDescription.bind(this);
    this.onChangeTodoResponsible = this.onChangeTodoResponsible.bind(this);
    this.onChangeTodoPriority = this.onChangeTodoPriority.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

  }
  onChangeTodoDescription(e){
    this.setState({
      todo_description: e.target.value
    });
  }
  onChangeTodoResponsible(e){
    this.setState({
      todo_responsible: e.target.value
    });
  }
  onChangeTodoPriority(e){
    this.setState({
      todo_priority: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();  //default Html form submit behaviour is prevented
    const obj = {
      todo_description : this.state.todo_description,
      todo_responsible : this.state.todo_responsible,
      todo_priority : this.state.todo_priority,
      todo_completed : this.todo_completed
    };
    axios.post('http://localhost:4000/todos/add',obj)
    .then(res => console.log(res.data))
    this.setState({
      todo_description: '',
      todo_responsible: '',
      todo_priority: '',
      todo_completed: false
    })
  }
  render() {
    return (
      <div>
       <h3>Create New Todo</h3>
        <form onSubmit={this.onSubmit}>
         <div>
          <label> Description:</label>
           <input type="text"
           value={this.state.todo_description}
           onChange={this.onChangeTodoDescription}/>
         </div>
         <div>
          <label> Responsible:</label>
           <input type="text"
           value={this.state.todo_responsible}
           onChange={this.onChangeTodoResponsible}/>
         </div>
         <div>
          <div>
           <input type="radio"
           name="priorityOptions"
           id="priorityLow"
           value="Low"
           checked={this.state.todo_priority === 'Low'}
           onChange={this.onChangeTodoPriority}/>
           <label>Low</label>
          </div>
          <div>
           <input type="radio"
           name="priorityOptions"
           id="priorityMedium"
           value="Low"
           checked={this.state.todo_priority === 'Medium'}
           onChange={this.onChangeTodoPriority}/>
           <label>Medium</label>
          </div>
          <div>
           <input type="radio"
           name="priorityOptions"
           id="priorityHigh"
           value="High"
           checked={this.state.todo_priority === 'High'}
           onChange={this.onChangeTodoPriority}/>
           <label>High</label>
          </div>
         </div>
         <div>
          <input type = "submit" value="Create Todo"/>
         </div>
        </form>
      </div>
    );
  }
}
