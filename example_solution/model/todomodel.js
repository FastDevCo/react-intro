
const STORAGE_KEY = 'todo-state3';

/*
  Seed data to have something to work with
*/
const DEFAULT_STATE = {
  "tasks": {
    "1e01ba13-ea47-4d24-9131-d95c23d1bb8f": {
      "done": false,
      "value": "Learn React"
    },
    "076e0daf-e4ee-42af-8c3d-f6210920b0b7": {
      "done": true,
      "value": "Rake the yard"
    },
    "5516fdbb-046a-4a4a-9085-36086b5ef00a": {
      "done": false,
      "value": "Buy milk"
    },
    "385f6953-9658-4b3d-a791-afcd9460cb2b": {
      "done": false,
      "value": "Buy eggs"
    },
    "e8f3921b-157c-4ac5-b54c-24485048a9c1": {
      "done": true,
      "value": "Prepare next trip to south"
    }
  }
};


/*
  Just returns a valid UUID, e.g
  uuid(); // 76306e1f-2614-4f95-ae14-b271127cc774

  We use this to give tasks random IDs. Why? Because UUIDs are fn awesome.
*/
function uuid() {
  let i, random;
  let uuid = '';

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
  Creates a new list out of the two supplied by applying the function to each
  equally-positioned pair in the lists. The returned list is truncated to the
  length of the shorter of the two input lists.

  Example:

  const f = (x, y) => {
    // ...
  };
  zipWith(f, [1, 2, 3], ['a', 'b', 'c']);
  //=> [f(1, 'a'), f(2, 'b'), f(3, 'c')]

*/
function zipWith(fn, a, b) {
  var rv = [];
  var idx = 0;
  var len = Math.min(a.length, b.length);
  while (idx < len) {
    rv[idx] = fn(a[idx], b[idx]);
    idx += 1;
  }
  return rv;
}


/*
* Convert object of objects into array of objects and assoc the key into attribute 'id'
* Example:
* toIdList({ 1: {name: "Aatu"}, 2: {name: "Pirkko"}})
* //=> [{name: "Aatu", id: 1}, {name: "Pirkko", id: 2}]
*/
function toIdList(object) {
  const ids = Object.keys(object);
  const values = Object.values(object);
  return zipWith((id, value) => Object.assign(value, {'id': id}), ids, values);
}


/*
  Helper to save state into localStorage with STORAGE_KEY as the key.
  Its only useful for persisting the data so it wont go into /dev/null
  when youre refreshing the browser.
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
  NOTE: HERE IS THE BEEF!
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
    // Every time something state changing happens, we call notify()-function
    // This function executes all subscribed callbacks. Simple and efficient :)
    // -> so every time change happens it triggers chain of events
    // and eventually re-renders the React components.

    // This just converts tasks to list-form
    const tasklist = toIdList(this.state.tasks)
    // Call all handlers
    this.callbacks.forEach(cb => cb(tasklist));
  }

  save() {
    // Save the state into localstorage (or actually anywhere you like)
    saveState(this.state);
  }

  load() {
    this.state = loadState();
    this.save();
    this.notify();
  }

  reset() {
    this.state = DEFAULT_STATE;
    this.save();
    this.notify();
  }

  getState() {
    return this.state;
  }

  getTasks() {
    return toIdList(this.state.tasks);
  }

  addTask(task) {
    const task_id = uuid();
    this.state.tasks[task_id] = { done: false, value: task };
    this.save();
    this.notify();
  }

  removeTask(task_id) {
    delete this.state.tasks[task_id];
    this.save();
    this.notify();
  }

  updateTask(task_id, updated_task) {
    this.state.tasks[task_id] = updated_task
    this.save();
    this.notify();
  }

  toggleTask(task_id) {
    this.state.tasks[task_id].done = !this.state.tasks[task_id].done;
    this.save();
    this.notify();
  }
}
