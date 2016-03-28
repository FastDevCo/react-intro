# Excercise 1.5

Refactoring little

Our code is now working but there is very much repeatitiness now.

Lets fix that.

## Task

Refactor your code so that there is no multiple markups of Task-component but that the data is mapped to Task-components.

## Tips

You can map data trough function (or component) with `map`:

```
var tasks = [
             "Do dishes"
             "Code application"
             "Start marketing campaign"
             "Get funding"
            ];

var new_tasks = tasks.map(function (task) {
  return task + " is a task you should do!";
});

/*
new_tasks = [
              "Do dishes is a task you shoudl do!",
              "Code application is a task you should do!",
              ...
             ];
*/
```
