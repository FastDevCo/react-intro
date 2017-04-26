import React, {Component} from 'react';
import ReactDOM from 'react-dom';

// Importing TodoData-model to your app
import {TodoData} from './model/todomodel';

import {TodoProgressBar} from './components/todoheader';
import {Editable} from './components/editable';

// init our datastore
const appstate = new TodoData();

// we need an input field for adding new ToDos!
// ... and that keeps track of its own state
// ... and that adds the ToDo when you hit enter
// ... and that resets its state when the new ToDo is added
// ... because there's always some complexity
class AddTaskInput extends Component {

  constructor(props) {
    super(props);

    this.state = {
      task: ''  // the input field is empty when we start
    }

    this.change = this.change.bind(this);
    this.add = this.add.bind(this);
  }

  change(e) {
    // but it keeps changing when you write into it
    this.setState({task: e.target.value});
  }

  add(e) {
    if (e.key !== 'Enter') return;

    // except when you hit the Enter key
    appstate.addTask(this.state.task);
    this.setState({task: ''});
  }

  render() {

    /*
    onKeyPress={this.add } makes us hit the add function all the time,
    but so what? it doesn't do anything unless you hit 'Enter'

    onChange saves new state and triggers a re-render of this component every time.
    ...and that's just the way the internet works.
    */

    return (
      <div className='add-task-container'>
        <input
          type='text'
          value={this.state.task}
          onChange={this.change}
          onKeyPress={this.add}
          placeholder='Add task...' />
      </div>
    );
  }
};

// Task represents a single ToDo task
class Task extends Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.remove = this.remove.bind(this);
    this.save = this.save.bind(this);
  }
  save(newValue) {
    appstate.updateTask(this.props.id, {value: newValue});
  }

  remove() {
    appstate.removeTask(this.props.id);
  }

  toggle(task) {
    appstate.toggleTask(this.props.id);
  }

  render() {
    // Destructure task from props
    const { task } = this.props

    // we want to assign different CSS to 'done' and 'undone' items
    const taskClass = task.done ? 'done' : 'undone'

    // note that we can assign a Component to a variable and give it as a
    // child to another one like this: <div>{ready}</div>
    const ready = <i className={`${taskClass} fa fa-check-circle-o`}></i>


    return (
      <div className={`task ${taskClass}`}>
        <div className="task-main">
          <Editable value={task.value} onSave={this.save} />
        </div>
        <div className="task-actions">
            <button
              className="task-btn remove-btn"
              onClick={this.remove}>
              <i className="fa fa-times-circle-o"></i>
            </button>
            <button className="task-btn" onClick={this.toggle}>{ready}</button>
        </div>
      </div>
    );
  }
}


const TaskList = ({tasks, type}) => {
  const items = tasks.map(task => <Task task={task} />);
  return <div className={`tasks ${type}`}>{items}</div>;
}

// Predicate functions
const isDone = task => task.done;
const isUndone = task => !task.done;


class TodoApp extends Component {
  /*
  We use the constructor and the React Component's built in componentDidMount method
  to link our data store abstraction to our React application, se React knows
  to re-render every time our data changes.
  */

  constructor(props) {
    super(props);
    // Set component's state
    this.state = {tasks: appstate.getTasks()};
  }

  componentDidMount() {
    /*
    This is a React Component LifeCycle method.
    tl:dr; it gets run if this component is mounted to the DOM.

    The idea is that our subscriber function calls setState whenever
    appstate notifies that our data has changed.

    Component.setState triggers render() so React knows to re-render
    when data has changed.
    */
    appstate.subscribe(state => {
      this.setState({tasks: state});
    });
  }

  render() {
    // Filter tasks
    const allTasks = this.state.tasks;
    const readyTasks = allTasks.filter(isDone);
    const notReadyTasks = allTasks.filter(isUndone);

    return (<div className='todo-app'>
              <AddTaskInput />
              <TodoProgressBar tasks={allTasks} />
              <TaskList type='not-ready-tasks' tasks={notReadyTasks}></TaskList>
              <TaskList type='ready-tasks' tasks={readyTasks}></TaskList>
            </div>);
  }
}


ReactDOM.render(
  <TodoApp></TodoApp>,
  document.getElementById('app-container')
);
