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


const TodoApp = () => {
  // Filter tasks
  const readyTasks = originalTasks.filter(isDone);
  const notReadyTasks = originalTasks.filter(isUndone);

  return (<div className='todo-app'>
            <AddTaskInput />
            <TaskList type='not-ready-tasks' tasks={notReadyTasks}></TaskList>
            <TaskList type='ready-tasks' tasks={readyTasks}></TaskList>
          </div>);
}

ReactDOM.render(
  <TodoApp></TodoApp>,
  document.getElementById('app-container')
);
