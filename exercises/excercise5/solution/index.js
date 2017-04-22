import React, {Component} from 'react';
import ReactDOM from 'react-dom';

const originalTasks = [{
  id: '1e01ba13-ea47-4d24-9131-d95c23d1bb8f',
  done: false,
  value: 'Learn React'
}, {
  id: '076e0daf-e4ee-42af-8c3d-f6210920b0b7',
  done: true,
  value: 'Rake the yard'
}, {
  id: '5516fdbb-046a-4a4a-9085-36086b5ef00a',
  done: false,
  value: 'Buy milk'
}, {
  id: '385f6953-9658-4b3d-a791-afcd9460cb2b',
  done: false,
  value: 'Buy eggs'
}, {
  id: 'e8f3921b-157c-4ac5-b54c-24485048a9c1',
  done: true,
  value: 'Prepare next trip to south'
}];

const Task = ({task}) => (
  <div className='task undone'>
    <div className='task-main'>
      <span><strong>{task.value}</strong></span>
    </div>
  </div>
)

const TaskList = ({tasks}) => {
  const items = tasks.map(task => <Task task={task} />);
  return <div className='tasks not-ready-tasks'>{items}</div>;
}

const TodoApp = () => {
  return (<div className='todo-app'>
            <TaskList tasks={originalTasks}></TaskList>
          </div>);
}

ReactDOM.render(
  <TodoApp></TodoApp>,
  document.getElementById('app-container')
);
