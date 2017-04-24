import React, {Component} from 'react';
import ReactDOM from 'react-dom';

// Importing TodoData-model to your app
import {TodoData} from './model/todomodel';

// init our datastore
const appstate = new TodoData();

const AddTaskInput = (props) => (
  <div className='add-task-container'>
    <input
      type='text'
      value=''
      placeholder='Add task...' />
  </div>
)

const Task = ({task}) => {
  // we want to assign different CSS to 'done' and 'undone' items
  const taskClass = task.done ? 'done' : 'undone';
  // note that we can assign a Component to a variable and give it as a
  // child to another one like this: <div>{ready}</div>
  const ready = <i className={`${taskClass} fa fa-check-circle-o`}></i>;

  return (
    <div className={`task ${taskClass}`}>
      <div className='task-main'>
        <span><strong>{task.value}</strong></span>
      </div>
      <div className='task-actions'>
        <button className='task-btn remove-btn'>
          <i className='fa fa-times-circle-o'></i>
        </button>
        <button className='task-btn'>{ready}</button>
      </div>
    </div>
  )
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
              <TaskList type='not-ready-tasks' tasks={notReadyTasks}></TaskList>
              <TaskList type='ready-tasks' tasks={readyTasks}></TaskList>
            </div>);
  }
}


ReactDOM.render(
  <TodoApp></TodoApp>,
  document.getElementById('app-container')
);
