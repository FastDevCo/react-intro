
var React = require('react');
var ReactDOM = require('react-dom');

var original_tasks = [{
  "id": "1e01ba13-ea47-4d24-9131-d95c23d1bb8f",
  "done": false,
  "task": "Learn React"
}, {
  "id": "076e0daf-e4ee-42af-8c3d-f6210920b0b7",
  "done": true,
  "task": "Rake the yard"
}, {
  "id": "5516fdbb-046a-4a4a-9085-36086b5ef00a",
  "done": false,
  "task": "Buy milk"
}, {
  "id": "385f6953-9658-4b3d-a791-afcd9460cb2b",
  "done": false,
  "task": "Buy eggs"
}, {
  "id": "e8f3921b-157c-4ac5-b54c-24485048a9c1",
  "done": true,
  "task": "Prepare next trip to south"
}];


function Task (props) {
  return <li>{props.content.task}</li>
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
