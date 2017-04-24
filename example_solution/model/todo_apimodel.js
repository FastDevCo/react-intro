import axios from 'axios';

export class TodoData {

  constructor() {
    this.state = {
      tasks: []
    };
    this.callbacks = [];

    this.load();
  }

  subscribe(callback) {
    this.callbacks.push(callback);
  }

  notify() {
    this.callbacks.forEach(cb => cb(this.state));
  }

  load() {
    axios.get('http://localhost:8888/api/todos')
      .then(response => {
        this.state = {
          tasks: response.data
        }
        this.notify();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  getState() {
    return this.state;
  }

  getTasks() {
    return this.state.tasks;
  }

  getTask(task_id) {
    return this.state.tasks.find(task => task.id == task_id)
  }

  addTask(task) {
    axios.post('http://localhost:8888/api/todos', {task: task})
      .then((response) => {
        this.state.tasks.push(response.data);
        this.notify();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  removeTask(task_id) {
    axios.delete(`http://localhost:8888/api/todos/${task_id}`)
      .then((response) => {
        this.state.tasks = this.state.tasks.filter(task => task.id !== task_id);
        this.notify();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  updateTask(task_id, updated_task) {
    axios.put(`http://localhost:8888/api/todos/${task_id}`, {task: updated_task})
      .then((response) => {
        this.state.tasks = this.state.tasks.map(task => {
          if (task.id === task_id) return response.data;
          return task;
        });
        this.notify();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  toggleTask(task_id) {
    const task = this.getTask(task_id)
    task.done = !task.done
    this.updateTask(task_id, task)
  }
}
