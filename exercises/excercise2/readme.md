# Excercise 2

Rendering lists by programming

Our code is now working but there is very much repeatitiness now.

You should be using your brain and iterate lists before your fingers and _Ctrl+c - Ctrl+v_

Remember React-components (including html-tags) are just data.

## Task

- Create list of tasks using `Array.map` for modifying strings in list into `<li></li>`-tags

## Tips


#### Tip 1
You can map data through function (or component) with `map`:

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

// ->
new_tasks = [
              "Do dishes is a task you shoudl do!",
              "Code application is a task you should do!",
              ...
             ];
```


#### Tip 2
You can render list of components just like single variable:
```
function List () {
  var things = [<li>A</li>, <li>B</li>, <li>C</li>];

  return <ul>{things}</ul>
}


//->


<ul>
  <li>A</li>
  <li>B</li>
  <li>C</li>
</ul>

```
