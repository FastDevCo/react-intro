
var React = require('react');
var ReactDOM = require('react-dom');

var original_tasks = [
             "Do dishes"
             "Code application"
             "Start marketing campaign"
             "Get funding"
            ];


/*
var Hello = function (props) {
  return (<h1>Hello {props.to}!</h1>);
};
*/

function Task (props) {
  return <li>{props.content}</li>
}

var TodoApp = function() {
  var tasks = original_tasks.map(function (task) {
    return <li>{task}</li>
  });
  return (<div className="todo-app">
            <ul>
              {tasks}
            </ul>
          </div>);
};

ReactDOM.render(
  <TodoApp></TodoApp>,
  document.getElementById('app-container')
);
