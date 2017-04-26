import React, {Component} from 'react';

/*

  A quick array.reduce refresher (skip if familiar):

  const accumuLatorStartValue = 0

  [1, 2, 3].reduce(function (accumulator, arrayItem) {
    return accumulator + arrayItem;
  }, accumuLatorStartValue);

  => 0 + 1 + 2 + 3 = 6

*/



export const TodoProgressBar = (props) => {
  // Calculate statistics here
  // Implement calculation logic

  // Calculate progress-bar width
  const p = 50;
  const style = {
    width: `${p}%`
  };

  return (
    <div className='progress-container'>
      <div className='progress' style={style}>&nbsp;</div>
    </div>
  );
}
