import React from 'react';


class Todo extends React.Component {
    constructor(props) {
    super(props);

    }

    render () {
    console.log(this.props.items);
    return (
        <div
        onClick={() => this.props.toggleTask(this.props.items.id)}
        className={this.props.items.completed ? "completed" : ""}>

        <p>{this.props.items.task}</p>

        </div>
   )

    }
}


    
export default Todo;