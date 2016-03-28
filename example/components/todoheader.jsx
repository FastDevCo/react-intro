var React = require('react');


export var TodoProgressBar = React.createClass({
  render: function () {
    // Calculate statistics
    var stats = this.props.tasks.reduce(function (stats, task) {
      return {
              done: task.done ? stats.done+1 : stats.done,
              undone: !task.done ? stats.undone+1 : stats.undone,
              total: stats.total+1
            };
    }, {done: 0, undone: 0, total: 0});
    // Calculate progress-bar width
    var style = {
      width: stats.done / stats.total * 100 + "%"
    }
    return (<div className="progress-container">
              <div className="progress" style={style} >&nbsp;</div>
            </div>);
  }
});
