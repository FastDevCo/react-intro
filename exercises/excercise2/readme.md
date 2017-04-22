# Excercise 2

Rendering lists by programming

Our code is now working but it's a bit repetitive.

You should be using your brain and iterate lists rather than _Ctrl+c - Ctrl+v_

Remember React-components (including html-tags) are just data.

## Task

- Create a list of tasks using `Array.map` for modifying strings in list into `<li></li>`-tags

## Tips


#### Tip 1
You can map data through function (or component) with `map`:

```javascript
const tasks = [
  'Do dishes',
  'Code application',
  'Start marketing campaign',
  'Get funding',
];

const newTasks = tasks.map(task => {
  return task + ' is a task you should do!';
});

/*
->
[
  'Do dishes is a task you should do!',
  'Code application is a task you should do!',
  ...
];
*/
```


#### Tip 2

You can render list of components just like single variable:
```javascript
const List = (props) => {
  const things = [<li>A</li>, <li>B</li>, <li>C</li>];
  return <ul>{things}</ul>;
}

/*
->
<ul>
  <li>A</li>
  <li>B</li>
  <li>C</li>
</ul>
*/

```
