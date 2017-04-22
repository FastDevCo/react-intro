import React, {Component} from 'react';
import ReactDOM from 'react-dom';

const Hello = function (props) {
  return (<h1>Hello {props.to}!</h1>);
};

const TodoApp = function () {
  const name = 'World';
  return (<div className='todo-app'>
            <Hello to={name} />
          </div>);
};

ReactDOM.render(
  <TodoApp></TodoApp>,
  document.getElementById('app-container')
);
