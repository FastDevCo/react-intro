

# Excercise N

Add `TodoData`-model to your app by copying `model` directory into place.


Import `TodoData` in head of your `index.jsx`

```
import {TodoData} from './model/todomodel';
```

Initialize app state by inserting following line after importing `TodoData`
```
var appstate = new TodoData();
```

Add following lifecycle functions to your `TodoApp`-component

```
getInitialState: function() {
  return appstate.getState();
}
componentDidMount: function () {
  var that = this;
  appstate.subscribe(function (state) {
    that.setState(state);
  });
}
```


## Task

Refactor your app to use new state and not the mock-data.
