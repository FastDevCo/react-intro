
// Loading react related libraries
var React = require('react');
var ReactDOM = require('react-dom');

var TodoApp = function() {
  var name = "World";
  return (<div className="todo-app">Hello {name}!</div>);
};


ReactDOM.render(
  <TodoApp></TodoApp>,
  document.getElementById('app-container')
);
