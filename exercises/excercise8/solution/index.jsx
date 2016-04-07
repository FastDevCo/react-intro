
var React = require('react');
var ReactDOM = require('react-dom');


// Importing TodoData-model to your app
import {TodoData} from './model/todomodel';

// init our datastore
var appstate = new TodoData();

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

var TodoApp = React.createClass({

  /*
  getInitialState and componentDidMount are React Component's built in methods.

  They link our data store abstraction to our React application, se React knows
  to re-render every time our data changes.
  */

  getInitialState: function() {
    /*
    This is a React Component LifeCycle method.
    tl:dr; it gets run as if it was the constructor of this class.

    The idea is that we set TodoApp.state = appstate.getState();
    */
    return appstate.getState();
  },

  componentDidMount: function () {
    /*
    This is a React Component LifeCycle method.
    tl:dr; it gets run if this component is mounted to the DOM.

    The idea is that our subscriber function calls setState whenever
    appstate notifies that our data has changed.

    Component.setState triggers render() so React knows to re-render
    when data has changed.
    */
    var that = this;
    appstate.subscribe(function (state) {
      that.setState(state);
    });
  },

  render: function() {

    // our child components want some parameters so let's figure them out
    var allTasks = this.state.tasks;

    // our top component needs some children - React app is a tree of components.
    // note that <div> is also a React component, in fact, all your favourite HTML elements are!
    // Filter tasks
    var ready_tasks = allTasks.filter(is_done);
    var not_ready_tasks = allTasks.filter(is_undone);
    // Render
    return (<div className="todo-app">
              <AddTaskInput />
              <TaskList type="not-ready-tasks" tasks={not_ready_tasks}></TaskList>
              <TaskList type="ready-tasks" tasks={ready_tasks}></TaskList>
            </div>);
  }
});


ReactDOM.render(
  <TodoApp></TodoApp>,
  document.getElementById('app-container')
);
