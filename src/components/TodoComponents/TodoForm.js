import React from 'react';



class TodoForm extends React.Component {
constructor(props) {
    super(props);
    this.state = {
        task: ''
    };
}


submitTask = event => {
    event.preventDefault();
    this.props.addTask(this.state.task);
    this.setState({task: ''})
}

changeHandler = event => {
  this.setState({
      [event.target.name]: event.target.value
  });
}

render() {
    return(
        <form onSubmit={this.submitTask}>
        <input 
        type="text"
        value={this.state.task}
        name="task"
        placeholder="...add a task"
        onChange={this.changeHandler}
        />
        <button type="submit">Add Todo</button>
        <button onClick={this.props.clearTask}>Clear Completed</button>
        
        </form>
    )
}
}
export default TodoForm;