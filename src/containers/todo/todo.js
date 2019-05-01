import React, { Component } from 'react';
import Footer from '../../components/footer/footer';
import ToDoInput from '../../components/todo-input/task-input';
import ToDoList from '../../components/todo-list/task-list';
import {connect} from 'react-redux';

import { addTast, removeTask, completeTask, changeFiler } from '../../actions/actionCreator'

import './todo.css';






class ToDo extends Component {

    state = {
      taskText: '',
    }

    handleInputChange = ({ target: { value } }) => {
      this.setState({
        taskText: value,
      })
    }

    addTast = ({ key }) => {
      const { taskText } = this.state;

      if (taskText.length > 3 && key === 'Enter') {
        const { addTast } = this.props;

        addTast((new Date()).getTime(), taskText, false);

        this.setState({
          taskText: '',
        })
      }

    }

    filterTasks = (tasks, activeFilter) => {
      switch(activeFilter) {
        case 'completed':
          return tasks.filter(tasks => tasks.isCompleted);
        case 'active':
          return tasks.filter(tasks => !tasks.isCompleted);
        default:
          return tasks;
      }
    }

    getActiveTasksCounter = tasks => tasks.filter(task => !task.isCompleted).length;
  
    render() {
      const { activeFilter, taskText } = this.state;
      const { tasks, removeTask, completeTask, filters, changeFiler } = this.props;
      const isTasksExist = tasks && tasks.length > 0;
      const filteredTasks = this.filterTasks(tasks, filters);
      const taskCounter = this.getActiveTasksCounter(tasks);
  
      return (
        <div className="todo-wrapper">
          <ToDoInput onKeyPress={this.addTast} onChange={this.handleInputChange} value={taskText} />
          {isTasksExist && <ToDoList completeTask={completeTask} tasksList={filteredTasks} removeTask={removeTask} />}
          {isTasksExist && <Footer changeFiler={changeFiler} amount={taskCounter} activeFilter={activeFilter} />}
        </div>
      );
    }
  }
  
  export default connect(({ tasks, filters}) => ({
    tasks,
    filters
  }), { addTast, removeTask, completeTask, changeFiler })(ToDo);