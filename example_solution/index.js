// react is split into two libraries, we need both
import React, {Component} from 'react';
import ReactDOM from 'react-dom';

// this our data store abstraction
import {TodoData} from './model/todomodel';
// use this instead if you want to test this with https://github.com/FastDevCo/nodejs-intro
// import {TodoData} from './model/todo_apimodel';

// note: these are regular React components too !
import {TodoProgressBar} from './components/todoheader';
import {Editable} from './components/editable';

/*
NOTE: when reading this file for learning purposes, you actually might want to
scroll down to the `ReactDOM.render(` line, then TodoApp class and work your
way up from there :)
*/

// init our datastore
const appstate = new TodoData();

// Task represents a single ToDo task
class Task extends Component {

  /*
  some boring getter/setters for clarity
  in a real application these might have extra features
  ...or you might just use appstate.remove directly
  */

  constructor(props) {
    super(props);

    this.remove = this.remove.bind(this);
    this.save = this.save.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  remove() {
    appstate.removeTask(this.props.id);
  }

  save(task) {
    appstate.updateTask(this.props.id, {value: task});
  }

  toggle(task) {
    appstate.toggleTask(this.props.id);
  }

  render() {

    // we want to assign different CSS to 'done' and 'undone' items
    const taskClass = this.props.done ? 'done' : 'undone';

    // note that we can assign a Component to a variable and give it as a
    // child to another one like this: <div>{ready}</div>
    const ready = <i className={`${taskClass} fa fa-check-circle-o`}></i>;

    /*
    note the 'onClick' callbacks we give to buttons
    ...and the naming convention we use for our Editable 'onSave' callback

    Oh, about the Editable: it's just an editable input field that calls
    onSave when you hit `Enter` key.
    */
    return (
      <div className={`task ${taskClass}`}>
        <div className="task-main">
          <Editable value={this.props.task} onSave={this.save} />
        </div>
        <div className="task-actions">
            <button className="task-btn remove-btn" onClick={this.remove}>
              <i className="fa fa-times-circle-o"></i>
            </button>
            <button className="task-btn" onClick={this.toggle}>{ready}</button>
        </div>
      </div>
    );
  }
}



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


const TodoList = (props) => {
  const filteredTasks = props.tasks
    .filter(props.filter)
    .map(task => {
      return (
        /*
        Here you might wonder: why not just <Task task={task}/>.

        In bigger applications, it's better to have your components
        take as simple parameters as possible to KISS.

        Note: key is a special parameter needed by React. In essence,
        it helps with performance and is not strictly mandatory (logs a warning).
        */
        <Task
          key={task.id}
          id={task.id}
          task={task.value}
          done={task.done} />
      );
    });

  return <div className={`tasks  ${props.type}`}>{filteredTasks}</div>
};


class TodoApp extends Component {
  /*
  We use the constructor and the React Component's built in componentDidMount method
  to link our data store abstraction to our React application, se React knows
  to re-render every time our data changes.
  */

  constructor(props) {
    super(props);
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
    const allTasks = this.state.tasks;
    const notReadyTasks = task => !task.done;
    const readyTasks = task => task.done;

    // our top component needs some children - React app is a tree of components.
    // note that <div> is also a React component, in fact, all your favourite HTML elements are!
    return (
      <div className='todo-app'>
        <AddTaskInput />
        <TodoProgressBar tasks={allTasks} />
        <TodoList tasks={allTasks} type='not-ready-tasks' filter={notReadyTasks} />
        <TodoList tasks={allTasks} type='ready-tasks' filter={readyTasks} />
      </div>
    );
  }
}


ReactDOM.render(
  <TodoApp></TodoApp>, // this is our root component
  document.getElementById('app-container') // ...so let's attach it to our app-container div (index.html)
);
