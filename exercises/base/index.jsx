
// Loading react related libraries
var React = require('react');
var ReactDOM = require('react-dom');

import {TodoData} from './model/todomodel';
import {Editable} from './components/editable';
import {TodoProgressBar} from './components/todoheader.jsx';

var appstate = new TodoData();

var Task = React.createClass({
  toggle: function() {
    appstate.toggleTask(this.props.content.id);
  },
  remove: function() {
    appstate.removeTask(this.props.content.id);
  },
  save: function(task) {
    appstate.updateTask(this.props.content.id, task);
  },
  render: function() {
    var taskClass = this.props.done ? 'done' : 'undone';
    var ready = <i className={ taskClass + ' fa fa-check-circle-o' }></i>; 
    return (
      <div className={"task " + taskClass}>
        <div className="task-main">
          <Editable value={ this.props.content.task } onSave={ this.save } />
        </div>
        
        <div className="task-actions">
          <button className="task-btn remove-btn" onClick={ this.remove }>
            <i className="fa fa-times-circle-o" />
          </button>
          <button className="task-btn" onClick={ this.toggle }>{ ready }</button>
        </div>
      </div>
    )
  }
});

var TaskList = function (props) {
  var tasks = props.tasks.map(function (task) {
    return <Task content={task} />;
  });

  return <div className={"tasks " + props.type}>{tasks}</div>;
};

var AddTaskInput = React.createClass({
  getInitialState: function() {
    // Sets the input's internal state to empty
    return {task: ""};
  },
  update: function(e) {
    var text = e.target.value;
    this.setState({task: text});
  },
  keyDown: function (e) {
    if (e.key == 'Enter') {
      appstate.addTask(this.state.task);
      this.setState({task: ""});
    }
  },
  render: function() {
    return (
      <div className="add-task-container">
        <input type="text" 
               value={this.state.task} 
               onChange={this.update}
               onKeyPress={this.keyDown}
               placeholder="Add a task" />
      </div>
    );
  }
});

var is_done = function(task) {return task.done};
var is_undone = function(task) {return !task.done};

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
      <TodoProgressBar tasks={ allTasks } />
      <TaskList type="not-ready-tasks" tasks={not_ready_tasks} />
      <TaskList type="ready-tasks" tasks={ready_tasks} />
    </div>);
  }
});

ReactDOM.render(
  <TodoApp />,
  document.getElementById('app-container')
);

