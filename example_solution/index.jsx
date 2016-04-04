// react is split into two libraries, we need both
import React from 'react';
import ReactDOM from 'react-dom';

// this our data store abstraction
import {TodoData} from './model/todomodel';

// note: these are regular React components too !
import {TodoProgressBar} from './components/todoheader';
import {Editable} from './components/editable';



// init our datastore
var appstate = new TodoData();

// TaskItem represents a single ToDo task
var TaskItem = React.createClass({

  /*
  some boring getter/setters for clarity
  in a real application these might have extra features
  ...or you might just use appstate.remove directly
  */

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
    
    // we want to assign different CSS to 'done' and 'undone' items
    var taskClass = this.props.done ? 'done' : 'undone';

    // note that we can assign a Component to a variable and give it as a 
    // child to another one like this: <div>{ready}</div>
    var ready = <i className={ taskClass + ' fa fa-check-circle-o' }></i>;

    /*
    note the 'onClick' callbacks we give to buttons
    ...and the naming convention we use for our Editable 'onSave' callback

    Oh, about the Editable: it's just an editable input field that calls
    onSave when you hit `Enter` key.
    */
    return (
      <div className={ "task " + taskClass }>
        <div className="task-main">
          <Editable value={ this.props.task } onSave={ this.save } />
        </div>
        <div className="task-actions">
            <button className="task-btn remove-btn" onClick={ this.remove }>
              <i className="fa fa-times-circle-o"></i>
            </button>
            <button className="task-btn" onClick={ this.toggle }>{ ready }</button>
        </div>
      </div>
    );
  }
});



// we need an input field for adding new ToDos!
// ... and that keeps track of its own state
// ... and that adds the ToDo when you hit enter
// ... and that resets its state when the new ToDo is added
// ... because there's always some complexity
var AddTaskInput = React.createClass({

  getInitialState: function () {
    // the input field is empty when we start
    return {task: ""} 
  },

  change: function (e) {
    // but it keeps changing when you write into it
    this.setState({task: e.target.value});
  },

  add: function (e) {
    if (e.key !== "Enter") return;
    
    // except when you hit the Enter key
    appstate.addTask(this.state.task);
    this.setState({task: ""});
  },

  render: function () {

    /*
    onKeyPress={ this.add } makes us hit the add function all the time,
    but so what? it doesn't do anything unless you hit 'Enter'

    onChange saves new state and triggers a re-render of this component every time.
    ...and that's just the way the internet works.
    */

    return (
      <div className="add-task-container">
        <input 
          type="text" 
          value={ this.state.task } 
          onChange={ this.change } 
          onKeyPress={ this.add }
          placeholder="Add task..." />
      </div>);
  }
});


var TodoList = function (props) {

    var filteredTasks = props.tasks
      .filter(props.filter)
      .map(function (task) {
        return (
          /*
          Here you might wonder: why not just <TaskItem task={task}/>.

          In bigger applications, it's better to have your components
          take as simple parameters as possible to KISS.

          Note: key is a special parameter needed by React. In essence,
          it helps with performance and is not strictly mandatory (logs a warning).
          */
          <TaskItem 
            key={ task.id } 
            id={ task.id } 
            task={ task.task } 
            done={ task.done } />
        );
      });

    return <div className={"tasks " + props.type}>{filteredTasks}</div>
};



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
        
    var notReadyTasks = function (task) {
      return !task.done;
    };
        
    var readyTasks = function (task) {
      return task.done;
    };
        
    // our top component needs some children - React app is a tree of components.
    // note that <div> is also a React component, in fact, all your favourite HTML elements are!
    return (
      <div className="todo-app">
        <AddTaskInput />
        <TodoProgressBar tasks={ allTasks } />
        <TodoList tasks={ allTasks } type="not-ready-tasks" filter={ notReadyTasks } />
        <TodoList tasks={ allTasks } type="ready-tasks" filter={ readyTasks } />
      </div>
    );
  }
});



ReactDOM.render(
  <TodoApp></TodoApp>, // this is our root component
  document.getElementById('app-container') // ...so let's attach it to our app-container div (index.html)
);
