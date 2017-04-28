// Predicate functions, add these somewhere into your index.jsx
const isDone = task => task.done;
const isUndone = task => !task.done;



// Replace the TodoApp-component from your index.js with this:
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

    The idea is that our subscriber callback calls setState whenever
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
