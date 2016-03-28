
var React = require('react');
var ReactDOM = require('react-dom');

var original_tasks = [
             "Do dishes"
             "Code application"
             "Start marketing campaign"
             "Get funding"
            ];


function Task (props) {
  return <h1>{props.content}</h1>
}

var TodoApp = function() {
  var tasks = original_tasks.map(function (task) {
    return (<Task content={task}/>)
  });
  return (<div className="todo-app">{tasks}</div>);
};


ReactDOM.render(
  <TodoApp></TodoApp>,
  document.getElementById('app-container')
);
