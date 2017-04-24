import React, {Component} from 'react';

/*

  A quick array.reduce refresher (skip if familiar):

  const accumuLatorStartValue = 0

  [1, 2, 3].reduce(function (accumulator, arrayItem) {
    return accumulator + arrayItem;
  }, accumuLatorStartValue);

  => 0 + 1 + 2 + 3 = 6

*/

const calculateStatistics = (tasks) => {
  return tasks.reduce((stats, task) => {
    // With every task, done+1 if done, undone+1 if undone and every case: total+1
    return {
      done: task.done ? stats.done + 1 : stats.done,
      undone: !task.done ? stats.undone + 1 : stats.undone,
      total: stats.total + 1
    };
  }, {done: 0, undone: 0, total: 0});
}

// Calculate how many % is ready
const calculateGoalPercent = (stats) => stats.done / stats.total * 100


export const TodoProgressBar = (props) => {
  // Calculate statistics
  const stats = calculateStatistics(props.tasks);

  // Calculate progress-bar width
  const style = {
    width: `${calculateGoalPercent(stats)}%`
  };

  return (
    <div className='progress-container'>
      <div className='progress' style={style}>&nbsp;</div>
    </div>
  );
}
