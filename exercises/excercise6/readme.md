# Excercise 6

Done tasks

Our UI-designer also created styles for **done** tasks. **Done tasks**-list is sibling of **undone tasks**-list and uses CSS-class `ready-tasks`.
For `Task`-components we just have classes `done / undone`

## Tasks
- Modify `TaskList`-component so you can use it generally for two lists. (done and undone)
- Use modified `TaskList`-component for done-tasks-list

## Desired output
![https://github.com/FastDevCo/react-intro/blob/master/exercises/excercise6/done_and_undone.png](https://github.com/FastDevCo/react-intro/blob/master/exercises/excercise6/done_and_undone.png)


## Tips

#### Tip 1
You can use plain javascript (functions, conditionals, loops, etc. - especially Array.map is useful) in your JS-code.

**ie.**

```html
<div className={`tasks ${type}`}>Hello!</div>
```

#### Tip 2
You probably want to use `Array.filter` when selecting items for done and undone lists.

```javascript
const people = [
  {age: 4, name: 'Pekka'},
  {age: 35, name: 'Mauri'},
  {age: 12, name: 'Liisa'},
  {age: 66, name: 'Sami'},
  {age: 21, name: 'Laura'}
];


// Get names of people over 18
const over18 = people.filter(human => human.age > 18)
                     .map(human => human.name);

// ->

['Mauri', 'Sami', 'Laura']

```
#### Tip 3

You can use predicate functions in place of anonymous functions. That will make your code cleaner, more readable and declarative.

```javascript

const isOver18 = (human) => human.age > 18;
const over18 = people.filter(isOver18);

```


#### ProTip 4

You can pass functions as props for React-components
