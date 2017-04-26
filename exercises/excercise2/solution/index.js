import React, {Component} from 'react';
import ReactDOM from 'react-dom';

const originalTasks = [
  'Do dishes',
  'Code application',
  'Start marketing campaign',
  'Get funding',
];

const Task = ({content}) => <li>{content}</li>;

const TodoApp = () => {
  const tasks = originalTasks.map(task => <li>{task}</li>);
  return (<div className='todo-app'>
            <ul>{tasks}</ul>
          </div>);
};

ReactDOM.render(
  <TodoApp></TodoApp>,
  document.getElementById('app-container')
);
