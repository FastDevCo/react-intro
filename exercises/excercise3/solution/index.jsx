
var React = require('react');
var ReactDOM = require('react-dom');

var original_tasks = [
             "Do dishes",
             "Code application",
             "Start marketing campaign",
             "Get funding"
            ];


function Task (props) {
  return <li>{props.content}</li>
}

function TaskList (props) {
  var tasks = props.tasks.map(function (task) {
    return <Task content={task} />
  });
  return <ul>{tasks}</ul>
}

var TodoApp = function() {
  return (<div className="todo-app">
            <TaskList tasks={original_tasks}></TaskList>
          </div>);
};

ReactDOM.render(
  <TodoApp></TodoApp>,
  document.getElementById('app-container')
);
