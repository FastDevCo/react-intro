# Excercise 8

Reactive apps
Our application has not yet any interactions, lets change that.

First you have to do some cleanup and add new things into your app.

We have already created TodoData-model to persist your tasks into localstorage. You don't have to care about it because we're just using it through API.

## Tasks
- Copy `model/`-directory to your app.
- Import `TodoData` in your `index.jsx`
- Replace old TodoApp-component with new TodoApp-component from `excercise8/todoapp.jsx`

New TodoApp-component uses the imported TodoData-model and is class-component (not function component)

```
// in index.jsx head
// Importing TodoData-model to your app
import {TodoData} from './model/todomodel';

// init our datastore
var appstate = new TodoData();

```

## Tips


### Tip 1
Converting function component to class component is easy:

```

var HelloFunctionComponent = function(props) {
  var greeting = "Hello " + props.name + "!";
  return (<h1>{greeting}</h1>);
};


var HelloClassComponent = React.createClass({

  render: function() {
    var greeting = "Hello " + this.props.name + "!";
    return (<h1>{greeting}</h1>);
  }
});

```



### Tip 2
You can start from clean slate by just copying `model`-directory and `solution/index.jsx` to your base.
