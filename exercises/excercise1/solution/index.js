import React, {Component} from 'react';
import ReactDOM from 'react-dom';

const Task = ({content}) => <li>{content}</li>;

const TodoApp = () => {
  return (<div className='todo-app'>
            <ul>
              <Task content='Do dishes' />
              <Task content='Code app' />
              <Task content='Start marketing campaign' />
              <Task content='Get funding' />
            </ul>
          </div>);
};


ReactDOM.render(
  <TodoApp></TodoApp>,
  document.getElementById('app-container')
);
