
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
  // we want to assign different CSS to 'done' and 'undone' items
  var taskClass = props.content.done ? 'done' : 'undone';

  return (<div className={"task " + taskClass}>
            <div className="task-main">
              <span><strong>{props.content.task}</strong></span>
            </div>
          </div>)
}

function TaskList (props) {
  var tasks = props.tasks.map(function (task) {
    return <Task content={task} />
  });
  return <div className={"tasks " + props.type}>{tasks}</div>
}

// Predicate functions
function is_done (task) {
  return task.done;
}

function is_undone (task) {
  return !task.done;
}

var TodoApp = function() {
  // Filter tasks
  var ready_tasks = original_tasks.filter(is_done);
  var not_ready_tasks = original_tasks.filter(is_undone);
  // Render
  return (<div className="todo-app">
            <TaskList type="not-ready-tasks" tasks={not_ready_tasks}></TaskList>
            <TaskList type="ready-tasks" tasks={ready_tasks}></TaskList>
          </div>);
};

ReactDOM.render(
  <TodoApp></TodoApp>,
  document.getElementById('app-container')
);
