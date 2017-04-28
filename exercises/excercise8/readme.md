# Excercise 8

Reactive apps

Even though we have now some interactive elements, our application has not yet any interactions, lets change that!

First you have to do some cleanup and add few new things into your app.

Until now our data has been just static javascript object and so changing it (ie. adding, removing, updating tasks)
is little bit difficult. Thats the reason why we have to change to model that supports React friendly way of taking care about the changes.

Because this is course for react and not so much for data handling frameworks (such as redux)

We have already created very simple datamodel called TodoData to persist your tasks into your browsers localstorage and allow all kinds of modifications.
You don't have to care about it's implementation yet, we'll use it just as a library.

However you should probably take short inspection for the code of the model and try to understand how it works.

## Tasks
- Copy `model/`-directory to your app.
- Import `TodoData` into your `index.js`
- Replace old TodoApp-component with new TodoApp-component from `excercise8/todoapp.js` (just copy-paste and read the comments)

New TodoApp-component uses the imported **TodoData**-model and is class component (not function component)

```javascript
// in index.js head
// Importing TodoData-model to your app
import {TodoData} from './model/todomodel';

// init our datastore
const appstate = new TodoData();

```

## Tips


### Tip 1
We have already done the conversion and added some nice things, but if you ever have to do it yourself
converting function component to class component is easy:

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
