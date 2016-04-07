
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
