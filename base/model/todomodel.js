

const STORAGE_KEY = 'todo-state';

const DEFAULT_STATE = {"tasks":[
												{
													"id":"1e01ba13-ea47-4d24-9131-d95c23d1bb8f",
													"done":false,
													"task":"Learn React"
												},
												{
													"id":"076e0daf-e4ee-42af-8c3d-f6210920b0b7",
													"done":true,
													"task":"Rake the yard"
												},
												{
													"id":"5516fdbb-046a-4a4a-9085-36086b5ef00a",
													"done":false,
													"task":"Buy milk"
												},
												{
													"id":"385f6953-9658-4b3d-a791-afcd9460cb2b",
													"done":false,
													"task":"Buy eggs"
												},
												{
													"id":"e8f3921b-157c-4ac5-b54c-24485048a9c1",
													"done":true,
													"task":"Prepare next trip to south"
												}]};


function uuid() {
		var i, random;
		var uuid = '';

		for (i = 0; i < 32; i++) {
			random = Math.random() * 16 | 0;
			if (i === 8 || i === 12 || i === 16 || i === 20) {
				uuid += '-';
			}
			uuid += (i === 12 ? 4 : (i === 16 ? (random & 3 | 8) : random))
				.toString(16);
		}

		return uuid;
}

function save_state (state) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  return state;
}

function load_state () {
  var state = localStorage.getItem(STORAGE_KEY);
  if (!state) {
    state = DEFAULT_STATE;
    save_state(state);
  } else  {
    state = JSON.parse(state);
  }
  return state;
}


export class TodoData {
  constructor() {
    this.state = load_state();
    this.callbacks = [];
  }
  subscribe(callback) {
    this.callbacks.push(callback);
  }
  notify() {
    save_state(this.state);
    this.callbacks.forEach(cb => cb(this.state));
  }
  load() {
    this.state = load_state();
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
