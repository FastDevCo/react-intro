# Excercise 3

Refactoring tasks, this is little bit easier than previous tasks

Now we are able to render list of strings into `<li>`-tags. Great!

Because our app will probably grow its good idea to refactor it for little smaller **components**.

## Task

- Substitute `<li></li>`-list-items with our previous made **Task**-components.
- Create **new component** named `TaskList` and move your list forming functionality to there.
- Remove references to `originalTasks` from `TaskList` and input them in your main application component

After refactoring your TodoApp-component should look like this:

```javascript
const TodoApp = () => {
  return (<div className='todo-app'>
            <TaskList tasks={originalTasks}></TaskList>
          </div>);
}
```
