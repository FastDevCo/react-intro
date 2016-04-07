# Excercise 9

Adding tasks.

First interaction is to create new tasks.

## Tasks
- Convert `AddTaskInput`-component to class-component
- Add internal state for `AddTaskInput`-component, initial state is below.
- Update internal state if input-field is changed
- Add new task if `Enter` is pressed in input-field and empty the field after append


You can add new task to `TodoData` with
```
var appstate = new TodoData();

appstate.addTask("Feed the dog!");
```


```
// AddTaskInput-internal initial state

getInitialState: function () {
  // the input field is empty when we start
  return {task: ""}
}
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

input-field has at least following useful attributes:
- **value** input-fields value
- **onChange** callback on input change, event as parameter when calling the callback
- **onKeyPress** callback on key-press event in input-field, event as parameter when calling the callback


### Tip 3

**onKeyPress** has event in first parameter when calling callback.
You can find the pressed key easily with `event.key`
ie.
`e.key === "Enter"`


### Tip 4
Read more about React event-system https://facebook.github.io/react/docs/events.html
