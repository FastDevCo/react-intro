
import {TodoData} from './model/todomodel';

var React = require('react');
var ReactDOM = require('react-dom');

var appstate = new TodoData();


function Task (props) {
  return <h1>{props.item.task}</h1>
}

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
    var tasks = this.state.tasks.map(function (t) {
      return (<Task item={t} />)
    });
    return (<div className="todo-app">{tasks}</div>);
  }
});



ReactDOM.render(
  <TodoApp></TodoApp>,
  document.getElementById('app-container')
);
