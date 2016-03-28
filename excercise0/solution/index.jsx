
var React = require('react');
var ReactDOM = require('react-dom');

var TodoApp = function() {
  var name = "Reima React";
  return (<div className="todo-app">Hello {name}!</div>);
};

ReactDOM.render(
  <TodoApp></TodoApp>,
  document.getElementById('app-container')
);
