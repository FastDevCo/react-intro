
var React = require('react');
var ReactDOM = require('react-dom');

function Task (props) {
  return <h1>{props.content}</h1>
}

var TodoApp = function() {
  return (<div className="todo-app">
            <Task content="Do dishes" />
            <Task content="Code app" />
            <Task content="Start marketing campaign" />
            <Task content="Get funding" />
          </div>);
};


ReactDOM.render(
  <TodoApp></TodoApp>,
  document.getElementById('app-container')
);
