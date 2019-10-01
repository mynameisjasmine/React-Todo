import React from 'react';
import Todo from './Todo';

class TodoList extends React.Component {
 constructor(props) {
  super(props);
 }
  render() {
  
  return (
    <div>
     {this.props.item.map(items => <Todo key={items.id} items={items} itemCompleted={this.props.item.completed} toggleTask={this.props.toggleTask}/>)}
    </div>
    )
  }
}

    

export default TodoList;