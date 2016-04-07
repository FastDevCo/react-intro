
var React = require('react');
var ReactDOM = require('react-dom');

/*
var Hello = function (props) {
  return (<h1>Hello {props.to}!</h1>);
};
*/

function Task (props) {
  return <li>{props.content}</li>
}

var TodoApp = function() {
  return (<div className="todo-app">
            <ul>
              <Task content="Do dishes" />
              <Task content="Code app" />
              <Task content="Start marketing campaign" />
              <Task content="Get funding" />
            </ul>
          </div>);
};


ReactDOM.render(
  <TodoApp></TodoApp>,
  document.getElementById('app-container')
);
