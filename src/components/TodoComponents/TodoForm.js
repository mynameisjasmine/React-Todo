import React from 'react';



class TodoForm extends React.Component {
constructor() {
    super();
    this.state = {
        task: ''
    };
}


submitTask = event => {
    event.preventDefault();
    this.props.addTask(this.state.task);
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
        value={this.task}
        name="task"
        onChange={this.changeHandler}
        />
        <button>Add Todo</button>
        <button>Clear Completed</button>
        
        </form>
    )
}
}
export default TodoForm;