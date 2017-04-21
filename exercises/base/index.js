
// Loading react related libraries
var React = require('react');
var ReactDOM = require('react-dom');


var Hello = function (props) {
  return (<h1>Hello {props.to}!</h1>);
};

var TodoApp = function () {
  var name = "World";
  return (<div className="todo-app">
            <Hello to={name} />
          </div>);
};


ReactDOM.render(
  <TodoApp></TodoApp>,
  document.getElementById('app-container')
);
