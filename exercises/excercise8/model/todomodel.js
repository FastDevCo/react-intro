
const STORAGE_KEY = 'todo-state';

/*
  Seed data to have something to work with
*/
const DEFAULT_STATE = {
  'tasks': [
    {
      'id': '1e01ba13-ea47-4d24-9131-d95c23d1bb8f',
      'done': false,
      'task': 'Learn React'
    },
    {
      'id': '076e0daf-e4ee-42af-8c3d-f6210920b0b7',
      'done': true,
      'task': 'Rake the yard'
    },
    {
      'id': '5516fdbb-046a-4a4a-9085-36086b5ef00a',
      'done': false,
      'task': 'Buy milk'
    },
    {
      'id': '385f6953-9658-4b3d-a791-afcd9460cb2b',
      'done': false,
      'task': 'Buy eggs'
    },
    {
      'id': 'e8f3921b-157c-4ac5-b54c-24485048a9c1',
      'done': true,
      'task': 'Prepare next trip to south'
    }
  ]
};


/*
  Just returns a valid UUID, e.g
  uuid(); // 76306e1f-2614-4f95-ae14-b271127cc774

  We use this to give tasks IDs. Why? Because UUIDs are fn awesome.
*/
function uuid() {
  var i, random;
  var uuid = '';

  for (i = 0; i < 32; i++) {
    random = Math.random() * 16 | 0;
    if (i === 8 || i === 12 || i === 16 || i === 20) {
      uuid += '-';
    }
    uuid += (i === 12 ? 4 : (i === 16 ? (random & 3 | 8) : random)).toString(16);
  }

  return uuid;
}

/*
  Helper to save state into localStorage with STORAGE_KEY as the key
*/
function saveState (state) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  return state;
}

/*
  Helper to load the state from localStorage with the STORAGE_KEY as the key
*/
function loadState () {
  var state = localStorage.getItem(STORAGE_KEY);
  if (!state) {
    state = DEFAULT_STATE;
    saveState(state);
  } else  {
    state = JSON.parse(state);
  }
  return state;
}

/*
  Data store abstraction.

  Usage:

  const appstate = TodoData();
  appstate.subscribe(fn);

  appstate.addTask(task); // fn gets called with TodoDate.state.

  Subscribe allows to add functions that get called every time the state changes. 
  This is handy when you want to call React Component's setState everytime the data in
  TodoData changes to trigger re-rendering:

  appstate.subscribe(function (state) { this.setState(state); })

  Essentially, this is just using the good old Observer pattern :)
*/

export class TodoData {
  
  constructor() {
    this.state = loadState();
    this.callbacks = [];
  }

  subscribe(callback) {
    this.callbacks.push(callback);
  }

  notify() {
    saveState(this.state);
    this.callbacks.forEach(cb => cb(this.state));
  }
  
  load() {
    this.state = loadState();
    this.notify();
  }

  reset() {
    this.state = DEFAULT_STATE;
    this.notify();
  }

  getState() {
    return this.state;
  
  }
  getTasks() {
    return this.state.tasks;
  }

  addTask(task) {
    const task_id = uuid();
    this.state.tasks.push({id: task_id, done: false, task: task});
    this.notify();
  }

  removeTask(task_id) {
    this.state.tasks = this.state.tasks.filter(task => { return task.id !== task_id });
    this.notify();
  }

  updateTask(task_id, updated_task) {
    this.state.tasks = this.state.tasks.map(task => {
        if (task.id === task_id) task.task = updated_task;
        return task;
    });
    this.notify();
  }

  toggleTask(task_id) {
    this.state.tasks = this.state.tasks.map(task => {
        if (task.id === task_id) task.done = !task.done;
        return task;
    });
    this.notify();
  }
}
