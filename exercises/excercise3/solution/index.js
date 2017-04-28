import React, {Component} from 'react';
import ReactDOM from 'react-dom';

const originalTasks = [
  'Do dishes',
  'Code application',
  'Start marketing campaign',
  'Get funding',
];

const Task = ({content}) => <li>{content}</li>;


const TaskList = ({tasks}) => {
  const taskElems = tasks.map(task => <Task content={task} />);
  return <ul>{taskElems}</ul>;
}

const TodoApp = () => {
  return (<div className='todo-app'>
            <TaskList tasks={originalTasks}></TaskList>
          </div>);
}

ReactDOM.render(
  <TodoApp></TodoApp>,
  document.getElementById('app-container')
);
