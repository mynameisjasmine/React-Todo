import React from 'react';
import "./components/TodoComponents/Todo.css";
import { data } from './components/TodoComponents/data';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';



class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super(); 
      this.state = {
      // task: '',
      data: data
      }

    }

      toggleTask = id => {
        console.log('toggleTask', id)
        this.setState({
          data: this.state.data.map(item => {
         if(item.id === id) {
           return {
             ...item,
             completed: true
           };
         } else {
           return item;
         }
          })
        }); 
      };

      addTask = taskName => {
        const newTask = {
          id: Date.now(),
          task: taskName,
          completed: false
        };
        this.setState({
        data: [...this.state.data, newTask] 
        });
      };
    
    clearTask = () => {
      this.setState({
        data: this.state.data.filter(item => !item.completed)
      });
    }
  
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addTask={this.addTask} clearTask={this.clearTask}/>
        <TodoList item={this.state.data} toggleTask={this.toggleTask}/>
      </div>
    );
  }
}

export default App;
