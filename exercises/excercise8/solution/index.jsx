
var React = require('react');
var ReactDOM = require('react-dom');


// Importing TodoData-model to your app
import {TodoData} from './model/todomodel';

// init our datastore
var appstate = new TodoData();

// This will be removed soon, but not yet
var original_tasks = appstate.getTasks();


function AddTaskInput (props) {
  return (
    <div className="add-task-container">
      <input
        type="text"
        value=""
        placeholder="Add task..." />
    </div>);
}

function Task (props) {
  // we want to assign different CSS to 'done' and 'undone' items
  var taskClass = props.content.done ? 'done' : 'undone';

  // note that we can assign a Component to a variable and give it as a
  // child to another one like this: <div>{ready}</div>
  var ready = <i className={ taskClass + ' fa fa-check-circle-o' }></i>;
  // Rendering Task
  return (<div className={"task " + taskClass}>
            <div className="task-main">
              <span><strong>{props.content.task}</strong></span>
            </div>
            <div className="task-actions">
                <button className="task-btn remove-btn">
                  <i className="fa fa-times-circle-o"></i>
                </button>
                <button className="task-btn">
                  { ready }
                </button>
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
            <AddTaskInput />
            <TaskList type="not-ready-tasks" tasks={not_ready_tasks}></TaskList>
            <TaskList type="ready-tasks" tasks={ready_tasks}></TaskList>
          </div>);
};

ReactDOM.render(
  <TodoApp></TodoApp>,
  document.getElementById('app-container')
);
