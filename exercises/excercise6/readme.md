# Excercise 6

Done tasks

Our UI-designer created styles also for done tasks. Done task-list is sibling of undone task-list and uses class `ready-tasks`.
For `Task`-components we have classes `done / undone`

## Tasks
- Modify `TaskList`-component so you can use it generally for two lists. (done and undone)
- Use modified `TaskList`-component for done-tasks-list

## Desired output
![https://github.com/FastDevCo/react-intro/blob/master/exercises/excercise6/done_and_undone.png](https://github.com/FastDevCo/react-intro/blob/master/exercises/excercise6/done_and_undone.png)


## Tips

#### Tip 1
You can use plain javascript (functions, conditionals, loops, etc. - especially Array.map is useful) in your JSX-code.

**ie.**

```
<div className={"tasks " + type}>Hello!</div>
```

#### Tip 2
You probably want to use `Array.filter` when selecting items for done and undone lists.

```
var people = [
  {age: 4, name: "Pekka"},
  {age: 35, name: "Mauri"},
  {age: 12, name: "Liisa"},
  {age: 66, name: "Sami"},
  {age: 21, name: "Laura"}
];


// Get names of people over 18
var over_18 = people.filter(function (human) {
  return human.age > 18;
}).map(function (human) {
  return human.name;
});

// ->

["Mauri", "Sami", "Laura"]

```
#### Tip 3

You can use predicate functions in place of anonymous functions. That will make your code cleaner, readable and declarative.

```

function is_over_18 (human) {
  return human.age > 18;
}

var over_18 = people.filter(is_over_18);

```
