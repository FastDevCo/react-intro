
import {TodoData} from './model/todomodel';

var React = require('react');
var ReactDOM = require('react-dom');
import {TodoProgressBar} from './components/todoheader';
import {Editable} from './components/editable';

var appstate = new TodoData();


var TaskItem = React.createClass({
  remove: function () {
    appstate.removeTask(this.props.id);
  },
  save: function (task) {
    appstate.updateTask(this.props.id, task);
  },
  toggle: function (task) {
    appstate.toggleTask(this.props.id);
  },
  render: function () {
    var task_class = this.props.done ? 'done' : 'undone';
    var ready = <i className={task_class + " fa fa-check-circle-o"}></i>;
    return (<div className={"task " + task_class}>
              <div className="task-main">
                <Editable value={this.props.task} onSave={this.save} />
              </div>
              <div className="task-actions">
                  <button className="task-btn remove-btn" onClick={this.remove}><i className="fa fa-times-circle-o"></i></button>
                  <button className="task-btn" onClick={this.toggle}>{ready}</button>
              </div>
            </div>);
  }
});

var AddTaskInput = React.createClass({
  getInitialState: function () {
    return {task: ""}
  },
  change: function (e) {
    this.setState({task: e.target.value});
  },
  add: function (e) {
    if (e.key !== "Enter") return;
    appstate.addTask(this.state.task);
    this.setState({task: ""});
  },
  render: function () {
    return (<div className="add-task-container">
              <input type="text" value={this.state.task} onChange={this.change} onKeyPress={this.add} placeholder="Add task..." />
            </div>);
  }
});


var TodoList = function (props) {
    var filtered_tasks = props.tasks
      .filter(props.filter)
      .map(function (task) {
        return (<TaskItem key={task.id} id={task.id} task={task.task} done={task.done} />)
      });
    return <div className={"tasks " + props.type}>{filtered_tasks}</div>
};

var TodoApp = React.createClass({
  getInitialState: function() {
    return appstate.getState();
  },
  componentDidMount: function () {
    var that = this;
    appstate.subscribe(function (state) {
      that.setState(state);
    });
  },
  render: function() {
    var all_tasks = this.state.tasks;
    // Only tasks that have not been done yet
    var not_ready_tasks = function (task) {
      return !task.done;
    };
    // Only tasks that have been done already
    var ready_tasks = function (task) {
      return task.done;
    };
    // Actual render
    return (
      <div className="todo-app">
        <AddTaskInput />
        <TodoProgressBar tasks={all_tasks}></TodoProgressBar>
        <TodoList tasks={all_tasks} type="not-ready-tasks" filter={not_ready_tasks} />
        <TodoList tasks={all_tasks} type="ready-tasks" filter={ready_tasks} />
      </div>
    );
  }
});



ReactDOM.render(
  <TodoApp></TodoApp>,
  document.getElementById('app-container')
);
