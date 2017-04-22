# Excercise 8

Reactive apps
Our application has not yet any interactions, lets change that.

First you have to do some cleanup and add new things into your app.

We have already created TodoData-model to persist your tasks into localStorage.
You don't have to care about it's implementation yet, we'll use it as a library.

## Tasks
- Copy `models/`-directory to your app.
- Import `TodoData` in your `index.jsx`
- Replace old TodoApp-component with new TodoApp-component from `excercise8/todoapp.jsx`

New TodoApp-component uses the imported TodoData-model and is class-component (not function component)

```javascript
// in index.jsx head
// Importing TodoData-model to your app
import {TodoData} from './model/todomodel';

// init our datastore
const appstate = new TodoData();

```

## Tips


### Tip 1
Converting function component to class component is easy:

```javascript

const HelloFunctionComponent = (props) => {
  const greeting = 'Hello ' + props.name + '!';
  return <h1>{greeting}</h1>;
};

class HelloClassComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    const greeting = 'Hello ' + props.name + '!';
    return <h1>{greeting}</h1>;
  }
}
```


### Tip 2
You can start from clean slate by just copying `model`-directory and `solution/index.jsx` to your base.
